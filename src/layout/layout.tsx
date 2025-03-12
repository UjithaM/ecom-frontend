import { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar.tsx";
import Footer from "@/components/footer/Footer.tsx";



const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>

            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;