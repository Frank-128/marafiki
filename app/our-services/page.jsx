import { services } from "@/constants/services";
import Image from "next/image";
import React from "react";
import { FaBullseye } from "react-icons/fa";

function Services() {
    return (
        <div className="sm:px-20 px-10 flex flex-col sm:gap-6 gap-3 sm:py-14 py-6">
            <h1 className="font-bold text-center sm:text-xl text-lg">
                Our Services
            </h1>
            {services.map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-3 pb-3 border-b-[0.8px] border-gray-400"
                >
                    <Image
                        src={item.img}
                        alt="image data"
                        width={200}
                        height={200}
                        className="basis-1/2 w-[90vw] sm:w-[30vw] h-[40vh] object-cover"
                    />
                    <div id={item.id} className="flex flex-col basis-1/2 px-2">
                        <h1 className="font-black sm:text-xl text-lg">
                            {item.title}
                        </h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Our Clients</h1>
                <div className="text-base">
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
                        <FaBullseye className="text-red-500" />
                        <h2 className="text-base font-medium">
                            Regular updates and transparent communication
                            throughout the sourcing, processing, and shipping
                            stages.
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBullseye className="text-red-500" />
                        <h2 className="text-base font-medium">
                            Detailed quality control and grading reports to
                            ensure all contract requirements are met.
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBullseye className="text-red-500" />
                        <h2 className="text-base font-medium">
                            Efficient logistics and timely delivery to maintain
                            a smooth supply chain from Tanzania to your
                            destination.
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBullseye className="text-red-500" />
                        <h2 className="text-base font-medium">
                            Support in sourcing specialty coffees, sustainably
                            certified beans, and unique regional varieties to
                            suit buyer preferences.
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBullseye className="text-red-500" />
                        <h2 className="text-base font-medium">
                            Origin business trips to witness how everything is
                            done on site, know the producers and create stronger
                            business models.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="space-y-12">
                <h1 className="font-bold">Our Sellers</h1>
                <p>
                    Our Sellers bring the source/ origin of the coffee we value
                    their growth! we collaborate with a diverse range of sellers
                    including smallholder farmers, Agricultural Marketing
                    Cooperative Societies (AMCOS), and private coffee estates.
                </p>
                <p>
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
                <div className="flex sm:flex-row flex-col w-full justify-around"> 

                
                <Image
                    src="/coffee-regions.jpg"
                    width={1920} 
                    height={1080} 
                    quality={100}
                    alt="coffee regions"
                    className="w-full h-[65vh] object-contain"
                />
                <Image
                    src="/coffee-distribution.jpg"
                    width={1920}
                    height={1080}
                    quality={100}
                    alt="coffee distribution"
                    className="w-full h-[65vh] object-contain "
                />
                </div>
                <p>
                    Our commitment is to help sellers achieve sustainable growth
                    by providing market insights, ensuring quality control, and
                    advocating for responsible farming practices that protect
                    both their livelihood and the environment. We believe the
                    healthy of our coffee chain depends on both the farmer and
                    last consumer.
                </p>
            </div>
        </div>
    );
}

export default Services;
