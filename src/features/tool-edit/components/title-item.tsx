import { FC, useState } from "react";
import Post from "../../../base/model/post";
interface TitleItemProps {
    post: Post,
    setPost: (post: Post) => void
}
export const TitleItem: FC<TitleItemProps> = ({ post, setPost }) => {
    const [value, setValue] = useState<string>(post.title)
    const onchange = (value: string) => {
        setValue(value)
        const updatedPost = { ...post, title: value }
        setPost(updatedPost)
    }
    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Tiêu đề bài viết</h6>
            <input className="border-2 p-2 outline-none border-gray-400 w-full" value={value} onChange={(e) => onchange(e.target.value)} maxLength={150} minLength={20} placeholder="Tiêu đề bài viết nên thật ngắn gọn và chất lượng." />
            <span className={`${post.title.trim().length > 50 && post.title.trim().length <= 100?'hidden':''} text-red-600 mt-1 text-sm`}>* Độ dài tối thiểu 50 ký tự và tối đa 100 ký tự</span>
        </div>
    )
}