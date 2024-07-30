"use client"
import { useRouter } from "next/navigation";

// Save as page.jsx in app/about
const Dashboard = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/about");
    };

    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <p>This is the Dashboard</p>
            <button onClick={handleNavigate}>Navigate</button>
        </div>
    );
};

export default Dashboard;