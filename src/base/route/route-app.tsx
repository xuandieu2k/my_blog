import { AboutUsConent } from "../../features/about-us/components/about-us-content";
import { CategoryContent } from "../../features/category/components/category-content";
import { DetailPostContent } from "../../features/detail-blog/components/detail-post-content";
import { HomeContent } from "../../features/home/components/home-content";
import { CreatePost } from "../../features/post/components/create-post";
import { ModuleConstants } from "../constants/module-constants";
import { Routes, Route } from 'react-router-dom';

const RouteApp = () => (
  <Routes>
    <Route path={ModuleConstants.HOME} element={<HomeContent />} />
    <Route path={ModuleConstants.DETAIL_POST} element={<DetailPostContent show={true} />} />
    <Route path={ModuleConstants.CATEGORY} element={<CategoryContent />} />
    <Route path={ModuleConstants.ABOUT_US} element={<AboutUsConent />} />
    <Route path={ModuleConstants.CREATE_POST} element={<CreatePost />} />
  </Routes>
);

export default RouteApp;