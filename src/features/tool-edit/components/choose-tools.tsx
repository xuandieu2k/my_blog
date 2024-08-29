import { FC } from "react";

import ic_text_tool from '../../../static/svg/ic-text-tool.svg'
import ic_img_text_tool from '../../../static/svg/ic-image-text-tool.svg'
import ic_text_img_tool from '../../../static/svg/ic-text-image-tool.svg'
import ic_embed_tool from '../../../static/svg/ic-embed-tool.svg'
import { TYPE_CONTENT_COMPONENT } from "../../../base/constants/app-constants";
interface ChooseToolProps {
    onPickTool: (type: number) => void
}
export const ChooseTool: FC<ChooseToolProps> = (props) => {
    return (
        <div className="flex flex-1 flex-col">
            <h6 className="my-2">Nhấn để thêm bản thiết kế</h6>
            <div className="grid grid-cols-4 gap-2 bg-gray-200 p-2 text-center">
                <div className="flex flex-1 justify-center items-center bg-gray-600 hover:bg-green-700 rounded-sm px-2 hover:cursor-pointer" onClick={() => props.onPickTool(TYPE_CONTENT_COMPONENT.TEXT)}>
                    <img src={ic_text_tool} className="h-20 w-20" alt="" />
                </div>
                <div className="flex flex-1 justify-center items-center bg-gray-600 hover:bg-green-700 rounded-sm  px-2 hover:cursor-pointer" onClick={() => props.onPickTool(TYPE_CONTENT_COMPONENT.IMAGE_TEXT)}>
                    <img src={ic_img_text_tool} className="h-20 w-20" alt="" />
                </div>
                <div className="flex flex-1 justify-center items-center bg-gray-600 hover:bg-green-700 rounded-sm px-2 hover:cursor-pointer" onClick={() => props.onPickTool(TYPE_CONTENT_COMPONENT.TEXT_IMAGE)}>
                    <img src={ic_text_img_tool} className="h-20 w-20" alt="" />
                </div>
                <div className="flex flex-1 justify-center items-center bg-gray-600 hover:bg-green-700 rounded-sm px-2 hover:cursor-pointer" onClick={() => props.onPickTool(TYPE_CONTENT_COMPONENT.EMBED_CODE)}>
                    <img src={ic_embed_tool} className="h-20 w-20" alt="" />
                </div>
                {/* <p>Văn bản</p>
                <p>Hình ảnh - văn bản</p>
                <p>Văn bản - hình ảnh</p>
                <p>Nhúng mã</p> */}
            </div>
        </div>
    )
}