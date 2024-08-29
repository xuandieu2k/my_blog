import { FC, useState } from "react";
import { ButtonIcon } from "./button-icon";
import icon_menu from '../../static/svg/ic-menu.svg'
import { CategoryTopbar } from "./category-top-bar";
import useWindowSize from "../hook/use-window-resize";
import { CategoryTitle } from "./category-title";
import { ModuleConstants } from "../constants/module-constants";
import { TAB_LAYOUT } from "../constants/app-constants";
import { getLanguage } from "../utils/app-utils";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

interface TopBarProps {
    isShow?: boolean
    onClickClose?: (tab?: number) => void
}
export const TopBar: FC<TopBarProps> = (props) => {
    const { t } = useTranslation()
    const screenSize = useWindowSize()
    const [activeTab, setActiveTab] = useState<number>(TAB_LAYOUT.HOME)
    const onActiveTabChange = (tab?: number) => {
        if (tab) {
            setActiveTab(tab)
        }
    }

    const setClassForTab = (tab: number) => {
        return tab === activeTab ? 'active' : ''
    }

    const onClickMenu = () => {
        if (props.onClickClose)
            props.onClickClose(activeTab)
    }

    const onClickTab = () => {
        if (props.onClickClose)
            props.onClickClose(TAB_LAYOUT.LANGUAGE)
    }


    return (
        <div
            className={`overflow-x-auto fixed inset-0 z-50 bg-[#023047] transition-transform transition-opacity duration-500 ease-in-out ${props.isShow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                }`}
        >
            <div className="m-4">
                <div className="flex">
                    <h1 className="text-2xl font-bold flex-1">{activeTab === TAB_LAYOUT.ADMIN ? 'Admin' : 'My Blog'}</h1>
                    <div className="flex items-center ml-auto">
                        <ButtonIcon src={icon_menu} className="h-6 w-6" onClick={onClickMenu} />
                    </div>
                </div>
                <div className="bg-white h-[0.05em] mt-4"></div>

                <input type="search" className="w-full my-4 h-10 rounded-md px-4 text-black" placeholder={`${t('search_post')}...`} />
                <div className="flex flex-col">
                    <CategoryTitle setActiveTab={onActiveTabChange} tab={TAB_LAYOUT.HOME} className={setClassForTab(TAB_LAYOUT.HOME)} name={t('home')} to={ModuleConstants.HOME} onClick={props.onClickClose} />
                    <CategoryTitle setActiveTab={onActiveTabChange} className="" name={t('category')} />
                    <div className={`${screenSize.screenSize === 'mobile' ? 'flex flex-col' : 'grid grid-rows-2 grid-flow-col gap-1'}`}>
                        <CategoryTopbar title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} onClick={props.onClickClose} />
                        <CategoryTopbar title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} onClick={props.onClickClose} />
                        <CategoryTopbar title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} onClick={props.onClickClose} />
                        <CategoryTopbar title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} onClick={props.onClickClose} />
                        <CategoryTopbar title="Đời sống" data={['Tất cả', 'Sức khỏe', 'Thể thao']} onClick={props.onClickClose} />
                    </div>
                    <CategoryTitle setActiveTab={onActiveTabChange} tab={TAB_LAYOUT.DETAIL_POST} className={setClassForTab(TAB_LAYOUT.DETAIL_POST)} name={t('outstanding')} to={ModuleConstants.DETAIL_POST} onClick={props.onClickClose} />
                    <CategoryTitle setActiveTab={onActiveTabChange} tab={TAB_LAYOUT.ABOUT_US} className={setClassForTab(TAB_LAYOUT.ABOUT_US)} name={t('about_us')} to={ModuleConstants.ABOUT_US} onClick={props.onClickClose} />
                    <CategoryTitle setActiveTab={onActiveTabChange} tab={TAB_LAYOUT.LANGUAGE} className="" name={t('language')} icon={getLanguage(i18n.language)} onClick={onClickTab} />
                    <CategoryTitle setActiveTab={onActiveTabChange} tab={TAB_LAYOUT.ADMIN} className={setClassForTab(TAB_LAYOUT.ABOUT_US)} to={ModuleConstants.ADMIN} name={t('admin')} onClick={props.onClickClose} />
                </div>
            </div>
        </div >
    );
}