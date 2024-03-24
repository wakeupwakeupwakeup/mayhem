import {Header} from "../widgets/header"
import {Footer} from "../widgets/footer"
import {useEffect, useState} from "react";

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

const people = [
    {
        name: "John Doe",
        image: "/people_1.png",
        opacity: 100,
        position: "top-[28%] left-[26%]"
    },
    {
        name: "John Doe",
        image: "/people_2.png",
        opacity: 25,
        position: "top-[40%] left-[72%]"
    },
    {
        name: "John Doe",
        image: "/people_3.png",
        opacity: 100,
        position: "top-[0%] left-[45%]"
    },
    {
        name: "John Doe",
        image: "/people_4.png",
        opacity: 100,
        position: "top-[64%] left-[32%]"
    },
    {
        name: "John Doe",
        image: "/people_5.png",
        opacity: 0,
        position: "top-[55%] left-[15%]"
    },
    {
        name: "John Doe",
        image: "/people_6.png",
        opacity: 0,
        position: "top-[25%] left-[5%]"
    },
    {
        name: "John Doe",
        image: "/people_7.png",
        opacity: 0,
        position: "top-[5%] left-[15%]"
    },
    {
        name: "John Doe",
        image: "/people_8.png",
        opacity: 0,
        position: "top-[62%] right-[16%]"
    },
    {
        name: "John Doe",
        image: "/people_9.png",
        opacity: 0,
        position: "top-[16%] right-[34%]"
    },
    {
        name: "John Doe",
        image: "/people_10.png",
        opacity: 0,
        position: "top-[42%] right-[34%]"
    },
    {
        name: "John Doe",
        image: "/people_11.png",
        opacity: 0,
        position: "top-[75%] right-[30%]"
    },
    {
        name: "John Doe",
        image: "/people_12.png",
        opacity: 0,
        position: "top-[6%] right-[16%]"
    },
]

function App() {
    const [imagePaths, setImagePaths] = useState<string[]>([])

    useEffect(() => {
        const fetchImagePaths = async () => {
            const imageModules = import.meta.glob('../../assets/logos/*.svg')
            const paths = Object.keys(imageModules)
            setImagePaths(paths)
            console.log(paths)
        }

        fetchImagePaths()
    }, [])

    return (
        <>
            <Header/>
            <main>
                <section className={"mb-36"}>
                    <h1>
                        <span className={"text-lg md:text-[64px] uppercase leading-none text-white"}>With great influencers</span><br/>
                        <span className={"background-title"}>Great brands</span>
                    </h1>
                    <div className={"flex flex-col-reverse md:flex-row md:gap-32 justify-between relative h-[720px]"}>
                        <div className={"flex flex-col gap-12 w-full md:w-1/3 md:pt-52"}>
                            <p className={"leading-7 font-light"}>
                                Join Mayhem Media and unleash your creativity in shaping innovative campaigns that captivate audiences and drive meaningful results. Explore exciting opportunities to collaborate with top brands and influencers, and be part of a dynamic team that thrives on pushing boundaries in the digital marketing realm. Take your career to new heights with Mayhem Media – where creativity meets excellence.
                            </p>
                            <div className={"flex justify-between gap-4 md:gap-7"}>
                                <a className={"button-filled"}>To order</a>
                                <a className={"button"}>To market</a>
                            </div>
                        </div>
                        <div className={"relative max-w-full -top-[5%] -right-[0%] sm:top-[5%] md:right-[5%] md:-top-[25%]"}>
                            <img src={"/bland.png"}/>
                        </div>
                    </div>
                </section>
                <section>
                </section>
                <section className={"mb-36"}>
                    <h2>Our services</h2>
                    <div className={"flex flex-col md:flex-row gap-5 services  relative"}>
                        {
                            services.map((service, index) => (
                                <div key={index}
                                     className={"md:flex flex-col justify-between md:w-1/3 pb-12 border border-[#505050] rounded"}>
                                    <div className={"relative min-h-[630px]"}>
                                        <div className={"relative overflow-hidden h-[480px]"}>
                                            <img
                                                src={service.image}
                                                className={
                                                    index == 0 ? "relative -top-[28%] -right-[5%] z-10" :
                                                        index == 1 ? "relative -top-[40%] -right-[5%] z-10" :
                                                            "relative -top-[32%] -right-[15%] z-10"
                                                }
                                            />
                                        </div>
                                        <div className={"relative -top-[30%] left-0 flex flex-col justify-between px-4 md:px-6"}>
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
                </section>
                <section className={"mb-36 min-h-[785px]"}>
                    <div className={"relative circles flex flex-col justify-center min-h-[785px]"}>
                        <div className={"text-center "}>
                            <h2 className={"mb-0"}>Our<br/> talents</h2>
                            <p>
                                Here`s some of our awesome <br/>
                                power rangers for the big stuff
                            </p>
                        </div>
                        {
                            people.map((item, index) => (
                                <div className={`absolute flex flex-col items-center ${item.position} `}>
                                <img className={`mb-2.5 opacity-${item.opacity} w-[5vw]`} src={`people//people_${index+1}.png`}/>
                                    <span className={`opacity-${item.opacity}`}>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className={""}>
                    <h2>Brands we've worked with</h2>
                    <div className={"flex justify-center"}>
                        <div className={"flex justify-center md:justify-evenly items-center max-w-[1360px] flex-wrap"}>
                            {
                                imagePaths.map((logoPath) => (
                                    <div className={"p-3 w-[40vw] md:w-fit"}>
                                        <img src={logoPath}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className={"mb-72 relative"}>
                    <div className={"z-10 p-8 backdrop-blur rounded bg-black/10 "}>
                        <div className={"flex flex-col"}>
                            <h4 className={"uppercase text-8xl font-medium leading-1 md:text-9xl md:leading-[110px] mb-8 md:mb-20 gradient-text"}>Ready<br/> to
                                work<br/> with us?</h4>
                            <div className={"flex flex-col md:flex-row justify-between"}>
                                <div className={"leading-normal mb-32"}>
                                    <p className={"md:text-lg"}>Email us and let`s get started: </p>
                                    <a className={"p-0 gradient-text text-lg md:text-2xl email"}>business@digitypemedia.com</a>
                                </div>
                                <div className={"px-10 py-5"}>
                                    <a className={"button-filled"}>Send a request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"-z-10"}>
                        <img className={"absolute -top-[30%] right-5"} src={"/service_shape_1.png"}/>
                        <img className={"absolute top-[20%] right-[40%] -z-10"} src={"/service_shape_2.png"}/>
                        <img className={"absolute -bottom-32 left-[45%] w-[240px] -z-10"}
                             src={"/service_shape_3.png"}/>
                    </div>

                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
