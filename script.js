// Subscriber Growth Over Time
const ctx1 = document.getElementById('subscriberChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'Netflix',
                data: [62.7, 79.9, 99, 124.3, 151.5, 192.9, 219.7, 230.7, 260.3, 301.6],
                borderColor: 'rgba(229, 9, 20, 0.8)',
                backgroundColor: 'rgba(229, 9, 20, 0.8)', 
                fill: false
            },
            {
                label: 'Disney+',
                data: [0, 0, 0, 0, 10, 50, 80, 100, 120, 150],
                borderColor: 'rgba(0, 128, 128, 0.7)',
                backgroundColor: 'rgba(0, 128, 128, 0.7)', 
                fill: false
            },
            {
                label: 'Prime Video',
                data: [50, 60, 70, 80, 90, 100, 120, 140, 155, 167],
                borderColor: 'rgba(0, 168, 225, 0.7)',
                backgroundColor: 'rgba(0, 168, 225, 0.7)', 
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: { size: 14 }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    font: { size: 16 }
                },
                ticks: {
                    font: { size: 12 }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Subscribers (in millions)',
                    font: { size: 16 }
                },
                ticks: {
                    font: { size: 12 }
                }
            }
        }
    }
});

// Content Spending Comparison
const ctx2 = document.getElementById('contentSpendingChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'Netflix',
                data: [15, 16.2, 17, 17.5, 18, 18],
                backgroundColor: 'rgba(229, 9, 20, 0.7)'
            },
            {
                label: 'Disney+',
                data: [10, 11, 12, 13, 14, 15],
                backgroundColor: 'rgba(0, 128, 128, 0.7)'
            },
            {
                label: 'Prime Video',
                data: [7, 8, 9, 10, 11, 12],
                backgroundColor: 'rgba(0, 168, 225, 0.7)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: { size: 14 }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Year',
                    font: { size: 16 }
                },
                ticks: {
                    font: { size: 12 }
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Spending (in billions USD)',
                    font: { size: 16 }
                },
                ticks: {
                    font: { size: 12 }
                }
            }
        },
        layout: {
            padding: 20
        }
    }
});

// Timeline of Key Events
const ctx3 = document.getElementById('timelineChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [
            '2013: House of Cards',
            '2019: Disney+ Launch',
            '2020: HBO Max & Peacock',
            '2022: Netflix Ad Tier',
            '2023: WWE Deal Announced'
        ],
        datasets: [{
            label: 'Key Milestones',
            data: [1, 2, 3, 4, 5], // Dummy data to make bars visible
            backgroundColor: [
                'rgba(229, 9, 20, 0.7)',
                'rgba(0, 128, 128, 0.7)',
                'rgba(128, 128, 128, 0.7)',
                'rgba(229, 9, 20, 0.7)',
                'rgba(229, 9, 20, 0.7)'
            ],
            borderWidth: 0,
            barThickness: 30
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                ticks: {
                    font: { size: 14 },
                    color: '#333'
                }
            }
        }
    }
});