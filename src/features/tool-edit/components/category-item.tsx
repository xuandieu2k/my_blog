import { FC, useState } from "react";
import ic_close from '../../../static/svg/ic-cancel.svg'
import Category from "../../../base/model/category";
interface CategoryItemProps {
    categories: Category[],
    onClickRemoveItem: (item: Category) => void,
    onShowModal: () => void
}
export const CategoryItem: FC<CategoryItemProps> = (props) => {
    // const [categories, setCategories] = useState<string[]>(['Hỏi chấm', 'Chấm hỏi'])
    const renderCategories = () => {
        return props.categories.map((category, index) => {
            return (
                <div key={index} className="flex flex-row justify-between items-center w-fit mr-2">
                    <h6 className="w-fit bg-green-600 text-white p-2 mr-2">{category.name}</h6>
                    <img
                        src={ic_close}
                        className="h-4 w-4"
                        onClick={(e) => {
                            e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền lên div
                            props.onClickRemoveItem(category);
                        }}
                    />
                </div>
            );
        });
    }

    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Danh mục bài viết</h6>
            <div className="flex flex-row border border-2 border-gray-400 p-4" onClick={props.onShowModal}>
                {props.categories.length > 0 ? renderCategories() : <p className="text-gray-400">Nhấn vào đây để chọn danh mục</p>}
            </div>
        </div>
    );
}