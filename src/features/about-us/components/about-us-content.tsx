import { FC } from "react";
import { CardUserBlog } from "../../../base/components/card-user-blog";
import { SocialCard } from "./social-card";

export const AboutUsConent: FC<{}> = () => {
    const social = [
        { type: 1, name: 'Xuân Diệu', url: 'https://facebook.com/profile/xuandieu', avatar: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223' },
        { type: 2, name: 'Xuân Diệu', url: 'https://tiktok.com/profile/xuandieu', avatar: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223' },
        { type: 3, name: 'Xuân Diệu', url: 'https://youtube.com/profile/xuandieu', avatar: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223' },
        { type: 4, name: 'Xuân Diệu', url: 'https://.com/profile/xuandieu', avatar: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223' },
    ]

    return (
        <div>
            <div className="flex flex-row md:px-8">
                <h6 className="text-lg"><b>My Blog</b> / <span>About us</span></h6>
            </div>

            <CardUserBlog />
            {social.map((item, index) => {
                return (
                    <SocialCard key={index} type={item.type} avatar={item.avatar} name={item.name} url={item.url} />)
            })}
        </div>
    )
}