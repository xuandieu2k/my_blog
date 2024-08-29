import ic_tick from '../../../static/svg/ic-tick.svg'
import ic_cancel from '../../../static/svg/ic-cancel.svg'
export default function getImageValidContent(isValid: boolean) {
    return isValid ? ic_tick : ic_cancel
}