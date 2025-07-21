import { Outlet } from "react-router"
import { Footer } from "./layout/footer"
import { Header } from "./layout/header"

export const Applayout =()=>{
    return<>
        <Header />

            <Outlet />

        <Footer />
    </>
}