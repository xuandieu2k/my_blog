import flag_VN from '../../static/flag/ic-flag-vn.svg'
import flag_USA from '../../static/flag/ic-flag-usa.svg'
import flag_KO from '../../static/flag/ic-flag-ko.svg'
import flag_CN from '../../static/flag/ic-flag-cn.svg'

import ic_fb from '../../static/svg/social/ic-fb.svg'
import ic_tiktok from '../../static/svg/social/ic-tiktok.svg'
import ic_youtube from '../../static/svg/social/ic-youtube.svg'
import ic_instagram from '../../static/svg/social/ic-instagram.svg'
import { SOCIAL_TYPE } from '../constants/app-constants'
export function getLanguage(lang: string): string {
    switch (lang) {
        case "vi": return flag_VN
        case "en": return flag_USA
        case "cn": return flag_CN
        case "ko": return flag_KO
        default: return flag_USA
    }
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0, // Không hiển thị phần thập phân
        maximumFractionDigits: 0
    }).format(amount);
}

export function getAvatarSocial(social: number) {
    switch (social) {
        case SOCIAL_TYPE.FB: return ic_fb
        case SOCIAL_TYPE.INSTAGRAM: return ic_instagram
        case SOCIAL_TYPE.TIKTOK: return ic_tiktok
        case SOCIAL_TYPE.YOUTUBE: return ic_youtube
        default: return ic_fb
    }
}

