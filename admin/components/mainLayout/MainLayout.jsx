"use client"
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function MainLayout({ children, panelType }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="bg-neutral-100 w-full h-[100vh]">
            <div className="h-full w-full justify-between flex items-start relative" >
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className={`w-full h-full`}>
                    <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className={`w-full h-full p-6`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}