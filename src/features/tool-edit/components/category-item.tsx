import { FC, useState } from "react";
import ic_close from '../../../static/svg/ic-cancel.svg'
import Category from "../../../base/model/category";
interface CategoryItemProps {
    categories: Category[],
    onClickRemoveItem: (item: Category, position: number) => void,
    onShowModal: () => void
}
export const CategoryItem: FC<CategoryItemProps> = (props) => {
    // const [categories, setCategories] = useState<string[]>(['Hỏi chấm', 'Chấm hỏi'])
    const renderCategories = () => {
        return props.categories.map((category, index) => {
            return (
                <div key={index} className="flex flex-row justify-between items-center w-fit mr-2 my-1 ">
                    <h6 className="w-fit bg-green-600 text-white p-2 mr-2 rounded-sm">{category.name}</h6>
                    <img
                        src={ic_close}
                        className="h-4 w-4"
                        onClick={(e) => {
                            e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền lên div
                            props.onClickRemoveItem(category, index);
                        }}
                    />
                </div>
            );
        });
    }

    return (
        <div className="flex flex-col my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Danh mục bài viết</h6>
            <div className="flex flex-wrap border-2 border-gray-400 p-4 hover:cursor-pointer" onClick={props.onShowModal}>
                {props.categories.length > 0 ? renderCategories() : <p className="text-gray-400">Nhấn vào đây để chọn danh mục</p>}
            </div>
            <span className={`${props.categories.filter((item) => item.is_selected).length > 0 && props.categories.filter((item) => item.is_selected).length <= 5?'hidden':''} text-red-600 mt-1 text-sm`}>* Vui lòng chọn ít nhất 1 danh mục và tối đa là 5 danh mục.</span>
        </div>
    );
}