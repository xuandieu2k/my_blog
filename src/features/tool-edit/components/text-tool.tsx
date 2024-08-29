import { FC, useState } from "react";
import { ReactQuillExtendsion } from "./react-quill-extendsion";
import ContentPost from "../../../base/model/content-post";
interface TextToolProps {
    contentPost: ContentPost,
    position: number,
    onChangeData: (contentPost: ContentPost, position: number) => void
}
export const TextTool: FC<TextToolProps> = (props) => {
    const [content, setContent] = useState<string>(props.contentPost.content);

    const handleContentChange = (value: string) => {
        setContent(value);
        props.contentPost.content = value
        props.onChangeData(props.contentPost, props.position)
    };
    return (
        <div>
            <ReactQuillExtendsion props={{ value: content }} onDataChange={handleContentChange} />
        </div>
    );
}