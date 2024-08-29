import { FC, useState } from "react"
import Category from "../../../base/model/category"
import ic_check from '../../../static/svg/ic-tick.svg'
import useWindowSize from "../../../base/hook/use-window-resize"
interface ChooseCategoriesProps {
    show: boolean,
    handleClose: () => void,
    categories: Category[],
    // setCategories: (categories: Category[]) => void
}
export const ChooseCategoriesModal: FC<ChooseCategoriesProps> = (props) => {
    const [currentCategories, setCurrentCategories] = useState<Category[]>(props.categories)
    const screenSize = useWindowSize()
    const onClickItem = (id: number) => {
        const item = currentCategories.find((i) => i.id == id)
        if (item) {
            item.is_selected = !item.is_selected
            const updatedItems = [...currentCategories]
            setCurrentCategories(updatedItems)
        }
    }

    const onClickSave = () => {
        // props.setCategories(currentCategories)
        props.handleClose()
    }


    const renderItemCategory = () => {
        return (
            <ul className={`${screenSize.screenSize !== 'mobile' ? 'grid grid-cols-2 gap-2' : ''} list-none`}>
                {currentCategories.map((category) => (
                    <li
                        key={category.id}
                        className={`p-2 flex border-b border-gray-200 cursor-pointer ${category.is_selected ? 'bg-gray-600 text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => onClickItem(category.id)}
                    >
                        <p>{category.name}</p> {category.is_selected && <img className="ml-auto h4 w-4" src={ic_check} />}
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
                <div className="px-4 py-2">
                    <input className="w-full border-2 p-2" placeholder="Nhập từ khóa cần tìm" />
                </div>
                <div className="p-4">
                    {renderItemCategory()}
                </div>
                {/* <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button type="button" className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500" onClick={props.handleClose}>
                        Đóng
                    </button>
                    <button type="button" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2" onClick={onClickSave}>
                        Lưu
                    </button>
                </div> */}
            </div>
        </div>
    )
}