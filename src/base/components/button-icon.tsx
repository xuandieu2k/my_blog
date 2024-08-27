import { FC } from "react";
interface ButtonIconProps {
    style?: React.CSSProperties,
    className?: string
    src?: string
    onClick?: () => void;
}
export const ButtonIcon: FC<ButtonIconProps> = (props) => {
    const onClick = () => {
        if (props.onClick)
            props.onClick()
    }
    return (
        <img className={props.className ?? 'h-4 w-4 min-h-4 min-w-4'} src={props.src} style={props.style} onClick={onClick} />
    )
}