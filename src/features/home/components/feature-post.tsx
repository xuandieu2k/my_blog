import { FC } from "react"

export const FeaturePost: FC<{}> = () => {
    const featuredPosts = [
        {
            id: 1,
            title: "Mastering CSS Grid for Responsive Design",
            image: "https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg",
            summary: "Learn how CSS Grid can help you create beautiful and responsive layouts with ease.",
        },
        {
            id: 2,
            title: "Understanding Async/Await in JavaScript",
            image: "https://statics.vinpearl.com/canh-dep-viet-nam-15_1634999578.jpg",
            summary: "Async/Await makes handling asynchronous operations easier in JavaScript. Here's how it works.",
        },
        {
            id: 3,
            title: "Introduction to Web Accessibility",
            image: "https://png.pngtree.com/background/20230515/original/pngtree-beautiful-road-in-green-landscape-with-sunset-background-nature-wallpaper-picture-image_2573850.jpg",
            summary: "Web accessibility ensures that websites are usable by people with various disabilities.",
        },
    ];

    return (
        <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-700 mb-4">{post.summary}</p>
                                <button className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}