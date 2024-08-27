import { FC, useState } from "react";
import ReactQuill from "react-quill";
import { ReactQuillExtendsion } from "./react-quill-extendsion";
interface TextToolProps {
    value?: string
}
export const TextTool: FC<TextToolProps> = (props) => {
    const [content, setContent] = useState<string>(String(props.value) == 'undefined' ? '' : String(props.value));

    const handleContentChange = (value: string) => {
        setContent(value);
    };
    return (
        <div>
            <ReactQuillExtendsion value={content} onChange={handleContentChange} />
        </div>
    );
}