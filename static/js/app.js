document.addEventListener("DOMContentLoaded", function() {
    const initMethodSelect = document.getElementById("init-method");
    const generateBtn = document.getElementById("generate-btn");
    const stepBtn = document.getElementById("step-btn");
    const convergeBtn = document.getElementById("converge-btn");
    const resetBtn = document.getElementById("reset-btn");
    
    let dataset = [];
    let centroids = [];
    let clusters = [];

    // Generate dataset logic
        function generateDataset() {
            // Generate random points between -10 and 10 for both x and y
            dataset = [];
            for (let i = 0; i < 100; i++) {
                dataset.push({
                    x: Math.random() * 20 - 10, // Random x between -10 and 10
                    y: Math.random() * 20 - 10  // Random y between -10 and 10
                });
            }
            plotDataset();
        }

    // Plot dataset with fixed axis limits
        function plotDataset() {
            const plotData = [{
                x: dataset.map(point => point.x),
                y: dataset.map(point => point.y),
                mode: 'markers',
                type: 'scatter',
                marker: { size: 10 }
            }];
            
            const layout = {
                xaxis: {
                    range: [-11, 11],
                    title: 'X-axis'
                },
                yaxis: {
                    range: [-11, 11],
                    title: 'Y-axis'
                },
                margin: {
                    l: 40, r: 40, t: 40, b: 40 // Adjust margins for better spacing
                },
                autosize: true, // Allow plot to adjust to container size
                plot_bgcolor: '#b8c5d9', // Match background color to the theme
                paper_bgcolor: '#b8c5d9', // Match paper color to the theme
            };
            
            Plotly.newPlot('plot-area', plotData, layout);
        }

    // Event listeners for buttons
    generateBtn.addEventListener("click", generateDataset);
    stepBtn.addEventListener("click", () => console.log("Step Through KMeans"));
    convergeBtn.addEventListener("click", () => console.log("Converge KMeans"));
    resetBtn.addEventListener("click", () => console.log("Reset KMeans"));
    
    // Initialize the default dataset
    generateDataset();
});
