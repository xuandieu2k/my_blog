import { FC, useRef, useState } from "react";
import { SuggestContent } from "./suggest-content";
import { EditorRef, EmailEditorProps } from "react-email-editor";
import PostEditor from "../../tool-edit/components/post-editor";
import ic_preview from '../../../static/svg/ic-preview.svg'
import ic_design from '../../../static/svg/ic-design.svg'
import { DetailPostContent } from "../../detail-blog/components/detail-post-content";

export const CreatePost: FC<{}> = () => {
    const [activeTab, setActive] = useState<number>(1)
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
                <SuggestContent />
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
                {activeTab === 1 ? <PostEditor /> : <DetailPostContent show={false} />}
            </div>
        </div>
    )
}