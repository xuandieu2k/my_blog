import { FC, useRef, useState } from "react"
import ic_default from '../../../static/svg/ic-image.svg'
import ImageDefault from "../../../base/components/image-default"
import Post from "../../../base/model/post";
interface ImageTopicItemProps {
    post: Post,
    setPost: (post: Post) => void
}
export const ImageTopicItem: FC<ImageTopicItemProps> = ({ post, setPost }) => {
    const [imageUrl, setImageUrl] = useState(post.poster);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handler for file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setImageUrl(newImageUrl);
            post.poster = newImageUrl
            setPost(post)

            // Lưu trữ file nếu cần upload lên server
            // setImageFile(file);
        }
    };

    // Handler to trigger file input click
    const handleChooseFileClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">
                (<span className="text-red-500">*</span>) Hình ảnh chủ đề
            </h6>
            <div className="w-full h-40 md:h-96" onClick={handleChooseFileClick}>
                <ImageDefault
                    className={`${imageUrl === '' ? 'p-8' : ''} w-full object-cover h-40 md:h-96 bg-gray-400`}
                    url={imageUrl}
                    fallBackUrl={ic_default}
                />
            </div>
            <input
                type="file"
                accept="image/*"
                // accept="image/png, image/jpeg, image/jpg, image/gif"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {/* Custom button to choose file */}
            {/* <button
                className="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer"
                onClick={handleChooseFileClick}
            >
                Chọn hình ảnh
            </button> */}
            <span className={`${post.poster.trim() != ''?'hidden':''} text-red-600 mt-1 text-sm`}>* Vui lòng chọn ảnh bìa cho bài viết.</span>
        </div>
    );
};