const barChartCanvas = document.getElementById('barChart').getContext('2d');
const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
const lineChartCanvas = document.getElementById('lineChart').getContext('2d');

const barChart = new Chart(barChartCanvas, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales ($)',
      data: [300, 400, 350, 500, 450],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  }
});

const pieChart = new Chart(pieChartCanvas, {
  type: 'pie',
  data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#ff4081', '#36a2eb', '#ffcd56']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true }
    }
  }
});

const lineChart = new Chart(lineChartCanvas, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Growth Rate (%)',
      data: [10, 12, 15, 18, 20],
      borderColor: '#ff4081',
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true }
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  }
});

// Anime.js Animation for the charts
function animateChart(chart) {
  anime({
    targets: chart,
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    complete: function() {
      chart.update();
    }
  });
}

animateChart(barChart);
animateChart(pieChart);
animateChart(lineChart);

// Update data function for the "Update Data" button
document.getElementById('updateButton').addEventListener('click', () => {
  // Randomly generate new data for charts
  barChart.data.datasets[0].data = [Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500];
  pieChart.data.datasets[0].data = [Math.random() * 100, Math.random() * 100, Math.random() * 100];
  lineChart.data.datasets[0].data = [Math.random() * 10, Math.random() * 20, Math.random() * 30, Math.random() * 40, Math.random() * 50];
  
  // Animate charts when updated
  animateChart(barChart);
  animateChart(pieChart);
  animateChart(lineChart);
});

