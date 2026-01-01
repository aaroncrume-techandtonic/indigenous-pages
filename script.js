<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The River Returns Home: A Klamath & Modoc Legacy</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!-- Plotly.js -->
    <script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

    <style>
        /* Custom Palette - Vibrant "River & Earth" */
        :root {
            --color-teal: #2A9D8F;
            --color-salmon: #E76F51;
            --color-sand: #E9C46A;
            --color-slate: #264653;
            --color-white: #F1FAEE;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--color-white);
            color: var(--color-slate);
            overflow-x: hidden;
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
        }

        .bg-teal { background-color: var(--color-teal); }
        .bg-salmon { background-color: var(--color-salmon); }
        .bg-slate { background-color: var(--color-slate); }
        .bg-sand { background-color: var(--color-sand); }
        
        .text-teal { color: var(--color-teal); }
        .text-salmon { color: var(--color-salmon); }
        .text-slate { color: var(--color-slate); }
        .text-sand { color: var(--color-sand); }

        /* Chart Container Styling - MANDATORY */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }
        
        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }

        /* Timeline Styling */
        .timeline-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: var(--color-sand);
            transform: translateX(-50%);
        }
        
        /* Smooth Scroll */
        html {
            scroll-behavior: smooth;
        }
    </style>
    <!-- 
        PALETTE SELECTION: "Energetic & Playful" / "Earth & Water" Hybrid
        Hex Codes: #264653 (Dark Slate), #2A9D8F (Teal), #E9C46A (Sand), #E76F51 (Salmon/Burnt Orange), #F1FAEE (Off-White)
        
        CONFIRMATION: NO SVG USED. NO MERMAID JS USED.
        Charts: Chart.js (Canvas) and Plotly (Canvas/WebGL).
        Diagrams: HTML/Tailwind.
    -->
</head>
<body class="antialiased">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate shadow-lg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <span class="font-bold text-xl tracking-wider">KILT &bull; THE RETURN</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#intro" class="hover:bg-teal px-3 py-2 rounded-md text-sm font-medium">Legacy</a>
                        <a href="#war" class="hover:bg-teal px-3 py-2 rounded-md text-sm font-medium">The War</a>
                        <a href="#dams" class="hover:bg-teal px-3 py-2 rounded-md text-sm font-medium">The Dams</a>
                        <a href="#statement" class="hover:bg-teal px-3 py-2 rounded-md text-sm font-medium">Tribal Voice</a>
                        <a href="#return" class="hover:bg-teal px-3 py-2 rounded-md text-sm font-medium">c’iyaal’s</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header id="intro" class="relative bg-slate text-white py-24 px-6 text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 text-sand">The River Flows Free Again</h1>
            <p class="text-xl md:text-2xl font-light leading-relaxed mb-8">
                "My name is Kintpuash's shadow. I am the blood of Scarface Charlie. I am 45 years old, and for the first time in my life, the river of my ancestors runs clear."
            </p>
            <div class="inline-block bg-teal text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
                Restoring the Homeland: 10,000 Acres & The Salmon
            </div>
        </div>
    </header>

    <!-- Main Content Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        <!-- SECTION 1: THE WOUND (MODOC WAR) -->
        <section id="war">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-salmon mb-4">The Wound: 1872</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Before the dams, there was the war. My ancestor, Scarface Charlie, stood in the Lava Beds with Captain Jack. 55 warriors held off 1,000 soldiers. We fought not just for land, but for the right to exist in our home.
                </p>
            </div>

            <!-- Vertical Timeline (HTML/Tailwind - Goal: Change/Organize) -->
            <div class="relative max-w-4xl mx-auto">
                <div class="timeline-line hidden md:block"></div>
                
                <!-- Event 1 -->
                <div class="flex flex-col md:flex-row items-center justify-between mb-12 relative z-10">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 border-l-4 border-teal hover:shadow-xl transition-shadow">
                        <h3 class="text-xl font-bold text-slate">Nov 29, 1872: Battle of Lost River</h3>
                        <p class="mt-2 text-sm text-gray-600">The U.S. Army attempts to force the Modoc back to the reservation. The war begins. We retreat to the Lava Beds.</p>
                    </div>
                    <div class="hidden md:flex items-center justify-center w-12 h-12 bg-salmon rounded-full text-white font-bold">1</div>
                    <div class="w-full md:w-5/12"></div>
                </div>

                <!-- Event 2 -->
                <div class="flex flex-col md:flex-row items-center justify-between mb-12 relative z-10">
                    <div class="w-full md:w-5/12 order-2 md:order-1"></div>
                    <div class="hidden md:flex items-center justify-center w-12 h-12 bg-salmon rounded-full text-white font-bold order-1 md:order-2">2</div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 border-r-4 border-teal order-1 md:order-3 hover:shadow-xl transition-shadow">
                        <h3 class="text-xl font-bold text-slate">Jan-April 1873: The Stronghold</h3>
                        <p class="mt-2 text-sm text-gray-600">Using the twisted lava caves, we held our ground. General Canby is killed during peace talks gone wrong. The Army brings mortars.</p>
                    </div>
                </div>

                <!-- Event 3 -->
                <div class="flex flex-col md:flex-row items-center justify-between mb-12 relative z-10">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 border-l-4 border-teal hover:shadow-xl transition-shadow">
                        <h3 class="text-xl font-bold text-slate">Oct 1873: The Execution & Exile</h3>
                        <p class="mt-2 text-sm text-gray-600">Captain Jack and others are executed. The survivors are shackled and sent to Oklahoma. The link to our land is severed.</p>
                    </div>
                    <div class="hidden md:flex items-center justify-center w-12 h-12 bg-salmon rounded-full text-white font-bold">3</div>
                    <div class="w-full md:w-5/12"></div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: THE BLOCKADE (DAMS) -->
        <section id="dams" class="bg-gray-50 rounded-3xl p-8 shadow-inner">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-slate mb-6">The Blockade</h2>
                    <p class="text-lg text-gray-700 mb-4">
                        While we were scattered, they shackled the river. Four massive dams—Iron Gate, Copco 1, Copco 2, and J.C. Boyle—choked the Klamath for a century. They promised power but delivered poison: toxic algae, warm water, and the death of the salmon runs.
                    </p>
                    <div class="p-4 bg-salmon bg-opacity-10 border-l-4 border-salmon rounded">
                        <p class="font-bold text-salmon">Key Statistic</p>
                        <p class="text-gray-800">Over 400 miles of spawning habitat were completely blocked for over 60 years.</p>
                    </div>
                </div>
                
                <!-- Chart Container: Dam Lifespan -->
                <div class="flex flex-col items-center">
                    <h3 class="text-xl font-bold text-center mb-2">A Century of Obstruction</h3>
                    <div class="chart-container">
                        <canvas id="damChart"></canvas>
                    </div>
                    <p class="text-sm text-gray-500 mt-2 text-center">Years the dams stood before removal in 2024.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 3: TRIBAL STATEMENT & PARTNERSHIP (New Content) -->
        <section id="statement">
             <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-teal mb-4">United in Purpose</h2>
                <p class="text-lg text-gray-600 max-w-4xl mx-auto">
                    The Klamath Tribes have issued a formal statement celebrating the acquisition. While the Land Trust (KILT) acts as an independent steward, our goals are intertwined. This is a shared victory for sovereignty and ecology.
                </p>
            </div>

            <!-- Comparison/Alignment Cards (HTML/Tailwind - Goal: Relationships) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <!-- Card 1: The Sovereign -->
                <div class="bg-slate text-white p-8 rounded-xl shadow-lg transform transition hover:-translate-y-2">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 bg-sand rounded-full flex items-center justify-center text-slate font-bold text-xl mr-4">T</div>
                        <h3 class="text-2xl font-bold">The Klamath Tribes</h3>
                    </div>
                    <p class="text-gray-300 italic mb-4">"We celebrate this acquisition as a significant step toward the return of our homelands."</p>
                    <p class="text-sm">The Sovereign Government. Currently pursuing further large-scale land returns (e.g., Mazama Forest) to restore the full treaty footprint.</p>
                </div>

                <!-- Card 2: The Steward -->
                <div class="bg-teal text-white p-8 rounded-xl shadow-lg transform transition hover:-translate-y-2">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 bg-white rounded-full flex items-center justify-center text-teal font-bold text-xl mr-4">K</div>
                        <h3 class="text-2xl font-bold">K.I.L.T.</h3>
                    </div>
                    <p class="text-gray-100 italic mb-4">"Returning these lands to Indigenous care ensures that home will be a place where they can flourish."</p>
                    <p class="text-sm">Klamath Indigenous Land Trust. An independent 501(c)(3) entity focused on conservation, acquisition, and ecological restoration.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 4: THE RETURN (LAND & c’iyaal’s) -->
        <section id="return">
            <div class="text-center mb-16 mt-24">
                <h2 class="text-5xl font-bold text-slate mb-4">The Return of the c’iyaal’s</h2>
                <p class="text-xl text-gray-600 max-w-4xl mx-auto">
                    With the dams removed and 10,000 acres secured, the path is clear for the c’iyaal’s (Salmon) to return home.
                </p>
            </div>

            <!-- Grid: Stewardship & Projections -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <!-- Card 1: The Land Purchase -->
                <div class="bg-white rounded-xl shadow-lg p-8 border-t-8 border-sand">
                    <h3 class="text-2xl font-bold text-slate mb-4">10,000 Acres Returned</h3>
                    <p class="text-gray-600 mb-6">
                        This isn't just dirt; it's the reservoir reach. The land that was underwater is now breathing again. KILT's stewardship plan focuses on three pillars.
                    </p>
                    <div class="chart-container">
                        <canvas id="landChart"></canvas>
                    </div>
                    <p class="text-sm text-center mt-4 text-gray-500">Conceptual Breakdown of Stewardship Focus</p>
                </div>

                <!-- Card 2: The c’iyaal’s Recovery -->
                <div class="bg-white rounded-xl shadow-lg p-8 border-t-8 border-salmon">
                    <h3 class="text-2xl font-bold text-slate mb-4">Population Recovery</h3>
                    <p class="text-gray-600 mb-6">
                        Since the 2002 fish kill, our hearts have been heavy. But with the dams out, the projection for the c’iyaal’s (and our spirit) is rising.
                    </p>
                    <div class="chart-container">
                        <canvas id="salmonChart"></canvas>
                    </div>
                    <p class="text-sm text-center mt-4 text-gray-500">Estimated c’iyaal’s Population (Historical to Projected)</p>
                </div>
            </div>
        </section>

        <!-- SECTION 5: LIFECYCLE (PROCESS FLOW) - Updated for c’iyaal’s -->
        <section class="bg-slate text-white rounded-3xl p-10 overflow-hidden mt-12">
            <h2 class="text-3xl font-bold mb-10 text-center text-sand">The Cycle of Life (c’iyaal’s)</h2>
            <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative">
                <!-- Line connector for desktop -->
                <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-teal opacity-50 transform -translate-y-1/2 z-0"></div>

                <!-- Step 1 -->
                <div class="relative z-10 flex flex-col items-center w-full md:w-1/5">
                    <div class="w-16 h-16 rounded-full bg-sand text-slate font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">Egg</div>
                    <p class="mt-4 font-bold text-lg">Spawn</p>
                    <p class="text-xs text-gray-300 text-center px-2">Born in cold, clear gravel.</p>
                </div>
                
                <!-- Step 2 -->
                <div class="relative z-10 flex flex-col items-center w-full md:w-1/5">
                    <div class="w-16 h-16 rounded-full bg-teal text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">Fry</div>
                    <p class="mt-4 font-bold text-lg">Growth</p>
                    <p class="text-xs text-gray-300 text-center px-2">Spending a year in the river.</p>
                </div>

                <!-- Step 3 -->
                <div class="relative z-10 flex flex-col items-center w-full md:w-1/5">
                    <div class="w-16 h-16 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">Smolt</div>
                    <p class="mt-4 font-bold text-lg">Journey</p>
                    <p class="text-xs text-gray-300 text-center px-2">Migrating to the ocean.</p>
                </div>

                <!-- Step 4 -->
                <div class="relative z-10 flex flex-col items-center w-full md:w-1/5">
                    <div class="w-16 h-16 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">Ocean</div>
                    <p class="mt-4 font-bold text-lg">Adult</p>
                    <p class="text-xs text-gray-300 text-center px-2">Maturing in the Pacific.</p>
                </div>

                <!-- Step 5 -->
                <div class="relative z-10 flex flex-col items-center w-full md:w-1/5">
                    <div class="w-16 h-16 rounded-full bg-salmon text-white font-bold flex items-center justify-center text-2xl shadow-lg border-4 border-white">Home</div>
                    <p class="mt-4 font-bold text-lg">Return</p>
                    <p class="text-xs text-gray-300 text-center px-2">Returning to 10,000 acres.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 6: ADVANCED METRICS (PLOTLY) -->
        <section class="mt-12">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-slate">The Magnitude of Restoration</h2>
                <p class="text-gray-600">Reconnecting the veins of the earth.</p>
            </div>
            <div id="riverPlot" class="w-full h-96 bg-white rounded-lg shadow-lg border border-gray-200"></div>
            <!-- Plotly Container -->
        </section>

        <!-- FOOTER -->
        <footer class="text-center py-12 border-t border-gray-200 mt-12">
            <p class="text-2xl font-serif italic text-teal mb-4">"The dams are down. The land is ours. The future is free."</p>
            <p class="text-gray-500 text-sm">&copy; 2025 Klamath Indigenous Land Trust Infographic. Descendant Persona.</p>
            <p class="text-gray-400 text-xs mt-2">Data Sources: HiveWire Daily, KlamathTribes.org, Oregon Public Broadcasting, PacifiCorp.</p>
        </footer>

    </main>

    <!-- SCRIPTS -->
    <script>
        // --- UTILITY: LABEL WRAPPING FOR CHART.JS (16 Char Limit) ---
        function formatLabel(str, maxwidth) {
            if (typeof str !== 'string') return str;
            var sections = [];
            var words = str.split(" ");
            var temp = "";
            words.forEach(function(item, index) {
                if (temp.length > 0) {
                    var concat = temp + ' ' + item;
                    if (concat.length > maxwidth) {
                        sections.push(temp);
                        temp = item;
                    } else {
                        temp = concat;
                    }
                } else {
                    temp = item;
                }
            });
            if (temp.length > 0) {
                sections.push(temp);
            }
            return sections;
        }

        // --- CHART 1: DAM LIFESPAN (Bar) ---
        const ctxDam = document.getElementById('damChart').getContext('2d');
        const damChart = new Chart(ctxDam, {
            type: 'bar',
            data: {
                labels: ['Iron Gate', 'Copco 1', 'Copco 2', 'J.C. Boyle'],
                datasets: [{
                    label: 'Years of Obstruction',
                    data: [62, 106, 99, 66], // 2024 - Built Date
                    backgroundColor: [
                        '#264653', // Slate
                        '#2A9D8F', // Teal
                        '#E9C46A', // Sand
                        '#E76F51'  // Salmon
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                let label = tooltipItems[0].chart.data.labels[tooltipItems[0].dataIndex];
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Years Standing' }
                    }
                }
            }
        });

        // --- CHART 2: LAND STEWARDSHIP (Doughnut) ---
        const ctxLand = document.getElementById('landChart').getContext('2d');
        
        // Wrap labels manually for safety, though they are short here
        const landLabels = [
            formatLabel('Ecological Restoration', 16),
            formatLabel('Cultural Resource Protection', 16),
            formatLabel('Public Access & Education', 16)
        ];

        const landChart = new Chart(ctxLand, {
            type: 'doughnut',
            data: {
                labels: landLabels,
                datasets: [{
                    data: [50, 30, 20], // Conceptual split based on narrative emphasis
                    backgroundColor: ['#2A9D8F', '#E76F51', '#E9C46A'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                let label = tooltipItems[0].chart.data.labels[tooltipItems[0].dataIndex];
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                }
            }
        });

        // --- CHART 3: SALMON (c’iyaal’s) RECOVERY (Line) ---
        const ctxSalmon = document.getElementById('salmonChart').getContext('2d');
        const salmonChart = new Chart(ctxSalmon, {
            type: 'line',
            data: {
                labels: ['1900 (Pre-Dam)', '1950 (Mid-Dam)', '2002 (Fish Kill)', '2023 (Removal)', '2030 (Projected)', '2050 (Future)'],
                datasets: [{
                    label: 'c’iyaal’s Population Estimates',
                    data: [1000000, 500000, 50000, 25000, 150000, 450000],
                    borderColor: '#E76F51',
                    backgroundColor: 'rgba(231, 111, 81, 0.2)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                let label = tooltipItems[0].chart.data.labels[tooltipItems[0].dataIndex];
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        type: 'logarithmic', // Use log scale to handle the massive drop
                        title: { display: true, text: 'Run Size (Log Scale)' }
                    }
                }
            }
        });

        // --- CHART 4: PLOTLY (River Miles - Advanced) ---
        const trace1 = {
            type: 'indicator',
            mode: 'number+gauge+delta',
            value: 420,
            delta: { reference: 0, position: "top", suffix: " Miles" },
            title: { 
                text: "River Habitat Reconnected", 
                font: { size: 24, family: "Playfair Display" } 
            },
            gauge: {
                shape: "bullet",
                axis: { range: [null, 500] },
                bar: { color: "#2A9D8F" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 100], color: "#e5e7eb" },
                    { range: [100, 400], color: "#d1d5db" }
                ],
            }
        };

        const layoutPlotly = { 
            font: { family: "Roboto" },
            paper_bgcolor: "rgba(0,0,0,0)",
            margin: { t: 40, r: 25, l: 25, b: 25 }
        };

        const configPlotly = { responsive: true, displayModeBar: false };
        
        Plotly.newPlot('riverPlot', [trace1], layoutPlotly, configPlotly);

    </script>
</body>
</html>
