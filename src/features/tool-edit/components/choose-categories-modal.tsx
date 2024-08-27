import { FC, useState } from "react"
import Category from "../../../base/model/category"
interface ChooseCategoriesProps {
    show: boolean,
    handleClose: () => void,
    categories: Category[],
    setCategories: (categories: Category[]) => void
}
export const ChooseCategoriesModal: FC<ChooseCategoriesProps> = (props) => {
    const [currentCategories, setCurrentCategories] = useState<Category[]>(props.categories)
    const onClickItem = (id: number) => {

    }

    const onClickSave = () => {
        props.handleClose()
    }


    const renderItemCategory = () => {
        return (
            <ul className="list-none">
                {props.categories.map((category) => (
                    <li
                        key={category.id}
                        className={`p-2 border-b border-gray-200 cursor-pointer ${category.is_selected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => onClickItem(category.id)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        );
    }


    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${props.show ? 'block' : 'hidden'}`} role="dialog">
            <div className="bg-white rounded-lg shadow-lg w-4/5">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    {/* <h5 className="text-lg font-bold">{t('language')}</h5> */}
                    <button type="button" className="text-gray-500 hover:text-gray-800" onClick={props.handleClose}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="p-4">
                    {renderItemCategory()}
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button type="button" className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500" onClick={props.handleClose}>
                        Đóng
                    </button>
                    <button type="button" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2" onClick={onClickSave}>
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    )
}