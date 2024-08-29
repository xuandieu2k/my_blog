import { Footer } from "./footer";
import { HeaderAdmin } from "./header-admin";

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutAdmin: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderAdmin />
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default LayoutAdmin;