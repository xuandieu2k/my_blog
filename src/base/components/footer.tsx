import { FC } from "react";

export const Footer: FC<{}> = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-4">
            <div className="container mx-auto text-center">
                <p>© 2024 My Blog. All rights reserved.</p>
            </div>
        </footer>
    );
}