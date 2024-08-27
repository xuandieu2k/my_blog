import { FC, useState } from "react";
import icon_plus from '../../../static/svg/ic-plus.svg'
import icon_minus from '../../../static/svg/ic-minus.svg'
import { ButtonIcon } from "../../../base/components/button-icon";
interface CategoryPostProps {
    title: string,
    data: string[]
}
export const CategoryPost: FC<CategoryPostProps> = (props) => {
    const [showData, setShowData] = useState<boolean>(false)
    const onclick = () => {
        setShowData(!showData)
    }

    return (
        <div>

            <div className="flex flex-row justify-between items-center p-2 bg-[#219ebc] border-[0.1px] border-white">
                <p className="text-white">{props.title}</p>
                <div className={` flex items-center ml-auto`}>
                    <ButtonIcon src={showData ? icon_minus : icon_plus} className="h-6 w-6 cursor-pointer" onClick={onclick} />
                </div>
            </div>
            <div
                className={`${showData ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                    } transition-all duration-500 ease-in-out overflow-hidden flex flex-col bg-black`}
            >
                {props.data.map((item, index) => (
                    <div className="flex flex-col">
                        <div className="w-full h-[0.5px] bg-gray-200" />
                        <p key={index} className="p-2 hover:bg-white hover:text-black text-white">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
