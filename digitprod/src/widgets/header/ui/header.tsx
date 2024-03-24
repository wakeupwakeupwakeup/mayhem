import { slide as Menu } from 'react-burger-menu'
import {useState} from "react";

const menu = [
    {
        name: 'Home',
        link: '#',
        icon: '../../assets/menu_icons/home-line 1.svg'
    },
    {
        name: 'Services',
        link: '#',
        icon: '../../assets/menu_icons/customer-service-2-line 1.svg'
    },
    {
        name: 'Clients',
        link: '#',
        icon: '../../assets/menu_icons/home-line 1.svg'
    },
    {
        name: 'Contact',
        link: '#',
        icon: '../../assets/menu_icons/home-line 1.svg'
    },
]
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <header className={"w-full"}>
            <div className={"flex items-center justify-between"}>
                <span className={"w-1/3 uppercase font-light text-white md:text-3xl"}>Mayhem Media</span>
                <nav className={isMenuOpen? "flex w-full md:flex justify-center gap-12" : "hidden w-full md:flex justify-center gap-12"}>
                    {menu.map((item, index) => (
                        <a className={"menu-link"} key={index} href={item.link}>{item.name}</a>
                    ))}
                </nav>
                <div className={"w-1/3 hidden md:inline-block text-end"}>
                    <a className={"button-filled rounded-md px-4 py-3"}>To order </a>
                </div>
                <div className={"md:hidden"}>
                    {
                        !isMenuOpen ? (
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <img src={"../../assets/menu.svg"}/>
                            </button>
                        ) : null
                    }
                </div>
            </div>
            {
                isMenuOpen ? (
                    <nav className={"absolute top-0 left-0 w-full flex bg-[#000711] flex-col z-30"}>
                        <div className={"flex flex-col p-6"}>
                            <div className={"flex justify-between mb-12"}>
                                <span>Mayhem media</span>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <img src={"../../assets/cross.svg"}/>
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
