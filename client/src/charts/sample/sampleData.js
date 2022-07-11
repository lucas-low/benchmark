const sampleData = {
    labels: ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "80% VTSMX (Stock) + 20% VBMFX (Bond)",
            data: [33, 53, 85, 41, 44, 65, 35, 51, 54, 76, 54, 76],
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
        },
        {
            label: "40% VTSMX(Stock) + 60% VBMFX (Bond)",
            data: [33, 25, 35, 51, 54, 76, 30, 40, 50, 60, 51, 54],
            fill: false,
            borderColor: "#742774"
        },
        {
            label: "StashAway Risk Index 14%",
            data: [10, 20, 30, 40, 50, 60, 54, 76, 54, 80, 90, 100],
            fill: false,
            borderColor: "#000000"
        }
    ]
};
export default sampleData;