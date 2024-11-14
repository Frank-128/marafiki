"use client"
import MissionCard from "@/components/MissionCard";
import ServiceCard from "@/components/ServiceCard";
import ValuesCard from "@/components/ValuesCard";
import VissionCard from "@/components/VisionCard";
import { services } from "@/constants/services";
import { values } from "@/constants/values";
import Image from "next/image";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { useRef,useEffect } from "react";
import gsap from "gsap";

export default function Home() {
    const textRef = useRef(null);
    const spanRef = useRef(null);

  useEffect(() => {
    
    if (textRef.current) {
        
        gsap.fromTo(
            textRef.current,
            { opacity: 0 }, 
            { opacity: 1, duration: 4.5, ease: "power2.out" },
        );
    }
    const theSpan = spanRef.current;

    const animateIn = () => {
        gsap.fromTo(
            theSpan,
            { x: -200, opacity: 0 }, // Start from off-screen left and invisible
            { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // End position and fade-in
        );
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateIn();
                }
            });
        },
        { threshold: 0.5 } // Adjust threshold as needed
    );

    if (theSpan) observer.observe(theSpan);

    return () => {
        if (theSpan) observer.unobserve(theSpan);
    };
   
  }, []);


    return (
        <div className="flex flex-col gap-10 items-center z-0">
            <div className="relative -mt-24">
                <Image
                    className="h-[100vh] w-[100vw] object-cover relative"
                    src="/coffee-bg-2.jpg"
                    alt="coffee-seed"
                    width={1920}
                    height={1080}
                    quality={100}
                />
                <div className="absolute top-[50%] left-0  flex flex-col  py-4 gap-2 sm:px-36 px-4">
                    <span className="font-black text-3xl sm:text-7xl text-[#AACA33]">Marafiki Coffee Marketing</span>
                   
                    <span ref={spanRef} className="text-white opacity-90 sm:text-5xl font-black text-2xl ">
                    Connecting Tanzania&apos;s finest coffee to the world through a transparent, sustainable &amp; high
                    quality coffee value chain.
                    </span>
                    <div className="bg-redColor  cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl text-white px-2 py-1 w-32">
                        Discover More
                    </div>
                </div>

        
            </div>
            {/* section 2 */}
            <div className="mt-20" id="about-us">
                <div className="flex sm:px-20 px-2 sm:flex-row flex-col">
                    <div className="relative basis-3/5">
                        <Image
                            src="/coffee_plants.jpeg"
                            width={200}
                            height={200}
                            className="h-[50vh] sm:h-[75vh] sm:w-[50vw] w-[75vw] object-cover border-4 border-white"
                            alt="coffee-plants"
                       />
                        <Image
                            src="/community.jpeg"
                            width={200}
                            height={200}
                            className="h-[30vh] sm:w-[25vw] w-[40vw] absolute -bottom-5 sm:bottom-20 right-0 object-cover border-4 border-white"
                            alt="community"
                        />
                    </div>
                    <div className="px-4 basis-2/5 ">
                        <h1 className="text-redColor font-extrabold">About Us!</h1>

                        <p>
                        We’re a team of passionate coffee enthusiasts, deeply invested in the journey of Tanzanian coffee, from farm to cup. For us, coffee isn’t just a product; it’s a commitment to the future of the entire coffee value chain. One question drives us forward: What does the future hold for Tanzanian coffee?

 

The industry faces significant challenges, particularly when it comes to reliability and trust in international transactions. We understand the difficulties our buyers encounter in finding dependable partners and recognize the value our producers bring to this global market. That’s why we operate with a foundation of transparency, ensuring that every step of our business reflects fairness, quality, and a focus on sustainability.

 

Marafiki Coffee Marketing was built to bridge the gap between global buyers and Tanzanian producers. Our mission is about more than transactions; it’s about building long-term relationships that uplift communities and ensure a steady, reliable coffee supply for years to come. So whether you’re a small business or a large roaster looking for a consistent source of premium Tanzanian coffee, we’re here to connect, support, and grow together as friends (marafiki). Let&apos;s embark on this journey together
                        </p>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="py-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10">
                

                <MissionCard/>
                <VissionCard />

            </div>
            <div id="values">
                <h1 className="font-black text-2xl text-center">Our Values</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 py-5 gap-y-7">
                    { values.map((item,i)=><ValuesCard link={item.link} readMore={true} key={i} title={item.title} desc={item.desc.substring(0,200)+"..."} variant={item.variant} />)}
                
                </div>

             </div>  
              {/* Our services */}
              <div id="services" className="py-4 ">
                <div className="font-black text-xl text-black text-center w-full py-2">Our Services</div>
                    
                    <div className="sm:grid-cols-3 grid-cols-1 grid gap-8">
                    {
                        services.map((item,i)=><ServiceCard key={i} title={item.title} id={item.id} desc={item.description.substring(0,70)+"..."} icon={item.icon} />)
                    }
                    
                    </div>    


              </div>

        </div>
    );
}
