import { BarChart,Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Rechart = () => {

    const monthlyRevenueData = [
        { month: 'January', revenue: 5000 },
        { month: 'February', revenue: 5500 },
        { month: 'March', revenue: 6000 },
        { month: 'April', revenue: 6500 },
        { month: 'May', revenue: 7000 },
        { month: 'June', revenue: 7500 },
        { month: 'July', revenue: 8000 },
        { month: 'August', revenue: 8500 },
        { month: 'September', revenue: 9000 },
        { month: 'October', revenue: 9500 },
        { month: 'November', revenue: 10000 },
        { month: 'December', revenue: 10500 },
      ];
      
    return (
        <ResponsiveContainer width="95%" height={400}>
            
            <BarChart width={150} height={40} data={monthlyRevenueData}>
            <XAxis dataKey="month" />
          <YAxis />
          <Tooltip></Tooltip>
          <Bar dataKey="revenue" fill="#C3F550" />
        </BarChart>

     </ResponsiveContainer>
    );
};

export default Rechart;

