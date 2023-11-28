import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = "top";

const data = {
    labels: [
        'Pothole/Patch',
        'Cracks'
    ],
    datasets: [{
        data: [67, 10],
        backgroundColor: [
            'rgb(121, 224, 238',
            'rgb(152, 238, 204)'
        ],
        borderWidth: 2,
        radius: '100%'
    }]
};

export default function DoughnutChart() {
    return (
        <div>
            <Doughnut data={data} />
        </div>
    );
}