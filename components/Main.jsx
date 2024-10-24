"use client"
import { Drawer } from "antd";
import {  useAppContext } from "./context/AppContext";
import Navbar from "./Navbar";
function Main({ children }) {
    const {openSidebar,setOpenSidebar} = useAppContext()
    return (
        
        <main>
            <Navbar />
            <section className="bg-slate-100">
            {children}
            </section>
            <Drawer
        title="Marafiki Coffee marketing"
        placement={"left"}
        closable={false}
        onClose={()=>setOpenSidebar(false)}
        open={openSidebar}
        key={"left"}
        className="!sm:hidden !relative !px-0"
      >
            Coming soon!

        </Drawer>
        </main>
        
    );
}

export default Main;
