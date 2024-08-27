import { FC } from "react"
import LatestPosts from "./lastest-post";
import { FeaturePost } from "./feature-post";

export const HomeContent: FC<{}> = () => {

    return (
        <div className="container mx-auto space-y-8">
            {/* Slide giới thiệu */}
            <div className="relative bg-cover bg-center h-96 rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url('https://source.unsplash.com/random/1200x800?blog')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Blog</h1>
                    <p className="text-lg md:text-xl">Sharing knowledge about web development, programming, and more.</p>
                </div>
            </div>

            {/* Bài viết nổi bật */}
            <FeaturePost />

            {/* Bài viết mới nhất */}
            <LatestPosts />

            {/* Thông tin cá nhân */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 mb-4">
                    I'm a passionate web developer with experience in creating responsive and engaging websites. Follow my blog to get the latest updates in web development and programming.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all">
                    Contact Me
                </button>
            </div>

            {/* Phần Giới Thiệu */}
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
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

        </div>
    );
}