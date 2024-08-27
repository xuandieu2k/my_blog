import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModuleConstants } from '../../../base/constants/module-constants';

const latestPosts = [
    { id: 1, title: "Post 1", summary: "Summary of post 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbBPDCrsH8iF2uaBV7ezbNmP1aFzwcBnJ3-4AFMZwC1WbXvRn2O6g1RO0v8a_lI8zaEU&usqp=CAU" },
    { id: 2, title: "Post 2", summary: "Summary of post 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2SMLyqJ0N0Uc_aKxZwnD6R84j9lBsdVRO4gaj0VQbkxldqnnHGpaE0vOgDpnQ89CbU&usqp=CAU" },
    { id: 3, title: "Post 3", summary: "Summary of post 3", image: "https://imgs.vietnamnet.vn/Images/vnn/2015/04/14/16/20150414150254-1428973377-qfmzvietnam1-okkj.jpg" },
];

const LatestPosts = () => {
    const navigate = useNavigate()
    const onClick = () =>{
        navigate(ModuleConstants.DETAIL_POST)
    }

    return (
        <div className='flex flex-col text-center'>
            <h2 className="text-3xl font-bold">Lastest Posts</h2>
            <div className="flex flex-col space-y-8">
                {latestPosts.map((post, index) => (
                    <div
                        key={post.id}
                        className={`bg-white p-6 rounded-lg shadow-lg flex cursor-pointer ${index === 0 ? 'flex-col md:flex-row' : index === 1 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} items-center space-y-4 md:space-y-0 md:space-x-6`}
                    onClick={onClick}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className={`w-full md:w-1/2 h-72 object-cover rounded-lg ${index === 0 ? 'md:rounded-l-lg' : index === 1 ? 'md:rounded-r-lg' : 'md:rounded-lg'}`}
                        />
                        <div className={`text-center md:text-${index === 0 ? 'left' : 'right'} p-4 ${index === 2 ? 'bg-blue-100 rounded-lg' : ''}`}>
                            <h3 className={`text-2xl font-bold ${index === 2 ? 'text-green-700' : 'text-gray-800'}`}>{post.title}</h3>
                            <p className={`text-gray-700 mt-2 ${index === 2 ? 'text-gray-900' : ''}`}>{post.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestPosts;