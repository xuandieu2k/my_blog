import Pagination from "@mui/material/Pagination";
import { FC } from "react";

export const CategoryContent: FC<{}> = () => {

    const latestPosts = [
        {
            id: 1, title: "Post 1", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbBPDCrsH8iF2uaBV7ezbNmP1aFzwcBnJ3-4AFMZwC1WbXvRn2O6g1RO0v8a_lI8zaEU&usqp=CAU"
        },
        {
            id: 2, title: "Post 2", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU"
        },
        {
            id: 3, title: "Post 3", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg"
        },
        {
            id: 4, title: "Post 2", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU"
        },
        {
            id: 5, title: "Post 3", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg"
        },
        {
            id: 6, title: "Post 2", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU"
        },
        {
            id: 7, title: "Post 3", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg"
        },
        {
            id: 8, title: "Post 2", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU"
        },
        {
            id: 9, title: "Post 3", summary: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
            Fusce vel enim in mi fermentum placerat a id lacus. Sed gravida, mi ac hendrerit maximus, 
            tortor ipsum iaculis nunc, a bibendum dolor eros ac nisi. Duis ultricies odio nec urna congue, 
            sit amet vestibulum ipsum posuere. Integer euismod neque a magna congue, eu rutrum magna elementum.
        `, image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg"
        },
    ];

    return (
        <div>
            <div className="flex flex-row md:px-8">
                <h6 className="text-lg"><b>My Blog</b> / <span>Categories</span></h6>
            </div>
            <div className="flex flex-col space-y-8">
                {latestPosts.map((post, index) => (
                    <div
                        key={post.id}
                        className={`bg-white p-6 rounded-lg shadow-lg flex cursor-pointer flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6`}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className={`w-full md:w-1/2 h-72 object-cover rounded-lg md:rounded-l-lg`}
                        />
                        <div className={`text-center md:text-left p-4 `}>
                            <h3 className={`text-2xl font-bold text-gray-800`}>{post.title}</h3>
                            <p className={`text-gray-700 mt-2`}>{post.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Pagination count={10} size="large" /> */}
            <Pagination count={10} size="small" className="mt-4" variant="outlined" color="primary" />
        </div>
    )
}