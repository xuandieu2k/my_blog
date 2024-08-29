import { FC } from "react";

export const CategoryManagement: FC = () => {
    // Giả lập dữ liệu danh mục
    const categories = [
        { id: 1, name: "Công nghệ" },
        { id: 2, name: "Kinh doanh" },
        { id: 3, name: "Giáo dục" },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Quản lý Danh mục</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Thêm danh mục mới</button>
            <table className="min-w-full bg-white shadow rounded">
                <thead>
                    <tr>
                        <th className="py-2">Tên danh mục</th>
                        <th className="py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id} className="border-b">
                            <td className="py-2">{category.name}</td>
                            <td className="py-2">
                                <button className="text-red-500">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
