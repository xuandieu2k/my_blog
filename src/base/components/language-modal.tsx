import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
    show: boolean,
    handleClose: () => void,
    currentLanguage: string,
    changeLanguage: (lang: string) => void
}

const LanguageModal: FC<LanguageProps> = ({ show, handleClose, currentLanguage, changeLanguage }) => {
    const { t } = useTranslation();
    const languages = [
        { code: 'en', name: t('english') },
        { code: 'vi', name: t('vietnam') },
        { code: 'ko', name: t('south_korea') },
        { code: 'cn', name: t('china') },
        // Add other languages as needed
    ];

    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [show]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`} role="dialog">
            <div className="bg-white rounded-lg shadow-lg w-4/5">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h5 className="text-lg font-bold">{t('language')}</h5>
                    <button type="button" className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="p-4">
                    <ul className="list-none">
                        {languages.map((lang) => (
                            <li
                                key={lang.code}
                                className={`p-2 border-b border-gray-200 cursor-pointer ${currentLanguage === lang.code ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => changeLanguage(lang.code)}
                            >
                                {lang.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button type="button" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" onClick={handleClose}>
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;