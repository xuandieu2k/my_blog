import { FC, useEffect, useState } from "react";
import { CategoryPost } from "./category-post";
import { CardUserBlog } from "../../../base/components/card-user-blog";
import { useLocation } from "react-router-dom";
import Post from "../../../base/model/post";
import ContentPost from "../../../base/model/content-post";
import { TYPE_CONTENT_COMPONENT } from "../../../base/constants/app-constants";
import ImageDefault from "../../../base/components/image-default";
interface DetailPostContentProps {
    show: boolean,
    post?: Post
}
export const DetailPostContent: FC<DetailPostContentProps> = (props) => {
    const location = useLocation()
    const id = location.state ? location.state.id : 0
    const [showRightSection, setShowSection] = useState<boolean>(props.show)
    const [post, setPost] = useState<Post>(new Post(
        {
            id: 1,
            title: "Amazing Blog Post",
            poster: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg",
            content_posts: [
                new ContentPost({
                    content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
                Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
                tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
                sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.`, type: TYPE_CONTENT_COMPONENT.TEXT

                }),
                new ContentPost({
                    content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
                Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
                tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
                sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.`, type: TYPE_CONTENT_COMPONENT.IMAGE_TEXT
                    , url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_EcbSiDIcxNrD2q_zZvxHM54uBQ8sFz4C8u-s1GBMUC8GSjOYYdMwIMHEiD8-I5YpE4&usqp=CAU'
                }),
                new ContentPost({
                    content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
                Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
                tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
                sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.`, type: TYPE_CONTENT_COMPONENT.TEXT_IMAGE
                    , url: 'https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg'
                }),

            ]
        }
    ))

    const relatedPosts = [
        { id: 1, title: "Post 1", summary: "Summary of post 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbBPDCrsH8iF2uaBV7ezbNmP1aFzwcBnJ3-4AFMZwC1WbXvRn2O6g1RO0v8a_lI8zaEU&usqp=CAU" },
        { id: 2, title: "Post 2", summary: "Summary of post 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU" },
        { id: 3, title: "Post 3", summary: "Summary of post 3", image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg" },
    ];
    useEffect(() => {
        console.log({id})
        if (!id) {
            setPost(props.post ?? new Post())
        }
    }, [])


    const renderContentPost = () => {
        return post.content_posts.map((content) => {
            return renderItem(content)
        })
    }

    const isHtml = (text: string) => {
        // Kiểm tra xem chuỗi có chứa thẻ HTML không
        const htmlRegex = /<[^>]+>/g;
        return htmlRegex.test(text);
    };

    const contentDisplay = (content: string, key: number) => {
        return (
            <div className="bg-white p-2 rounded-lg shadow-md my-2" key={key}>
                {isHtml(content) ? (
                    // Nếu là HTML, sử dụng dangerouslySetInnerHTML
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    // Nếu là text thuần, hiển thị như bình thường
                    <p className="text-gray-800 leading-relaxed">{content}</p>
                )}
            </div>
        );
    };

    const contentImageTextDisplay = (content: string, key: number, type: 'image-first' | 'text-first') => {
        return (
            <div className="text-center md:text-left" key={key}>
                {isHtml(content) ? (
                    // Nếu là HTML, sử dụng dangerouslySetInnerHTML
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    // Nếu là text thuần, hiển thị như bình thường
                    (type === 'text-first'?<p className="text-gray-600 md:mr-4 mb-2">{content}</p>:<p className="text-gray-600">{content}</p>)
                )}
            </div>
        );
    };

    const renderItem = (content: ContentPost) => {
        switch (content.type) {
            case TYPE_CONTENT_COMPONENT.TEXT:
                return contentDisplay(content.content, content.id)
            case TYPE_CONTENT_COMPONENT.IMAGE_TEXT:
                return (
                    <div className="my-2 bg-white p-2 rounded-lg shadow-lg flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6" key={content.id}>
                        <ImageDefault className="w-full h-60 md:w-96 md:h-96 rounded object-cover shadow-md" url={content.url} />
                        {contentImageTextDisplay(content.content, content.id,'image-first')}
                    </div>
                )
            case TYPE_CONTENT_COMPONENT.TEXT_IMAGE:
                return (
                    <div className="my-2 bg-white p-2 rounded-lg w-full shadow-lg flex md:flex-row md:flex-row-reverse flex-col-reverse items-center space-y-4 md:space-y-0 md:space-x-6" key={content.id}>
                        <ImageDefault className="w-full h-60 md:w-96 md:h-96 rounded object-cover shadow-md" url={content.url} />
                        {contentImageTextDisplay(content.content, content.id,'text-first')}
                    </div>
                )
            default: return (
                <div className="bg-white p-2 rounded-lg shadow-md my-2 text-gray-800 leading-relaxed" key={content.id}>
                    {content.content}
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row md:px-8">
                <h6 className="text-lg"><b>My Blog</b> / <span>Post</span></h6>
            </div>
            <div className="flex flex-col md:flex-row py-4 md:p-8">
                {/* Nội dung bài viết chính */}
                <div className="flex-1 md:mr-8">
                    {/* Hình ảnh bài viết */}
                    <div className="relative mb-6">
                        <img
                            src={post.poster}
                            alt={post.title}
                            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-lg">
                            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
                        </div>
                    </div>
                    {/* Nội dung bài viết */}
                    {renderContentPost()}
                    <div className="bg-white rounded-lg shadow-md my-2">
                        <iframe className="w-full h-80 rounded-lg shadow-md" src="https://www.youtube.com/embed/HQ_ytw58tC4" title="📱 FULL Flutter Beginner Course • Programming Basics / Widgets / Navigation / User Input / UI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>

                    <CardUserBlog />
                </div>



                {/* Các bài viết liên quan */}
                <div className={`${showRightSection ? '' : 'hidden'} w-full md:w-1/3 flex flex-col`}>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
                        {relatedPosts.map((relatedPost) => (
                            <div
                                key={relatedPost.id}
                                className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
                            >
                                <img
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    className="w-full md:w-1/3 h-40 object-cover rounded-lg"
                                />
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-semibold">{relatedPost.title}</h3>
                                    <p className="text-gray-600 mt-2">{relatedPost.summary}</p>
                                </div>
                            </div>
                        ))}

                        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

                    </div>
                    <div className={'w-full flex flex-col mt-4'}>
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                        <CategoryPost title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} />
                    </div>
                </div>
            </div>
        </div>
    )
}