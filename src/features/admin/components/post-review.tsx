import { FC } from "react";

export const PostReview: FC = () => {
    // Giả lập dữ liệu đánh giá bài viết
    const reviews = [
        { id: 1, postTitle: "Cập nhật tính năng mới", reviewer: "User1", rating: 4, comment: "Bài viết hữu ích!" },
        { id: 2, postTitle: "Giới thiệu hệ thống", reviewer: "User2", rating: 5, comment: "Rất tốt!" },
        { id: 3, postTitle: "Báo cáo tình hình", reviewer: "User3", rating: 3, comment: "Cần chi tiết hơn." },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Đánh giá Bài viết</h2>
            <table className="min-w-full bg-white shadow rounded">
                <thead>
                    <tr>
                        <th className="py-2">Tiêu đề bài viết</th>
                        <th className="py-2">Người đánh giá</th>
                        <th className="py-2">Đánh giá</th>
                        <th className="py-2">Bình luận</th>
                        <th className="py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => (
                        <tr key={review.id} className="border-b">
                            <td className="py-2">{review.postTitle}</td>
                            <td className="py-2">{review.reviewer}</td>
                            <td className="py-2">{review.rating} / 5</td>
                            <td className="py-2">{review.comment}</td>
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
