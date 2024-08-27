import { FC } from "react";

export const TitleItem: FC<{}> = () => {
    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Tiêu đề bài viết</h6>
            <input className="border-2 p-2 outline-none border-gray-400 w-full" maxLength={150} minLength={20} placeholder="Tiêu đề bài viết nên thật ngắn gọn và chất lượng."/>
        </div>
    )
}