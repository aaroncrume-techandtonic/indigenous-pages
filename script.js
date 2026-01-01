/**
 * MEGA CRYPTO LOTTO ENGINE
 * 
 * Architecture:
 * 1. Config Object: Centralized constants for easy tuning.
 * 2. RNG Module: Isolated CSPRNG logic using window.crypto.
 * 3. Audio Controller: Manages sound states and policies.
 * 4. UI Controller: Handles DOM manipulation and animations.
 * 5. Game Loop: Orchestrates the flow.
 */

/* =========================================
   1. CONFIGURATION
   ========================================= */
const CONFIG = {
    // Game Rules
    rules: {
        mainCount: 5,     // Number of white balls
        mainMax: 69,      // Range 1-69
        specialCount: 1,  // Number of red balls
        specialMax: 26    // Range 1-26
    },
    
    // Animation Physics
    animation: {
        symbolHeight: 120,    // Pixels (Must match CSS --reel-h)
        baseDuration: 2000,   // Minimum spin time (ms)
        stagger: 300,         // Delay between each reel stopping (ms)
        spinSpeed: 30,        // Symbols passing per second (approx)
        stripLength: 40       // Total symbols in the DOM strip
    },
    
    // Debug Mode (Logs to console)
    debug: true
};

/* =========================================
   2. RNG MODULE (Cryptographically Secure)
   ========================================= */
const RNG = {
    /**
     * Generates a secure random integer between min and max (inclusive).
     * Uses Rejection Sampling to avoid modulo bias.
     */
    getRandomInt: (min, max) => {
        const range = max - min + 1;
        const maxRange = 0xFFFFFFFF; // 2^32 - 1
        
        // Calculate the rejection limit
        // We want the largest multiple of 'range' that fits in 'maxRange'
        const limit = maxRange - (maxRange % range);
        
        let randomValue;
        const buffer = new Uint32Array(1);
        
        do {
            window.crypto.getRandomValues(buffer);
            randomValue = buffer;
        } while (randomValue >= limit);
        
        return min + (randomValue % range);
    },

    /**
     * Generates the full set of winning numbers.
     * Returns object: { main: [int, int...], special: int }
     */
    generateDraw: () => {
        // 1. Generate Unique Main Numbers
        const mainSet = new Set();
        while (mainSet.size < CONFIG.rules.mainCount) {
            mainSet.add(RNG.getRandomInt(1, CONFIG.rules.mainMax));
        }
        // Convert to array and sort numerically
        const mainSorted = Array.from(mainSet).sort((a, b) => a - b);
        
        // 2. Generate Special Number (Independent Event)
        const special = RNG.getRandomInt(1, CONFIG.rules.specialMax);
        
        if (CONFIG.debug) {
            console.log(` Draw Generated: Main Special[${special}]`);
        }
        
        return { main: mainSorted, special: special };
    }
};

/* =========================================
   3. AUDIO CONTROLLER
   ========================================= */
const AudioSys = {
    spin: document.getElementById('sound-spin'),
    stop: document.getElementById('sound-stop'),
    win: document.getElementById('sound-win'),
    
    init: () => {
        // Pre-set volume
        AudioSys.spin.volume = 0.4;
        AudioSys.stop.volume = 0.6;
        AudioSys.win.volume = 0.8;
        // Loop the spin sound
        AudioSys.spin.loop = true;
    },
    
    playSpin: () => {
        AudioSys.spin.currentTime = 0;
        AudioSys.spin.play().catch(e => console.warn("Audio Blocked:", e));
    },
    
    stopSpin: () => {
        AudioSys.spin.pause();
    },
    
    playClick: () => {
        // Clone node allows overlapping sounds (polyphony)
        const click = AudioSys.stop.cloneNode();
        click.volume = 0.6;
        click.play().catch(() => {});
    },
    
    playWin: () => {
        AudioSys.win.currentTime = 0;
        AudioSys.win.play().catch(() => {});
    }
};

/* =========================================
   4. UI CONTROLLER & LOGIC
   ========================================= */
const UI = {
    reels:,
    btn: document.getElementById('spin-btn'),
    status: document.getElementById('status-bar'),

    /**
     * Updates the status bar text
     */
    log: (msg) => {
        UI.status.textContent = msg;
    },

    /**
     * Builds the reel strip in the DOM.
     * @param {HTMLElement} reelEl - The reel container
     * @param {number} targetVal - The winning number to land on
     * @param {number} maxRange - 69 or 26
     */
    buildStrip: (reelEl, targetVal, maxRange) => {
        // Clear previous content
        reelEl.innerHTML = '';
        const frag = document.createDocumentFragment();
        
        // 1. Fill with random "blur" numbers
        // We use a predefined length to ensure consistent animation distance
        for (let i = 0; i < CONFIG.animation.stripLength; i++) {
            const num = RNG.getRandomInt(1, maxRange);
            const div = document.createElement('div');
            div.className = 'reel-number';
            div.textContent = num;
            // Randomly blur some numbers to simulate speed
            if (Math.random() > 0.5) div.style.filter = 'blur(1px)';
            frag.appendChild(div);
        }
        
        // 2. Append the Target Number at the bottom
        const targetDiv = document.createElement('div');
        targetDiv.className = 'reel-number';
        targetDiv.textContent = targetVal;
        targetDiv.id = `target-${reelEl.id}`; // For debugging
        frag.appendChild(targetDiv);
        
        reelEl.appendChild(frag);
        
        // 3. Reset Position (Instant)
        reelEl.style.transition = 'none';
        reelEl.style.transform = 'translateY(0)';
    },

    /**
     * Triggers the spin animation for a single reel
     */
    animateReel: (reelEl, index) => {
        return new Promise((resolve) => {
            // Calculate total height to move
            // (Total Items - 1) * Symbol Height
            const stripLen = reelEl.children.length;
            const distance = (stripLen - 1) * CONFIG.animation.symbolHeight;
            
            // Calculate Timings
            // Base duration + stagger delay
            const duration = CONFIG.animation.baseDuration + (index * CONFIG.animation.stagger);
            
            // Use setTimeout to allow the browser to paint the initial state (translateY: 0)
            // before applying the new transform.
            setTimeout(() => {
                // Apply CSS Transition
                reelEl.style.transition = `transform ${duration}ms var(--ease-elastic)`;
                reelEl.style.transform = `translateY(-${distance}px)`;
                
                // Audio Sync: When transition ends, play "Click"
                const handleEnd = () => {
                    AudioSys.playClick();
                    reelEl.removeEventListener('transitionend', handleEnd);
                    resolve(); // Resolve promise
                };
                
                reelEl.addEventListener('transitionend', handleEnd);
                
            }, 50); // Short delay to ensure reflow
        });
    }
};

/* =========================================
   5. GAME ORCHESTRATION
   ========================================= */
async function runGame() {
    // 1. Lock State
    if (UI.btn.disabled) return;
    UI.btn.disabled = true;
    UI.log("Generating Secure Entropy...");
    
    // 2. Audio Start
    AudioSys.playSpin();
    
    // 3. Logic: Get Numbers
    const draw = RNG.generateDraw();
    const allTargets = [...draw.main, draw.special];
    
    // 4. Setup DOM (Build Strips)
    // Mobile adjustment: check if we need to scale symbol height
    if (window.innerWidth < 600) {
        CONFIG.animation.symbolHeight = 90; // Match CSS mobile
    } else {
        CONFIG.animation.symbolHeight = 120;
    }

    UI.reels.forEach((reel, i) => {
        const target = allTargets[i];
        const max = (i === 5)? CONFIG.rules.specialMax : CONFIG.rules.mainMax;
        UI.buildStrip(reel, target, max);
    });
    
    // Force Reflow (Layout Thrashing intentionally) to set start positions
    UI.reels.offsetHeight; 
    
    UI.log("Spinning...");

    // 5. Execute Animations (Parallel but Staggered)
    const spinPromises = UI.reels.map((reel, i) => UI.animateReel(reel, i));
    
    // 6. Wait for all to finish
    await Promise.all(spinPromises);
    
    // 7. Victory State
    AudioSys.stopSpin();
    AudioSys.playWin();
    UI.log(`Draw Complete: ${draw.main.join(', ')} + [${draw.special}]`);
    
    // Fire Confetti
    if (window.confetti) {
        window.confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f1c40f', '#e74c3c', '#ffffff']
        });
    }
    
    // 8. Unlock
    UI.btn.disabled = false;
    UI.btn.querySelector('.btn-text').textContent = "SPIN AGAIN";
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    AudioSys.init();
    UI.btn.addEventListener('click', runGame);
    
    // Set initial "00" state
    UI.reels.forEach(reel => {
        reel.innerHTML = '<div class="reel-number">--</div>';
    });
});
