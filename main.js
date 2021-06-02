let ctx = document.getElementById('myChart').getContext('2d');
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
        },
    };

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Rudy Gobert', 'Ben Simmons', 'Draymond Green', 'Giannis Antetokounmpo', 'Jimmy Butler', 'Matisse Thybulle'],
        datasets: [{
            label: 'Defensive Real Plus-Minus',
            data: [8, 2.39, 1.68, 1.2, 1.90, 0.27],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
            ],
            borderColor: [
                    'white',
            ],
            borderWidth: 1
            },{
            label: 'Defensive RAPTOR',
            data: [8.4, 1.9, 3.5, 2.2, 2.3, 5.2],
            backgroundColor: [
                'rgba(255, 159, 64, 0.8)',
            ],
            borderColor: [
                    'white',
            ],
            borderWidth: 1
            },{
            label: 'Defensive Box Plus-Minus',
            data: [2.9, 1.9, 3.3, 2.6, 2.5, 4.3],
            backgroundColor: [
                'rgba(255, 205, 86, 0.8)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
            },{
            label: 'Defensive LEBRON',
            data: [5.09, 1.94, 2.32, 1.98, 1.59, 2.4],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
            },{
            label: 'Defensive Estimated Plus-Minus',
            data: [6.2, 2.9, 2.9, 1.4, 3.0, 4.2],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
            }]
    },
    options: {
        scales: {
            y: {
                display: false
            },
            x: {
                display: true
            },
            },
            responsive: true,
        },
    plugins: [plugin],
});