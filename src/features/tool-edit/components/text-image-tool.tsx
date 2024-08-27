import React, { FC, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import ic_default from '../../../static/svg/ic-image.svg'
import useWindowSize from "../../../base/hook/use-window-resize";
interface TextImageToolProps {
    type?: 'text-first' | 'image-first',
    clasName?: string,
}
export const TextImageTool: FC<TextImageToolProps> = (props) => {
    const [content, setContent] = useState<string>('');
    const screenSize = useWindowSize()

    const handleContentChange = (value: string) => {
        setContent(value);
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
            <ReactQuill value={content} onChange={handleContentChange}/>
            <img className="object-cover w-full h-full bg-gray-500 p-2" src={ic_default} />
        </div>
    );
}