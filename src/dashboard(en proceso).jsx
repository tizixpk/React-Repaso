import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Lun", users: 200 },
  { day: "Mar", users: 400 },
  { day: "Mié", users: 350 },
  { day: "Jue", users: 500 },
  { day: "Vie", users: 700 },
];

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📊 Usuarios activos</h1>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} />
      </LineChart>
    </div>
  );
}
