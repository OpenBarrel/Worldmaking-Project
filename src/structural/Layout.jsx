import { Outlet } from "react-router";
import WPNavbar from "../components/WPNavbar";

export default function Layout() {
    return <div style={{
            backgroundColor: 'var(--bs-primary-100)',
            minHeight: '100vh',
            minWidth: '100vw'
    }}>
        <WPNavbar/>
        <Outlet/>
    </div>
}