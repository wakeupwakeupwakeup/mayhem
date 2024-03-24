import {Header} from "../widgets/header"
import {Footer} from "../widgets/footer"

import {Fade, Slide} from "react-awesome-reveal";

const services = [
    {
        name: "Creative campaigns",
        description: "At Mayhem Media, we excel in crafting creative campaigns and partnering with influencers to achieve your marketing goals. With strategic planning based on thorough brand and audience analysis, we tailor unique strategies aligned with your values. Our expert team selects ideal influencers for your brand, ensuring a perfect fit and maximum impact. We create captivating content that tells your story, managing all aspects of the campaign seamlesslay. Plus, we provide detailed reports on campaign performance, using data to continually refine our strategies.",
        image: "/service_shape_1.png",
    },
    {
        name: "Talent employees",
        description: "At Mayhem Media, our success is fueled by the talent and dedication of our exceptional team. From creative directors to campaign managers, each member brings unique skills and experiences, contributing to our dynamic work environment. Our influencers relations managers forge strong partnerships, while strategy consultants devise tailored plans. Behind the scenes, content creators craft compelling narratives, and data analysts provide valuable insights. Join us as we redefine creativity and collaboration in the digital landscape.",
        image: "/service_shape_2.png",
    },
    {
        name: "Social media",
        description: "We specialize in leveraging social media's power to elevate brands, engage audiences, and foster connections. Our experts craft tailored strategies for platforms like Facebook, Instagram, Twitter, and LinkedIn, ensuring maximum impact. From content creation to community management and performance tracking, we offer comprehensive solutions to boost brand awareness, generate leads, and foster customer loyalty.",
        image: "/service_shape_3.png",
    }
]

const itemsCount = 12;
const logos = Array.from({ length: itemsCount }, (_, index) => index + 1)

function App() {
    return (
        <>
            <Header/>
            <main>
                <section className={"mb-36"}>
                    <h1>
                        <Slide direction={"down"} triggerOnce={true}>
                            <span className={"text-lg md:text-[64px] uppercase leading-none text-white"}>With great influencers</span><br/>
                        </Slide>
                        <Slide triggerOnce={true}>
                            <span className={"background-title"}>Great brands</span>
                        </Slide>

                    </h1>
                    <div className={"flex flex-col-reverse md:flex-row md:gap-32 justify-between relative h-[720px]"}>
                        <div className={"flex flex-col gap-12 w-full md:w-1/3 md:pt-52"}>
                            <p className={"leading-7 font-light"}>
                                Join Mayhem Media and unleash your creativity in shaping innovative campaigns that captivate audiences and drive meaningful results. Explore exciting opportunities to collaborate with top brands and influencers, and be part of a dynamic team that thrives on pushing boundaries in the digital marketing realm. Take your career to new heights with Mayhem Media – where creativity meets excellence.
                            </p>
                            <div className={"flex gap-4 md:gap-7 arrows"}>
                                <a href={"#contact"} className={"button-filled"}>To order</a>
                                <a href={"#contact"} className={"button"}>To market</a>
                            </div>
                        </div>
                        <div className={"relative max-w-full -top-[5%] -right-[0%] sm:top-[5%] md:right-[5%] md:-top-[25%]"}>
                            <img src={"/bland.png"}/>
                        </div>
                    </div>
                </section>
                <section>
                </section>
                <section id={"services"} className={"mb-36"}>
                    <Fade triggerOnce={true}>
                        <h2>Our services</h2>
                    </Fade>
                    <Slide cascade={true} triggerOnce={true}>
                        <div className={"flex flex-col md:flex-row gap-5 services  relative"}>
                            {
                                services.map((service, index) => (
                                    <div key={index}
                                         className={"md:flex flex-col justify-between md:w-1/3 pb-12 border border-[#505050] rounded"}>
                                        <Fade>

                                        </Fade>
                                        <div className={"relative min-h-[630px]"}>
                                            <div className={"relative overflow-hidden min-h-[280px] md:min-h-[800px]"}>
                                                <img
                                                    src={service.image}
                                                    className={
                                                        index == 0 ? "relative -top-[28%] -right-[5%] z-10" :
                                                            index == 1 ? "relative -top-[40%] -right-[5%] z-10" :
                                                                "relative -top-[32%] -right-[15%] z-10"
                                                    }
                                                />
                                            </div>
                                            <div
                                                className={"relative -top-[30%] left-0 flex flex-col justify-between px-4 md:px-6"}>
                                                <h3 className={"text-3xl md:text-5xl uppercase font-bold mb-3.5"}>{service.name}</h3>
                                                <p className={"font-medium leading-normal md:text-lg"}>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={"px-4 md:px-6 justify-self-end"}>
                                            <a className={"p-0 link text-2xl"}>Send a request</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Slide>

                </section>
                <section className={""}>
                    <Fade triggerOnce={true}>
                        <h2>Brands we've worked with</h2>
                    </Fade>
                    <div className={"flex justify-center"}>
                        <div className={"flex justify-center md:justify-evenly items-center max-w-[1360px] flex-wrap"}>
                            {
                                logos.map((index) => (
                                    <Fade cascade={true}>
                                        <div className={"p-3 w-[40vw] md:w-fit"}>
                                            <a href={index == 1 ? "https://accounts.binance.com/register?ref=585785333" : ""}>
                                                <img src={`/logos/${index}.svg`}/>
                                            </a>
                                        </div>
                                    </Fade>

                                ))
                            }
                        </div>
                    </div>
                </section>
                <section  className={"mb-72 relative"}>
                    <div className={"z-10 p-8 backdrop-blur rounded bg-black/10 "} id={"contact"}>
                        <div className={"flex flex-col"}>
                            <Fade triggerOnce={true}>
                                <h4 className={"uppercase text-8xl font-medium leading-1 md:text-9xl md:leading-[110px] mb-8 md:mb-20 gradient-text"}>Ready<br/> to
                                    work<br/> with us?
                                </h4>
                            </Fade>
                            <div className={"flex flex-col md:flex-row justify-between"}>
                                <div className={"leading-normal mb-32"}>
                                    <p className={"md:text-lg"}>Email us and let`s get started: </p>
                                    <a href={"mailto:business@digitypemedia.com"} className={"p-0 gradient-text text-lg md:text-2xl email" }>business@digitypemedia.com</a>
                                </div>
                                <div className={"px-10 py-5"}>
                                    <a className={"button-filled"} href={"mailto:business@digitypemedia.com"}>Send a request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"-z-10"}>
                        <img className={"absolute top-[55%] -right-[25%] md:-top-[30%] md:right-5 w-[60vw] md:w-auto"} src={"/service_shape_1.png"}/>
                        <img className={"absolute top-[20%] right-[40%] -z-10 w-[60vw] md:w-auto"} src={"/service_shape_2.png"}/>
                        <img className={"absolute -bottom-[20%] -left-[15%] md:left-[10%] md:-bottom-[45%] -z-10 w-[60vw] md:w-auto"}
                             src={"/service_shape_3.png"}/>
                    </div>

                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
