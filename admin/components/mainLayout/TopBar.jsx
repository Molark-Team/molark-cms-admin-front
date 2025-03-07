import { useState } from "react";

export default function TopBar({ sidebarOpen, setSidebarOpen }) {
    const [notification, setNotification] = useState(false);
    return (
        <div className="w-full h-16 border-b border-neutral-200 flex justify-between items-center p-8">
            <div>
                <i class="fi fi-rr-bars-staggered text-2xl cursor-pointer text-primary scale-x-[-1]" onClick={() => setSidebarOpen(!sidebarOpen)}></i>
            </div>
            <div className="flex items-center gap-4">
                <i class={`fi fi-rs-bell text-2xl cursor-pointer text-primary relative ${notification ? "text-error after:absolute after:top-0 after:left-0 after:w-2 after:h-2 after:bg-error after:rounded-full" : ""} `} onClick={() => setNotification(!notification)}></i>
                <i class="fi fi-rr-circle-user text-2xl cursor-pointer text-primary"></i>
            </div>
        </div>
    );
}
