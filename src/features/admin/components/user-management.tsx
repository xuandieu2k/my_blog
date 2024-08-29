import { FC } from "react";

export const UserManagement: FC = () => {
    // Giả lập dữ liệu người dùng
    const users = [
        { id: 1, name: "Nguyễn Văn A", email: "vana@example.com", status: "Active" },
        { id: 2, name: "Trần Thị B", email: "thib@example.com", status: "Inactive" },
        { id: 3, name: "Lê Văn C", email: "vanc@example.com", status: "Active" },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Quản lý Người dùng</h2>
            <table className="min-w-full bg-white shadow rounded">
                <thead>
                    <tr>
                        <th className="py-2">Tên</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Trạng thái</th>
                        <th className="py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="border-b">
                            <td className="py-2">{user.name}</td>
                            <td className="py-2">{user.email}</td>
                            <td className="py-2">{user.status}</td>
                            <td className="py-2">
                                {user.status === "Active" ? (
                                    <button className="text-yellow-500 mr-2">Khóa</button>
                                ) : (
                                    <button className="text-green-500 mr-2">Mở khóa</button>
                                )}
                                <button className="text-red-500">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
