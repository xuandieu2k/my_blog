import { AboutUsConent } from "../../features/about-us/components/about-us-content";
import { AdminHomeContent } from "../../features/admin/components/admin-home-content";
import { CategoryManagement } from "../../features/admin/components/category-management";
import { PostManagement } from "../../features/admin/components/post-management";
import { PostReview } from "../../features/admin/components/post-review";
import { UserManagement } from "../../features/admin/components/user-management";
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
    <Route path={ModuleConstants.ADMIN} element={<AdminHomeContent />} />
    <Route path={ModuleConstants.POST_MANAGEMENT} element={<PostManagement />} />
    <Route path={ModuleConstants.POST_REVIEW} element={<PostReview />} />
    <Route path={ModuleConstants.CATEGORY_MANAGEMENT} element={<CategoryManagement />} />
    <Route path={ModuleConstants.USER_MANAGEMENT} element={<UserManagement />} />
  </Routes>
);

export default RouteApp;