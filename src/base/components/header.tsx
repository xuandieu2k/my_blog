import { FC, useState } from "react";
import { ButtonIcon } from "./button-icon";
import icon_search from '../../static/svg/ic-search.svg'
import icon_menu from '../../static/svg/ic-menu.svg'
import { TopBar } from "./top-bar";
import i18n from "../../i18n";
import LanguageModal from "./language-modal";
import { TAB_LAYOUT } from "../constants/app-constants";

export const Header: FC<{}> = () => {
    const [showTopbar, setShowTopbar] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false)
    const onClickSearch = () => {

    }

    const onClickMenu = () => {
        setShowTopbar(!showTopbar)
    }

    const onClose = (tab?: number) => {
        setShowTopbar(false)
        if(tab && tab === TAB_LAYOUT.LANGUAGE)
            setShowModal(true)
    }


    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        setShowModal(false)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <header className="bg-black text-white p-4 shadow-md">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <h1 className="text-2xl font-bold flex-1">My Blog</h1>
                    <div className="flex items-center ml-auto">
                        <ButtonIcon src={icon_search} className="h-6 w-6" onClick={onClickSearch} />
                        <ButtonIcon src={icon_menu} className="h-6 w-6 ml-4" onClick={onClickMenu} />
                    </div>
                </div>
                <TopBar isShow={showTopbar} onClickClose={onClose} />
            </header>
            {showModal && <LanguageModal
                show={showModal}
                handleClose={handleClose}
                currentLanguage={i18n.language}
                changeLanguage={changeLanguage}
            />}
        </>
    );
}
