import { FC } from "react";
import icon_fb from '../../../static/svg/social/ic-fb.svg'
import { Link } from "react-router-dom";
import { getAvatarSocial } from "../../../base/utils/app-utils";
interface SocialCardProps {
    type?: number,
    avatar?: string,
    name?: string,
    url?: string
}
export const SocialCard: FC<SocialCardProps> = (props) => {

    return (
        <div className="my-2 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex min-w-40 flex-row relative">
                <img
                    src={props.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover shadow-md"
                />
                <img
                    src={getAvatarSocial(props.type??1)}
                    alt="Profile"
                className="w-24 h-24 rounded-full object-cover shadow-md "
                />
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">{props.name ?? 'Xuân Diệu'}</h3>
                <Link className="mt-2 text-blue-600 italic" to={props.url ?? ''} >{props.url}</Link>
                {/* <blockquote className="mt-4 text-blue-600 italic">
                    "The best way to predict the future is to invent it."
                </blockquote> */}
            </div>
        </div>
    )
}