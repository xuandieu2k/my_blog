import React, { useEffect, useState } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const ReactQuillExtendsion = (props: ReactQuillProps) => {
    const [content, setContent] = useState('');
    useEffect(() =>{
        console.log({content})
    },[content])

    // Cấu hình các module cho react-quill
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

    // Các định dạng được sử dụng trong editor
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
