  <!-- SCRIPTS -->
    <script>
        // --- PALETTE VARIABLES FOR JS (High Contrast) ---
        const colors = {
            red: '#C62828',    // Deep Red
            yellow: '#FFD600', // Bright Yellow
            black: '#121212',  // True Black
            white: '#FFFFFF',
            water: '#004D40',  // Deep Teal
            slate: '#263238',
            goldText: '#827717' // Dark Ochre for text labels
        };

        // --- UTILITY: LABEL WRAPPING ---
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
            if (temp.length > 0) sections.push(temp);
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
                    data: [62, 106, 99, 66],
                    backgroundColor: [colors.black, colors.water, colors.red, colors.yellow],
                    // Add Black Border for contrast, especially on the yellow bar
                    borderColor: '#000000',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.black,
                        titleColor: colors.white,
                        bodyColor: colors.white,
                        titleFont: { weight: 'bold', size: 14 },
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
                        title: { display: true, text: 'Years Standing', font: { weight: 'bold', size: 14 }, color: 'black' },
                        ticks: { color: 'black', font: { weight: 'bold' } },
                        grid: { color: '#e0e0e0' }
                    },
                    x: {
                        ticks: { color: 'black', font: { weight: 'bold' } }
                    }
                }
            }
        });

        // --- CHART 2: LAND STEWARDSHIP (Doughnut) ---
        const ctxLand = document.getElementById('landChart').getContext('2d');
        const landChart = new Chart(ctxLand, {
            type: 'doughnut',
            data: {
                labels: [
                    formatLabel('Ecological (South)', 16),
                    formatLabel('Cultural (East)', 16),
                    formatLabel('Public (North)', 16),
                    formatLabel('Protection (West)', 16)
                ],
                datasets: [{
                    data: [40, 30, 15, 15], 
                    backgroundColor: [colors.red, colors.yellow, '#EEEEEE', colors.black], 
                    borderColor: '#000000', // Black borders for segment definition
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '50%',
                plugins: {
                    legend: { 
                        position: 'bottom', 
                        labels: { 
                            usePointStyle: true,
                            color: 'black',
                            font: { weight: 'bold', size: 12 }
                        } 
                    },
                    tooltip: {
                        backgroundColor: 'black',
                        bodyFont: { size: 14 },
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

        // --- CHART 3: SALMON RECOVERY (Line) ---
        const ctxSalmon = document.getElementById('salmonChart').getContext('2d');
        const salmonChart = new Chart(ctxSalmon, {
            type: 'line',
            data: {
                labels: ['1900', '1950', '2002', '2023', '2030', '2050'],
                datasets: [{
                    label: 'c’iyaal’s Population',
                    data: [1000000, 500000, 50000, 25000, 150000, 450000],
                    borderColor: colors.red,
                    backgroundColor: 'rgba(198, 40, 40, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: colors.yellow,
                    pointBorderColor: colors.black, // Dark border on points
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: 'black', font: { weight: 'bold' } } },
                    tooltip: {
                        backgroundColor: 'black',
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
                        type: 'logarithmic',
                        title: { display: true, text: 'Run Size (Log Scale)', color: 'black', font: { weight: 'bold' } },
                        ticks: { color: 'black', font: { weight: 'bold' } },
                        grid: { color: '#e0e0e0' }
                    },
                    x: {
                        ticks: { color: 'black', font: { weight: 'bold' } },
                        grid: { color: '#e0e0e0' }
                    }
                }
            }
        });

        // --- CHART 4: PLOTLY (River Miles - Gauge) ---
        const trace1 = {
            type: 'indicator',
            mode: 'number+gauge+delta',
            value: 420,
            delta: { reference: 0, position: "top", suffix: " Miles" },
            title: { 
                text: "River Habitat Reconnected", 
                font: { size: 24, family: "Cinzel", color: "black", weight: 900 } 
            },
            number: { font: { color: "black", weight: 900 } },
            gauge: {
                shape: "angular",
                axis: { range: [null, 500], tickcolor: "black", tickwidth: 2 },
                bar: { color: colors.water, line: { color: "black", width: 2 } }, // Outline the bar
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "black",
                steps: [
                    { range: [0, 100], color: "#e0e0e0" },
                    { range: [100, 300], color: colors.yellow },
                    { range: [300, 400], color: colors.red },
                    { range: [400, 500], color: colors.water }
                ],
            }
        };

        const layoutPlotly = { 
            font: { family: "Lato", color: "black" },
            paper_bgcolor: "rgba(0,0,0,0)",
            margin: { t: 40, r: 25, l: 25, b: 25 }
        };

        const configPlotly = { responsive: true, displayModeBar: false };
        
        Plotly.newPlot('riverPlot', [trace1], layoutPlotly, configPlotly);

    </script>
