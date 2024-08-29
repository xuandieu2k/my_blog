import { FC, useEffect, useRef, useState } from "react";
import { SuggestContent } from "./suggest-content";
import { EditorRef, EmailEditorProps } from "react-email-editor";
import PostEditor from "../../tool-edit/components/post-editor";
import ic_preview from '../../../static/svg/ic-preview.svg'
import ic_design from '../../../static/svg/ic-design.svg'
import { DetailPostContent } from "../../detail-blog/components/detail-post-content";
import Post from "../../../base/model/post";
import ContentPost from "../../../base/model/content-post";
import { TYPE_CONTENT_COMPONENT } from "../../../base/constants/app-constants";
import Category from "../../../base/model/category";

export const CreatePost: FC<{}> = () => {
    const [activeTab, setActive] = useState<number>(1)
    const [post, setPost] = useState<Post>(new Post({
        id: 1,
        title: 'What do u think about your com? So bad or normal. May be you hate this com.', poster: 'https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
        content_posts: [
            new ContentPost({ id: 1, content: 'I am sure. Y are a dog. Because you are lie peo', type: TYPE_CONTENT_COMPONENT.TEXT }),
            new ContentPost({ id: 2, content: 'I am sure. Y are a dog. Because you are lie peo', type: TYPE_CONTENT_COMPONENT.IMAGE_TEXT, url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg' }),
            new ContentPost({ id: 3, content: 'I am sure. Y are a dog. Because you are lie peo', type: TYPE_CONTENT_COMPONENT.TEXT_IMAGE, url: 'https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?cs=srgb&dl=pexels-katja-79053-592077.jpg&fm=jpg' }),
        ],
        categories: [
            new Category({ id: 1, name: 'Đời sống', is_selected: true }),
            new Category({ id: 2, name: 'Du lịch', is_selected: true }),
            new Category({ id: 3, name: 'Ẩm thực', is_selected: false }),
            new Category({ id: 4, name: 'Thiên nhiên', is_selected: false }),
        ]
    }))


    // process edit
    const emailEditorRef = useRef<EditorRef>(null);

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
        });
    };

    const onReady: EmailEditorProps['onReady'] = (unlayer) => {
        // editor is ready
        // you can load your template here;
        // the design json can be obtained by calling
        // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

        // const templateJson = { DESIGN JSON GOES HERE };
        // unlayer.loadDesign(templateJson);
    };

    const setActiveTab = (tab: number) => {
        setActive(tab)
    }

    const setClassActive = (currentTab: number) => {
        if (activeTab == currentTab) {
            return 'bg-green-600 text-white'
        } else {
            return ''
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row md:px-8">
                <h6 className="text-lg"><b>Admin</b> / <span>Create post</span></h6>
            </div>
            <div className="flex flex-col md:flex-col md:p-8">
                <SuggestContent post={post} />
                <div className="bg-gray-200 grid grid-cols-2 my-2">
                    <div className={`${setClassActive(1)} flex items-center justify-center p-4`} onClick={() => setActiveTab(1)}>
                        <img className="h-4 w-4" src={ic_design} />
                        <p className="ml-2">Thiết kế</p>
                    </div>
                    <div className={`${setClassActive(2)} flex items-center justify-center p-4`} onClick={() => setActiveTab(2)}>
                        <img className="h-4 w-4" src={ic_preview} />
                        <p className="ml-2">Xem trước</p>
                    </div>
                </div>
                {activeTab === 1 ? <PostEditor post={post} setPost={setPost} /> : <DetailPostContent post={post} show={false} />}
            </div>
        </div>
    )
}