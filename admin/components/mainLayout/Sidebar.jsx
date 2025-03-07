import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const pathname = usePathname();
    // const router = useRouter();
    // const toggleNav = useGSAP();
    const links = [
        {
            icon: "fi fi-rr-file",
            text: "صفحات",
            href: "/pages"
        },
        {
            icon: "fi fi-rr-user-headset",
            text: "خدمات",
            href: "/services"
        },
        {
            icon: "fi fi-rr-skill-alt",
            text: "مهارت‌ها",
            href: "/skills"
        },
        {
            icon: "fi fi-rr-workflow-alt",
            text: "پروژه‌ها",
            href: "/projects"
        },

    ]
    return (
        <aside
            className={`border-l flex flex-col border-neutral-200 h-full transition-all duration-300 ${sidebarOpen ? "!w-[300px]" : "!w-0"}`}
        >
            <div
                className={`h-16 border-b border-neutral-200 p-8 transition-all duration-300  ${sidebarOpen ? "!flex" : "!hidden"}`}
            >
            </div>
            <div className={`flex flex-col p-6 gap-4 w-full min-h-[100vh] overflow-x-visible transition-all duration-300 ${sidebarOpen ? "!flex" : "!hidden"}`}>
                <ul
                    className={`flex flex-col p-6 gap-4 w-full overflow-x-visible`}
                >
                    {links.map((e, i) => (
                        <li>
                            <Link
                                key={i}
                                href={e.href}
                                className={`flex items-center gap-2 text-base xl:text-lg`}
                            >
                                <span className={`flex justify-center items-center transition-all duration-300 gap-2 ${pathname === e.href ? "text-primary" : "text-dark"}`}>
                                    <i
                                        className={`w-6 h-6 text-primary ${e.icon
                                            } flex items-center justify-center rounded-md lg:justify-center`}
                                    ></i>
                                    <span className={`text transition-all duration-300 ${pathname === e.href ? "text-primary" : "text-dark hover:text-primary"}`}>{e.text}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    className={`self-end gap-4 justify-center px-4 mx-auto mb-4 py-2 text-primary text-base xl:text-lg transition-all duration-300`}
                >
                    <div
                        className="flex gap-2 cursor-pointer text-neutral-400 hover:text-danger"
                        onClick={() => {
                            Cookies.remove("token");
                            Cookies.remove("refreshToken");
                            router.push("/login");
                        }}
                    >
                        <i className="fi fi-rr-exit flex items-center"></i>
                        <span>خروج</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
