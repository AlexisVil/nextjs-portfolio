import Navbar from "./Navbar"

import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, title, footer = true, dark = false }) => {

    const router = useRouter();

    const handleRouteChange = url => {
        console.log(url)
        NProgress.start();
    }
    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className={dark ? 'bg-dark' : ''}>
            <Navbar />
            <main className="container py-4">
                {title && (
                    <h1 className="text-center">
                        {title}
                    </h1>
                )}

                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Alexis A. López Vilchis portfolio</h1>
                            <p>2019 - {new Date().getFullYear()}</p>
                            <p>All rights reserved</p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}

export default Layout;