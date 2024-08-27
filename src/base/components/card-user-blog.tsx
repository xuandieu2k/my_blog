import { FC } from "react";

export const CardUserBlog: FC<{}> = () => {

    return (
        <div className="my-2 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
                src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">Xuân Diệu</h3>
                <p className="text-gray-600">Mobile - Web Full-stack Developer & Blogger</p>
                <blockquote className="mt-4 text-blue-600 italic">
                    "The best way to predict the future is to invent it."
                </blockquote>
            </div>
        </div>
    );
}