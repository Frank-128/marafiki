import ValuesCard from "@/components/ValuesCard";
import { values } from "@/constants/values";
import Image from "next/image";
import React from "react";

function AboutUs() {
    return (
        <div className="">
            <section className={'w-screen relative -mt-24 our-services-welcome text-center '}>
                <Image width={1920} height={600} className={"object-cover h-[30rem] w-screen"} alt={"coffee crop"}
                       src={'/coffee_people.jpg'}/>
                <div
                    className={"w-full h-[30rem] bg-black/50 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
                    <div className=" sm:text-3xl text-lg text-white font-semibold text-center">
                        <span
                            className={'text-bold text-yellowColor'}>Welcome to Marafiki Coffee Marketing!</span> ☕<br/> We
                        are passionate
                        about connecting you to the finest coffee, sourced directly from
                        farmers who put heart and soul into every bean.
                    </div>
                </div>

            </section>


            <div className="space-y-8 bg-deepGreenColor pt-24 ">
                <h1 className="font-black text-xl sm:text-4xl text-center text-yellowColor">Our Story</h1>
                <div className=" gap-y-4 grid sm:grid-cols-1 grid-cols-1 gap-3">

                    <div className="flex justify-between gap-2 text-white px-10 pb-10 flex-col">
                        <p>
                            In today&#39;s world, coffee is more than just a drink—it’s a ritual that fuels the
                            start of countless
                            mornings around the globe. In fact, statistics show that over 2 billion cups of coffee
                            are
                            consumed daily worldwide, underscoring the importance of this cherished commodity.
                            However,
                            behind this thriving coffee culture lies a complex supply chain, often challenged by
                            issues like
                            inconsistent supply and unequal compensation for producers.
                        </p>
                        <p>
                            At Marafiki Coffee Marketing, we recognized the need for change. We saw an opportunity
                            to
                            bridge the gap between Tanzanian coffee producers and international buyers in a way that
                            ensures both constant availability and fair compensation. Our
                            name, &quot;Marafiki,&quot; means &quot;friends&quot;
                            in Swahili, reflecting our commitment to fostering friendly, transparent, and equitable
                            partnerships between the two extremes involved.
                        </p>
                        <p>
                            We are dedicated to creating a coffee chain that benefits everyone—from the farmers who
                            cultivate and harvest each bean, to the buyers who appreciate quality coffee. By
                            facilitating
                            direct trade, promoting sustainability, and ensuring fair prices, we help producers
                            thrive while
                            keeping the global coffee supply flowing. Because we believe that great coffee makes
                            great days,
                            and everyone deserves at least one perfect cup to start theirs.
                        </p>
                        <p>
                            As we grew, so did our commitment to supporting
                            sustainable farming practices and uplifting the
                            communities that make our coffee possible. Today,
                            Marafiki Coffee Marketing is a trusted bridge
                            between small-scale farmers and coffee lovers
                            worldwide. We take pride in sharing these distinct,
                            carefully cultivated flavors, knowing that each sip
                            brings you closer to the people and lands that make
                            our coffee exceptional.
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-4 bg-greenColor pt-24 pb-10 ">
                <h1 className="font-black text-2xl text-center text-yellowColor">Our Values</h1>
                <div className="w-full grid grid-cols-1  place-items-center sm:grid-cols-3 sm:gap-x-6 py-5 gap-y-7">
                    {values.map((item, i) => (
                        <ValuesCard
                            link={item.link}
                            key={i}
                            title={item.title}
                            desc={item.desc}
                            variant={item.variant}
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-4 bg-deepGreenColor pt-24 ">
                <h1 className="font-black text-2xl text-center text-yellowColor">Partners</h1>
                <div className="px-10 md:px-20 text-white">
                    Global demand for coffee continues to grow, and so does the
                    call for ethical and sustainable practices. Marafiki Coffee
                    Marketing stands alongside some of the world&apos;s most
                    respected regulatory bodies—Fair Trade, Organic
                    Certification (EU &amp; America), JAS, and the Rainforest
                    Alliance—to ensure our coffee embodies these values. These
                    partnerships allow us to uplift Tanzanian farmers by
                    aligning their coffee with standards that prioritize fair
                    compensation, eco- friendly farming, and social
                    responsibility.
                    <br/>
                    <br/>
                    These partnerships enable us to support our producers in
                    achieving eco-friendly certifications and fair trade status,
                    which not only enhances the value of their coffee but also
                    promotes sustainable farming practices. By aligning with
                    these globally respected entities, Marafiki Coffee Marketing
                    strengthens its dedication to transparency, fair
                    compensation, and environmental stewardship across the
                    coffee supply chain. Together with our partners, we work
                    toward a shared mission: building a coffee trade that
                    benefits both people and the planet, from the farm to the
                    final cup.
                </div>
                <div className={'relative h-[20rem]  w-screen'}>
                    <Image src={'/coffee-plantation.jpg'} width={500} height={600}
                           className={'absolute  top-0 left-0 w-full h-full object-cover '} alt={'coffee plantation'}/>
                    <div className={'bg-black/60 absolute inset-0 w-full h-full sm:px-20 px-10  sm:py-10 py-4'}>
                        <h1 className={'text-white text-3xl max-sm:text-xl  font-black'}>
                            Our trusted Partners
                            </h1>
                        <div className=" flex  w-full justify-between">
                            <Image
                                alt="JAS"
                                src={"/JAS.png"}
                                width={200}
                                height={200}
                                className="object-contain w-12 h-12 sm:w-40 sm:h-40"
                            /><Image
                                alt="organc color"
                                src={"/organic_color.jpg"}
                                width={200}
                                height={200}
                                className="object-contain w-12 h-12 sm:w-40 sm:h-40"
                            />
                            <Image
                                alt="rainforest"
                                src={"/rainforest_alliance.png"}
                                width={200}
                                height={200}
                                className="object-contain w-12 h-12 sm:w-40 sm:h-40"
                            />
                            <Image
                                alt="fair trade"
                                src={"/fair-trade.png"}
                                width={200}
                                height={200}
                                className="object-contain w-12 h-12 sm:w-40 sm:h-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 bg-greenColor pt-24 pb-12">
                <h1 className="font-black sm:text-5xl text-3xl text-center text-yellowColor">Impact</h1>
                <div className="space-y-16">

                    {/* First Section */}
                    <div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className={"relative basis-1/2 w-[90vw] group sm:w-[30vw] cursor-pointer h-[40vh]"}>
                                <Image
                                    src={"/women-coffee.jpg"}
                                    alt={"coffee women"}
                                    width={200}
                                    height={200}
                                    className="sm:w-[45vw] w-[90vw] h-[50vh] basis-1/2 object-contain group-hover:opacity-20"
                                />
                                    <h1 className="font-bold absolute group-hover:font-black  bottom-5 place-content-center left-8 sm:text-xl text-lg text-yellowColor">
                                        Empowering Women &amp; Ensuring Inclusivity
                                    </h1>
                            </div>
                                <div className="basis-1/2 py-4 px-2">
                                    <p className="text-white">
                                        We believe that a sustainable coffee industry is one where everyone has a voice.
                                        Marafiki Coffee Marketing proudly champions gender equality by working closely
                                        with
                                        women producers, ensuring they have equal access to resources, decision-making,
                                        and
                                        market opportunities. More women have been enrolled in farmer&apos;s AMCOSes for
                                        a
                                        better representative workforce. We pioneer inclusivity across our supply chain,
                                        supporting diverse communities and providing a platform for all growers to
                                        thrive
                                        and contribute to the future of coffee.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Section */}
                        <div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div
                                    className={"relative basis-1/2 w-[90vw] group sm:w-[30vw] cursor-pointer h-[40vh]"}>
                                    <Image
                                        src={"/coffee-climate.jpg"}
                                        alt={"coffee climate resilient"}
                                        width={200}
                                        height={200}
                                        className="sm:w-[45vw] w-[90vw] h-[50vh] basis-1/2 object-contain group-hover:opacity-20"
                                    />
                                    <h1 className="font-bold absolute group-hover:font-black  bottom-5 place-content-center left-8 sm:text-xl text-lg text-yellowColor">
                                        Innovating for a Climate-Resilient Future
                                    </h1>
                                </div>
                                <div className="basis-1/2 py-4 px-2">
                                <p className="text-white">
                                            In the face of climate change, we know that every step toward eco-friendly
                                            farming
                                            counts. Through our agronomists, we implement innovative, eco-conscious
                                            farming
                                            practices that help our producers mitigate environmental impact. Emphasis to
                                            organic
                                            soil management, investing in methods that reduce our carbon footprint is
                                            our top
                                            priority for the better future of our environment and coffee.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Third Section */}
                            <div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div
                                        className={"relative basis-1/2 w-[90vw] group sm:w-[30vw] cursor-pointer h-[40vh]"}>
                                        <Image
                                            src={"/coffee-2.png"}
                                            alt={"coffee eudr"}
                                            width={200}
                                            height={200}
                                            className="sm:w-[45vw] w-[90vw] h-[50vh] basis-1/2 object-contain group-hover:opacity-20"
                                        />
                                        <h1 className="font-bold absolute group-hover:font-black  bottom-5 place-content-center left-8 sm:text-xl text-lg text-yellowColor">
                                            Adhering to EUDR Standards for Sustainable Trade
                                        </h1>

                                    </div>
                                        <div className="basis-1/2 py-4 px-2">
                                            <p className="text-white">
                                                Sustainability is not just an ideal; it&#39;s a commitment we live by.
                                                As we expand
                                                to international markets, we strongly emphasize our producers to fully
                                                adhere to the
                                                European Union Deforestation Regulation (EUDR) standards, ensuring our
                                                coffee is
                                                traceable and sustainably sourced. This strict compliance reassures our
                                                partners
                                                that Marafiki coffee is not only of the highest quality but also meets
                                                the standards
                                                required for a sustainable future. Our impact is woven into every aspect
                                                of our
                                                business, driving meaningful change and ensuring that our work benefits
                                                the people,
                                                places, and ecosystems behind every cup. We aim to build a coffee
                                                industry rooted in
                                                integrity, where each sip is a step toward a more inclusive,
                                                sustainable, and
                                                vibrant world.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>

            </div>
            );
            }

            export default AboutUs;
