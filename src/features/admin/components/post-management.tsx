import { FC } from "react";

export const PostManagement: FC = () => {
    // Giả lập dữ liệu bài viết
    const posts = [
        { id: 1, title: "Cập nhật tính năng mới", author: "Nguyễn Văn A", date: "28/08/2024" },
        { id: 2, title: "Giới thiệu hệ thống", author: "Trần Thị B", date: "25/08/2024" },
        { id: 3, title: "Báo cáo tình hình", author: "Lê Văn C", date: "22/08/2024" },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Quản lý Bài viết</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Thêm bài viết mới</button>
            <table className="min-w-full bg-white shadow rounded">
                <thead>
                    <tr>
                        <th className="py-2">Tiêu đề</th>
                        <th className="py-2">Tác giả</th>
                        <th className="py-2">Ngày</th>
                        <th className="py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} className="border-b">
                            <td className="py-2">{post.title}</td>
                            <td className="py-2">{post.author}</td>
                            <td className="py-2">{post.date}</td>
                            <td className="py-2">
                                <button className="text-blue-500 mr-2">Chỉnh sửa</button>
                                <button className="text-red-500">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};