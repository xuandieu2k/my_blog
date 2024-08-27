import { FC } from "react";
import { Link } from "react-router-dom";
interface CategoryTitleProps {
    name: string,
    to?: string,
    onClick?: () => void
    tab?: number,
    className: string
    setActiveTab: (tab?: number) => void
    icon?: string

}
export const CategoryTitle: FC<CategoryTitleProps> = (props) => {
    const onClick = () => {
        if (props.onClick)
            props.onClick()
        props.setActiveTab(props.tab)
    }
    const setClass = (str: string) => {
        if (str.includes('active')) {
            return `border-b-[0.5px] border-white pb-1.5 ${str}`
        } else {
            return str
        }
    }
    return (
        props.icon ? <div className="flex flex-row justify-between items-center w-fit" onClick={onClick}>
            <Link className={`${setClass(props.className)} my-3 w-fit`} to={props.to ?? '#'} >{props.name}</Link>
            <span className="mx-2">|</span>
            <img src={props.icon} className="h-6 w-6"/>
        </div> :
            <Link className={`${setClass(props.className)} my-3 w-fit`} to={props.to ?? '#'} onClick={onClick}>{props.name}</Link>
    )
}