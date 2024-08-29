import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { MoveItem } from './move-item';
import { TitleItem } from './title-item';
import { CategoryItem } from './category-item';
import { ImageTopicItem } from './image-topic-item';
import { ChooseCategoriesModal } from './choose-categories-modal';
import Category from '../../../base/model/category';
import Post from '../../../base/model/post';
import { ChooseTool } from './choose-tools';
interface PostEditorProps {
    post: Post,
    setPost: (post: Post) => void
}
const PostEditor: React.FC<PostEditorProps> = ({ post, setPost }) => {
    const [content, setContent] = useState<string>('');
    const [show, setShowModal] = useState<boolean>(false)

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const onHandleClose = () => {
        setShowModal(false)
    }

    const onClickRemoveItem = (item: Category) => {
        const itemCat = post.categories.find((i) => i.id == item.id)
        if (itemCat) {
            itemCat.is_selected = false
            const updatedItems = [...post.categories]
            const updatedPost = { ...post, categories: updatedItems };
            setPost(updatedPost);
            // setCurrentCategories(updatedItems)
        }
    }

    const onShowModal = () => {
        setShowModal(true)
    }

    return (
        <div className="editor-container">
            <TitleItem post={post} setPost={setPost} />
            <CategoryItem categories={post.categories.filter((item) => item.is_selected)} onClickRemoveItem={onClickRemoveItem} onShowModal={onShowModal} />
            <ImageTopicItem post={post} setPost={setPost} />
            {/* <DemoTool /> */}
            <p>{content}</p>
            <MoveItem post={post} setPost={setPost} />
            <ChooseCategoriesModal handleClose={onHandleClose} show={show} categories={post.categories.slice()} />
        </div>
    );
};

export default PostEditor;