import React, { FC, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import ic_default from '../../../static/svg/ic-image.svg'
import useWindowSize from "../../../base/hook/use-window-resize";
import ContentPost from "../../../base/model/content-post";
import ImageDefault from "../../../base/components/image-default";
interface TextImageToolProps {
    type?: 'text-first' | 'image-first',
    clasName?: string,
    contentPost: ContentPost,
    position: number,
    onChangeData: (contentPost: ContentPost, position: number) => void
}
export const TextImageTool: FC<TextImageToolProps> = (props) => {
    const [content, setContent] = useState<string>(props.contentPost.content);
    const screenSize = useWindowSize()
    const [imageUrl, setImageUrl] = useState(props.contentPost.url);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handler for file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setImageUrl(newImageUrl);
            props.contentPost.url = newImageUrl
            props.onChangeData(props.contentPost, props.position)
            // Lưu trữ file nếu cần upload lên server
            // setImageFile(file);
        }
    };

    // Handler to trigger file input click
    const handleChooseFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleContentChange = (value: string) => {
        setContent(value);
        props.contentPost.content = value
        props.onChangeData(props.contentPost, props.position)
    };

    const handleClassParent = () => {
        if (screenSize.screenSize == 'mobile') {
            return props.type === 'image-first' ? "flex flex-col-reverse" : "flex flex-col"
        } else {
            return props.type === 'image-first' ? "grid grid-cols-2 grid-flow-row gap-0.5 flex-row-reverse" : "grid grid-cols-2 grid-flow-row gap-0.5"
        }
    }

    return (
        <div className={`${handleClassParent()} ${props.clasName}`}>
            <ReactQuill value={content} onChange={handleContentChange} placeholder="Write something awesome..."/>
            <div className="w-full h-full" onClick={handleChooseFileClick}>
                <ImageDefault
                    className={`${imageUrl === '' ? 'p-2' : ''} object-cover w-full h-full bg-gray-500`}
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
        </div>
    );
}