import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';

const chartSetting = {
    yAxis: [
        {
            disableTicks: true,
            disableLine: true,
            tickFontSize: 10,
        },
    ],
    grid: {
        horizontal: true,
    },
    width: 700,
    height: 300,
    sx: {
        ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
        ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
    },
};


export default function BarsDataset(props) {
    const { desc } = props;

    const [colorPrimary, setColorPrimary] = useState('')
    const [descSeries, setDescSeries] = useState([])
    
    // // Update colorPrimary ketika variabel CSS --color-primary berubah
    // useEffect(() => {
    //     const updateColorPrimary = () => {
    //         const color = getComputedStyle(document.documentElement)
    //             .getPropertyValue('--color-primary')
    //             .trim();
    //         setColorPrimary(color);
    //     };

    //     updateColorPrimary(); // Panggil sekali saat pertama kali
    //     window.addEventListener('resize', updateColorPrimary); // Opsional, jika Anda ingin update saat resize

    //     return () => {
    //         window.removeEventListener('resize', updateColorPrimary);
    //     };
    // }, []); // Ini hanya dijalankan sekali saat pertama kali komponen dimuat

    // // Update descSeries setiap kali colorPrimary berubah
    // useEffect(() => {
    //     if (colorPrimary) {
    //         setDescSeries(desc.series.map(seriesItem => ({
    //             ...seriesItem,
    //             color: colorPrimary // Update warna bar sesuai colorPrimary
    //         })));
    //         console.log("CHANGE")
    //     }
    //     console.log("CHANGE 2")
    // }, [colorPrimary, desc.series]); // Ketergantungan pada colorPrimary dan desc.series
    
    // console.log("DESCSERIES", descSeries)

    return (
        <>
            <BarChart
                dataset={desc.data}
                xAxis={[{ scaleType: 'band', dataKey: desc.dataKey, categoryGapRatio: 0.1 }]}
                series={desc.series}
                slotProps={{
                    legend: {
                        direction: "row",
                        position: { vertical: "top", horizontal: "right" }
                    }
                }}
                {...chartSetting}
            />
        </>
    );
}