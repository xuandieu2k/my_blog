import { useState, useEffect } from 'react';

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
    screenSize: ScreenSize;
}

const getScreenSize = (width: number | undefined): ScreenSize => {
    if (width === undefined) {
        return 'mobile'; // Hoặc trả về giá trị mặc định khác nếu cần
    }
    if (width < 640) {
        return 'mobile';
    } else if (width >= 640 && width <= 1024) {
        return 'tablet';
    } else {
        return 'desktop';
    }
};

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
        screenSize: 'mobile',
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setWindowSize({
                width,
                height,
                screenSize: getScreenSize(width),
            });
        };

        // Gọi hàm handleResize để lấy kích thước ban đầu
        handleResize();

        window.addEventListener('resize', handleResize);

        // Hủy lắng nghe sự kiện khi component bị unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;