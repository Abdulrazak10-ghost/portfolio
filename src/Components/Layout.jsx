import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";   // import styles

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
