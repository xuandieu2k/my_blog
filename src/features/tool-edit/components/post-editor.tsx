import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { MoveItem } from './move-item';
import { TitleItem } from './title-item';
import { CategoryItem } from './category-item';
import { ImageTopicItem } from './image-topic-item';
import { ChooseCategoriesModal } from './choose-categories-modal';
import Category from '../../../base/model/category';

const PostEditor: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [show, setShowModal] = useState<boolean>(false)

    const categories = [
        new Category({ id: 1, name: 'Đời sống', is_selected: true }),
        new Category({ id: 2, name: 'Du lịch', is_selected: true }),
        new Category({ id: 3, name: 'Ẩm thực', is_selected: false }),
        new Category({ id: 4, name: 'Thiên nhiên', is_selected: false }),
    ];
    const [currentCategories, setCurrentCategories] = useState<Category[]>(categories)

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const onHandleClose = () => {
        setShowModal(false)
    }

    const onClickRemoveItem = (item: Category) => {
        const itemCat = currentCategories.find((i) => i.id == item.id)
        if (itemCat) {
            itemCat.is_selected = false
            const updatedItems = [...currentCategories]
            setCurrentCategories(updatedItems)
        }
    }

    const onShowModal = () =>{
        setShowModal(true)
    }

    return (
        <div className="editor-container">
            <TitleItem />
            <CategoryItem categories={currentCategories.filter((item) => item.is_selected)} onClickRemoveItem={onClickRemoveItem} onShowModal={onShowModal}/>
            <ImageTopicItem />
            {/* <DemoTool /> */}
            <p>{content}</p>
            <MoveItem />
            <ChooseCategoriesModal handleClose={onHandleClose} show={show} categories={currentCategories} setCategories={setCurrentCategories} />
        </div>
    );
};

export default PostEditor;