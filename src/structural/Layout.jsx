import { Outlet } from "react-router";
import WPNavbar from "../components/WPNavbar";
import { UsernameProvider } from '../constants/UsernameContext'

export default function Layout() {
    return <UsernameProvider>
        <div style={{
                backgroundColor: 'var(--bs-primary-100)',
                minHeight: '100vh',
                minWidth: '100vw'
        }}>
            <WPNavbar/>
            <Outlet/>
        </div>
    </UsernameProvider>
}