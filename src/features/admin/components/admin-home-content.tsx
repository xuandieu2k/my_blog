import { FC } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export const AdminHomeContent: FC = () => {
    // Dữ liệu cho biểu đồ
    const dataLineChart = {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
        datasets: [
            {
                label: "Lượng truy cập",
                data: [65, 59, 80, 81, 56, 55],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const dataBarChart = {
        labels: ["Bài viết mới", "Người dùng mới"],
        datasets: [
            {
                label: "Thống kê tháng này",
                data: [30, 45],
                backgroundColor: ["#34d399", "#fbbf24"],
            },
        ],
    };

    const dataDoughnutChart = {
        labels: ["Người dùng hoạt động", "Người dùng không hoạt động"],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: ["#34d399", "#9ca3af"],
            },
        ],
    };

    // Dữ liệu bài viết gần đây
    const recentPosts = [
        { id: 1, title: "Cập nhật tính năng mới trong tháng 8", date: "28/08/2024" },
        { id: 2, title: "Hướng dẫn sử dụng hệ thống quản lý", date: "25/08/2024" },
        { id: 3, title: "Báo cáo tình hình hoạt động", date: "22/08/2024" },
    ];

    // Dữ liệu người dùng mới
    const newUsers = [
        { id: 1, name: "Nguyễn Văn A", email: "vana@example.com" },
        { id: 2, name: "Trần Thị B", email: "thib@example.com" },
        { id: 3, name: "Lê Văn C", email: "vanc@example.com" },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            
            {/* Biểu đồ thống kê */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold mb-2">Lượng truy cập</h2>
                    <Line data={dataLineChart} />
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold mb-2">Bài viết mới và Người dùng mới</h2>
                    <Bar data={dataBarChart} />
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold mb-2">Tỉ lệ người dùng</h2>
                    <Doughnut data={dataDoughnutChart} />
                </div>
            </div>

            {/* Danh sách bài viết gần đây */}
            <div className="bg-white p-4 shadow rounded mb-6">
                <h2 className="text-lg font-bold mb-4">Bài viết gần đây</h2>
                <ul>
                    {recentPosts.map((post) => (
                        <li key={post.id} className="flex justify-between border-b py-2">
                            <span>{post.title}</span>
                            <span className="text-gray-500">{post.date}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Danh sách người dùng mới */}
            <div className="bg-white p-4 shadow rounded">
                <h2 className="text-lg font-bold mb-4">Người dùng mới</h2>
                <ul>
                    {newUsers.map((user) => (
                        <li key={user.id} className="flex justify-between border-b py-2">
                            <span>{user.name}</span>
                            <span className="text-gray-500">{user.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};