import { FC, useEffect, useState } from "react";
import Post from "../../../base/model/post";
import getImageValidContent from "../utils/post-utils";
interface SuggestContentProps {
    post: Post
}
export const SuggestContent: FC<SuggestContentProps> = ({ post }) => {
    const [isTitle, setTitle] = useState<boolean>(false)
    const [isPoster, setPoster] = useState<boolean>(false)
    const [isHasImage, setHasImage] = useState<boolean>(false)
    const [isContent, setContent] = useState<boolean>(false)
    const [isValidLanguage, setValidLanguage] = useState<boolean>(false)
    const [point, setPoint] = useState<number>(0)
    useEffect(() => {
        setTitle(post.title.length >= 50 && post.title.length < 100 && post.categories.filter((item) => item.is_selected).length > 0 && post.categories.filter((item) => item.is_selected).length <= 5)
        setPoster(post.poster.trim() != '')
        setHasImage(post.content_posts.filter((item) => item.url.trim() != '').length > 0)
        setContent(post.content_posts.filter((item) => item.content.trim().length > 100).length > 0)
        setValidLanguage(true)
    }, [post])

    useEffect(() =>{
        calcPointPost()
    },[isTitle, isPoster, isHasImage, isContent, isValidLanguage])

    const calcPointPost = () => {
        const arr = [isTitle, isPoster, isHasImage, isContent, isValidLanguage]
        switch (arr.filter(item => item).length) {
            case 5:
                setPoint(100)
                break
            case 4:
                setPoint(80)
                break
            case 3:
                setPoint(60)
                break
            case 2:
                setPoint(40)
                break
            case 1:
                setPoint(20)
                break
            default:
                setPoint(0)
                break
        }
    }

    const getStatus = () => {
        if (point == 100) {
            return 'Xuất sắc'
        }
        if (point >= 80 && point < 100) {
            return 'Tốt'
        }
        if (point >= 60 && point < 80) {
            return 'Đạt'
        }
        if (point >= 40 && point < 60) {
            return 'Chưa đạt'
        }
        if (point >= 20 && point < 40) {
            return 'Yếu'
        }
        if (point < 20) {
            return 'Tệ'
        }
    }

    return (
        <div>
            <p>(<span className="text-red-500">*</span>) Để nội dung bài viết thật hay và cuốn hút người đọc. Bạn đừng quên tạo đầy đủ các thông tin bên dưới nhé:</p>
            <ul className="ml-10">
                <li className="flex">- Tiêu đề và danh mục bài viết<img src={getImageValidContent(isTitle)} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Hình ảnh chủ đề của bài viết <img src={getImageValidContent(isPoster)} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung đính kèm hình ảnh <img src={getImageValidContent(isHasImage)} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung hơn 100 từ <img src={getImageValidContent(isContent)} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Nội dung không chứa từ ngữ thô tục <img src={getImageValidContent(isValidLanguage)} className="h4 w-4 ml-2" /></li>
                <li className="flex">- Tổng điểm: {point}/100 - "<b className="text-bold text"> {getStatus()} </b>"</li>
            </ul>
        </div>
    )
}