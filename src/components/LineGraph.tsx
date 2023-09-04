import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineGraph() {
  const options = {
    responsive: true,
  };
  const { data } = useQuery('historyData', () =>
    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then((res) => res.data)
  );
  const chartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data?.cases || {}),
        borderColor: '#097a7a',
        backgroundColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data?.deaths || {}),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(data?.recovered || {}),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: false,
      },
    ],
  };
  return (
    <div className='w-full p-4 bg-black mt-4 rounded-2xl'>
      <Line options={options} data={chartData} />
      <p className='text-white text-sm font-semibold text-center'>
        This Chart show no of cases in each country
      </p>
    </div>
  );
}
