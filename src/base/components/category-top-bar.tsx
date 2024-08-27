import { FC, useEffect, useState } from "react";
import { ButtonIcon } from "./button-icon";
import icon_plus from '../../static/svg/ic-plus.svg'
import icon_minus from '../../static/svg/ic-minus.svg'
import useWindowSize from "../hook/use-window-resize";
import { useNavigate } from "react-router-dom";
import { ModuleConstants } from "../constants/module-constants";
interface CategoryTopbarProps {
    title: string,
    data: string[],
    onClick?: () => void
}
export const CategoryTopbar: FC<CategoryTopbarProps> = (props) => {
    const [showData, setShowData] = useState<boolean>(false)
    const screenSize = useWindowSize()
    const navigate = useNavigate()

    const onclick = () => {
        setShowData(!showData)
    }

    useEffect(() => {
        setShowData(screenSize.screenSize !== 'mobile')
    }, [screenSize.width])

    const moveToPage = () => {
        if (props.onClick)
            props.onClick()
        navigate(ModuleConstants.CATEGORY)
    }

    return (
        <div>

            <div className="flex flex-row justify-between items-center p-2 bg-[#219ebc] border-[0.1px] border-white">
                <p className="">{props.title}</p>
                <div className={`${screenSize.screenSize === 'mobile' ? 'block' : 'hidden'} flex items-center ml-auto`}>
                    <ButtonIcon src={showData ? icon_minus : icon_plus} className="h-6 w-6 pointer" onClick={onclick} />
                </div>
            </div>
            <div
                className={`${showData ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                    } transition-all duration-500 ease-in-out overflow-hidden flex flex-col bg-black`}
            >
                {props.data.map((item, index) => (
                    <div className="flex flex-col" onClick={moveToPage}>
                        <div className="w-full h-[0.5px] bg-gray-200" />
                        <p key={index} className="p-2 hover:bg-white hover:text-black">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
