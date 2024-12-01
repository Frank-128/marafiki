"use client"
import { services } from "@/constants/services";
import Image from "next/image";
import React,{useEffect,useRef} from "react";
import { FaBullseye } from "react-icons/fa";
import gsap from 'gsap';

function Services() {
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const sectionRef = useRef(null); // For scoping animations in GSAP context

    useEffect(() => {
        // Use GSAP context for cleanup and scoping
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            // Animate the h2
            tl.fromTo(
                h2Ref.current,
                { y: 50, opacity: 0 }, // Initial state
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" } // Animation
            );
            // Animate the p
            tl.fromTo(
                pRef.current,
                { y: 50, opacity: 0 }, // Initial state
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5" // Overlap with the previous animation
            );
        }, sectionRef);

        // Cleanup GSAP context on component unmount
        return () => ctx.revert();
    }, []);

    return (
        <div className=" flex flex-col  ">

            <section className={'w-screen relative -mt-24 our-services-welcome text-center '}>
                <Image width={1920} height={600} className={"object-cover h-[30rem] w-screen"} alt={"coffee crop"}
                       src={'/coffee-climate.jpg'}/>
                <div ref={sectionRef}

                    className={"w-full h-[30rem] bg-black/50 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
                    <h2 ref={h2Ref} className="text-3xl opacity-0 font-black text-white sm:px-8 px-2 ">We believe a fresh cup of coffee is key to good morning, and a good day, we are just happy to be a part of that!</h2>

                    <p ref={pRef} className="sm:text-3xl opacity-0 text-xl text-yellowColor mt-4 font-bold">
                        Explore our services
                    </p>
                    </div>
            </section>
            <div className={'sm:px-6 px-2 bg-deepGreenColor py-24 space-y-10'}>
            {services.map((item, i) => (
                <div
                    key={i}
                    className={`flex flex-col sm:flex-row ${i % 2 === 0 && 'sm:flex-row-reverse'} gap-3 pb-3 border-b-[0.8px] border-gray-400`}
                    >
                    <div className={"relative basis-1/2 w-[90vw] group sm:w-[30vw] cursor-pointer h-[40vh]"}>

                        <Image
                            src={item.img}
                            alt="image data"
                             width={200}
                            height={200}
                            className="h-full w-full object-cover group-hover:opacity-20"
                        />
                            <h1 className="font-bold absolute group-hover:font-black  bottom-5 place-content-center left-1/4 sm:text-xl text-lg text-yellowColor">
                                {item.title}
                            </h1>
                    </div>
                        <div id={item.id} className={"flex flex-col basis-1/2 px-2 "}>
                            <p className={'text-[#d9d9d9]'}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
                <div className="space-y-5 bg-greenColor px-10 pt-24 pb-12">
                    <h1 className="font-black text-2xl text-yellowColor">Our Clients</h1>
                    <div className="text-lg text-[#d1d1d1]">
                        Our Commitment to Buyers We serve a broad range of
                        international buyers, including importers, specialty coffee
                        roasters, cafés, and coffee shops seeking premium Tanzanian
                        coffee. These buyers trust us to source high- quality,
                        traceable coffee that meets their specific demands for
                        flavor, sustainability, and quality.With this great trust,
                        it comes with great responsibility and we fully understand
                        the importance of fulfilling contract specifications and
                        maintaining consistent quality. We equip our buyers with;
                    </div>
                    <div className="flex flex-col my-2 gap-y-8 ">
                        <div className="flex gap-2 items-center">
                            <FaBullseye className="text-red-500"/>
                            <h2 className="text-base font-black text-white">
                                Regular updates and transparent communication
                                throughout the sourcing, processing, and shipping
                                stages.
                            </h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaBullseye className="text-red-500"/>
                            <h2 className="text-base font-black text-white">
                                Detailed quality control and grading reports to
                                ensure all contract requirements are met.
                            </h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaBullseye className="text-red-500"/>
                            <h2 className="text-base font-black text-white">
                                Efficient logistics and timely delivery to maintain
                                a smooth supply chain from Tanzania to your
                                destination.
                            </h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaBullseye className="text-red-500"/>
                            <h2 className="text-base font-black text-white">
                                Support in sourcing specialty coffees, sustainably
                                certified beans, and unique regional varieties to
                                suit buyer preferences.
                            </h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaBullseye className="text-red-500"/>
                            <h2 className="text-base font-black text-white">
                                Origin business trips to witness how everything is
                                done on site, know the producers and create stronger
                                business models.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="pt-24 pb-12 px-10 space-y-6 bg-deepGreenColor">
                    <h1 className="font-black text-yellowColor text-2xl">Our Sellers</h1>
                    <p className={'text-white'}>
                        Our Sellers bring the source/ origin of the coffee we value
                        their growth! we collaborate with a diverse range of sellers
                        including smallholder farmers, Agricultural Marketing
                        Cooperative Societies (AMCOS), and private coffee estates.
                    </p>
                    <div className={'max-sm:flex-col flex gap-2'}>

                    <p className={'text-[#d9d9d9] '}>
                        As their trusted partner we assist these sellers by
                        expanding their market access and connecting them directly
                        with international buyers. We offer support in improving
                        their post-harvest processes, securing certifications (such
                        as Fair Trade or Organic), and navigating the complexities
                        of selling to global markets. By enhancing the value of
                        their coffee and streamlining the path to market, we ensure
                        that producers gain better prices and wider exposure for
                        their products.
                    </p>
                    </div>
                    <div className="flex sm:flex-row flex-col w-full justify-around">
                        <Image
                            src="/coffee-regions.jpg"
                            width={1920}
                            height={1080}
                            quality={100}
                            alt="coffee regions"
                            className="w-full h-[25rem]  object-contain"
                        />
                        <Image
                            src="/coffee-distribution.jpg"
                            width={1920}
                            height={1080}
                            quality={100}
                            alt="coffee distribution"
                            className="w-full h-[25rem] object-contain "
                        />



                    </div>
                    <p className={'text-white '}>
                        Our commitment is to help sellers achieve sustainable growth
                        by providing market insights, ensuring quality control, and
                        advocating for responsible farming practices that protect
                        both their livelihood and the environment. We believe the
                        healthy of our coffee chain depends on both the farmer and
                        last consumer.
                    </p>
                    <Image src={"/company photos/35bf5322-7da1-4558-b5f0-831782f31492.JPG"} alt={"export details"}
                           width={1920}
                           height={1080}
                           quality={100}
                           className="w-full h-[25rem] object-contain"
                    />
                </div>
        </div>
);
}

export default Services;
