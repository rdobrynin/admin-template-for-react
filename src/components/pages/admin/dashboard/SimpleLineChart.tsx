import * as React from "react";
import { Chart } from "app/ui";

const data = [
    { name: "Mon", Visits: 0, Orders: 20 },
    { name: "Tue", Visits: 100, Orders: 0 },
    { name: "Wed", Visits: 0, Orders: 430 },
];

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = [
                { name: "Mon", Visits: 2200, Orders: 3400 },
                { name: "Tue", Visits: 1280, Orders: 2398 },
                { name: "Wed", Visits: 5000, Orders: 4300 },
                { name: "Thu", Visits: 4780, Orders: 2908 },
                { name: "Fri", Visits: 5890, Orders: 4800 },
                { name: "Sat", Visits: 4390, Orders: 3800 },
                { name: "Sun", Visits: 4490, Orders: 4300 },
            ];
            resolve(response);
        }, 5000);
    });
}

function SimpleLineChart() {
    return (
        <Chart
            data={data}
            dataSource={loadData}
            xKey="name"
            series={[
                { key: "Visits", color: "#82ca9d" },
                { key: "Orders", color: "#8884d8" },
            ]}
        />
    );
}

export default SimpleLineChart;