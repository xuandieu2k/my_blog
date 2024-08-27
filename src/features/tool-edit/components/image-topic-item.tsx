import { FC } from "react"
import ic_default from '../../../static/svg/ic-image.svg'
export const ImageTopicItem: FC<{}> = () => {
    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Hình ảnh chủ đề</h6>
            <img src={ic_default} className="w-full h-40 md:h-96 bg-gray-400 p-8"/>
        </div> 
    )
}