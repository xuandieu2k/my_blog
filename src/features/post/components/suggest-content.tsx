import { FC } from "react";
import ic_tick from '../../../static/svg/ic-tick.svg'
import ic_cancel from '../../../static/svg/ic-cancel.svg'

export const SuggestContent: FC<{}> = () => {
    return (
        <div>
            <p>(<span className="text-red-500">*</span>) Để nội dung bài viết thật hay và cuốn hút người đọc. Bạn đừng quên tạo đầy đủ các thông tin bên dưới nhé:</p>
            <ul className="ml-10">
                <li className="flex">- Tiêu đề bài viết <img src={ic_tick} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Hình ảnh chủ đề của bài viết <img src={ic_cancel} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung đính kèm hình ảnh <img src={ic_tick} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung hơn 100 từ <img src={ic_tick} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung không chứa từ ngữ thô tục <img src={ic_tick} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Tổng điểm: 80/100 - Khá</li>
            </ul>
        </div>
    )
}