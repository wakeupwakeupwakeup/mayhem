import {useState} from "react";

const menu = [
    {
        name: 'Home',
        link: '#',
        icon: '/menu_icons/home-line 1.svg'
    },
    {
        name: 'Services',
        link: '#services',
        icon: '/menu_icons/customer-service-2-line 1.svg'
    },
    {
        name: 'Contact',
        link: '#contact',
        icon: '/menu_icons/contacts-book-2-line 1.svg'
    },
]
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <header id={"home"} className={"max-w-[100vw]]"}>
            <div className={"flex items-center justify-between"}>
                <div className={"w-1/3"}>
                    <img src={"/logo.svg"} />
                </div>
                <nav className={isMenuOpen? "hidden w-full md:flex justify-center gap-12" : "hidden w-full md:flex justify-center gap-12"}>
                    {menu.map((item, index) => (
                        <a className={"menu-link"} key={index} href={item.link}>{item.name}</a>
                    ))}
                </nav>
                <div className={"w-1/3 hidden md:inline-block text-end"}>
                    <a className={"button-filled rounded-md px-4 py-3"} href={"#contact"}>To order </a>
                </div>
                <div className={"md:hidden"}>
                    {
                        !isMenuOpen ? (
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <img src={"/menu.svg"}/>
                            </button>
                        ) : null
                    }
                </div>
            </div>
            {
                isMenuOpen ? (
                    <nav className={"absolute top-0 left-0 w-full max-w-[100vw] flex bg-[#000711] flex-col z-30"}>
                        <div className={"flex flex-col p-6"}>
                            <div className={"flex justify-between mb-12"}>
                                <span className={"uppercase text-lg gradient-text"}>Mayhem media</span>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <img src={"/cross.svg"}/>
                                </button>
                            </div>
                            <div className={"flex flex-col items-end gap-3"}>
                                {menu.map((item, index) => (
                                    <div className={"flex items-center gap-2.5"}>
                                        <img src={item.icon} />
                                        <a className={"p-0 menu-link"} key={index} href={item.link}>{item.name}</a>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </nav>
                ) : null
            }
        </header>
    )
}
