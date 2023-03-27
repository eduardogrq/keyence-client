
import { useState } from "react";
import Navbar from "./AdminLayout/Navbar/Navbar";
import Sidebar from "./AdminLayout/Sidebar/Sidebar";


const AdminLayout = ({ children, title }) => {

    
    const [isHidden, setIsHidden] = useState(true)
    const [isVisibleOnLargeScreen, setIsVisibleOnLargeScreen] = useState(true);

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    const turnToNotVisible = () => {
        setIsVisibleOnLargeScreen(!isVisibleOnLargeScreen)
    }

    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <Sidebar
                turnToHidden={turnToHidden}
                isHidden={isHidden}
            />
            <div className="w-full col-span-12 bg-red-200">
                <Navbar
                    turnToHidden={turnToHidden}
                    turnToNotVisible={turnToNotVisible}
                />
                <div className="h-screen my-auto bg-gray-100" style={{ height: 'calc(100vh - 80px)' }}>
                    {title &&
                        <div className="pt-7 pl-7 text-2xl font-semibold">{title}</div>
                    }
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
