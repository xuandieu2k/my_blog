import { FC } from "react";
import icon_next from "../../../static/svg/ic-prev.svg"
import icon_list_dot from "../../../static/svg/ic-list-dot.svg"
import icon_list_num from "../../../static/svg/ic-list-number.svg"
import icon_link from "../../../static/svg/ic-link.svg"
import icon_video from "../../../static/svg/ic-video.svg"
import icon_image from "../../../static/svg/ic-image.svg"

export const Editor: FC<{}> = () => {

    const ButtonEditor = (icon: string, className: string) => {
        return (<img src={icon} className={`${className} w-4 w-4`} />)
    }
    return (
        <div className="bg-gray-200 h-96 mt-2">
            <div className="grid grid-cols-5 grid-flow-row gap-0.5 text-center text-white">
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_next, 'rotate-180')}</div>
                <div className="flex bg-green-600 justify-center min-h-6  md:min-h-10">{ButtonEditor(icon_next, '')}</div>
                <div className="bg-green-600 content-center min-h-6  md:min-h-10"><b>B</b></div>
                <div className="bg-green-600 content-center uppercase min-h-6 md:min-h-10"><i>i</i></div>
                <div className="bg-green-600 content-center min-h-6 md:min-h-10"><u>U</u></div>
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_list_dot, '')}</div>
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_list_num, '')}</div>
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_link, '')}</div>
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_image, '')}</div>
                <div className="flex bg-green-600 justify-center min-h-6 md:min-h-10">{ButtonEditor(icon_video, '')}</div>
            </div>
            <div className="flex flex-col">
                <textarea className="h-full w-full min-h-full p-2 border-2 border-orange-500 outline-none" placeholder="Nhập nội dung..."/>
            </div>
        </div>
    )
}