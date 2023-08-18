import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                { children }
            </div>
            <Footer />
        </>
    );
}
