export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div>
                <div className={"px-6 py-12"}>
                    <div className={"flex justify-between md:items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"uppercase font-light text-2xl text-white"}>Mayhem Media</span>
                            <div className={"socials"}>
                                <span className={"uppercase font-light text-xl"}>Telegram</span>
                            </div>
                        </div>
                        <nav className={"flex flex-col md:flex-row gap-6 items-end md:flex md:gap-12"}>
                            <a href={"#home"}>Home</a>
                            <a href={"#services"}>Services</a>
                            <a href={"#contact"}>Contact</a>
                        </nav>
                    </div>
                </div>
                <div className={"footer-gradient text-center py-6"}>
                    <span className={"uppercase text-black font-medium"}>{year} by digitype. All rights reserved!</span>
                </div>
            </div>
        </footer>
    )
}