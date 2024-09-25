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
        // Example: Generate random points for dataset
        dataset = [];
        for (let i = 0; i < 100; i++) {
            dataset.push({
                x: Math.random() * 10,
                y: Math.random() * 10
            });
        }
        plotDataset();
    }

    // Plot dataset
    function plotDataset() {
        const plotData = [{
            x: dataset.map(point => point.x),
            y: dataset.map(point => point.y),
            mode: 'markers',
            type: 'scatter',
            marker: { size: 10 }
        }];
        
        Plotly.newPlot('plot-area', plotData);
    }

    // Event listeners for buttons
    generateBtn.addEventListener("click", generateDataset);
    stepBtn.addEventListener("click", () => console.log("Step Through KMeans"));
    convergeBtn.addEventListener("click", () => console.log("Converge KMeans"));
    resetBtn.addEventListener("click", () => console.log("Reset KMeans"));
    
    // Initialize the default dataset
    generateDataset();
});
