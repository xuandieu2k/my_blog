import React, { FC, useEffect, useState } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
interface ReactQuillExtendsionProps {
    props: ReactQuillProps,
    onDataChange: (value: string) => void
}
export const ReactQuillExtendsion: FC<ReactQuillExtendsionProps> = ({ props, onDataChange }) => {
    const [content, setContent] = useState(props.value);
    useEffect(() => {
        onDataChange(String(content))
    }, [content])

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }], // Module căn lề
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'align', // Format căn lề
        'color', 'background',
        'link', 'image', 'video'
    ];

    return (
        <div>
            <ReactQuill
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Write something awesome..."
            />
        </div>
    );
}
