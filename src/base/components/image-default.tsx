import { FC, useEffect, useState } from "react"

import ic_default from '../../static/svg/ic-image.svg'
import { getSrcImage } from "../utils/photo-ultils";

interface ImageProps {
    url?: string,
    className?: string,
    onClick?: () => void;
    fallBackUrl?: string,
    style?: React.CSSProperties
}

const ImageDefault: FC<ImageProps> = (props) => {
    const [src, setSrc] = useState("");

    useEffect(() => {
        try {
            const result = getSrcImage(props.url??'');
            setSrc(result);
        } catch (error) {
            setSrc('');
            console.error('Error setting image:', error);
        }
    }, [props.url]);

    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = props.fallBackUrl ?? ic_default;
        event.currentTarget.onerror = null; // prevents looping if image onError also fails
    };


    return (
        <img className={props.className} src={src} onError={handleError} style={props.style} onClick={props.onClick} />
    )
}

export default ImageDefault