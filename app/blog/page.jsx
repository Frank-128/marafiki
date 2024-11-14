import React from 'react';
import Image from 'next/image'

function Blog() {
  return (
    <div className="font-sans  max-w-3xl mx-auto p-6">
      {/* Welcome Section */}
      <header className="text-center " >
        <h1 className="text-4xl font-bold text-brown-800">Welcome to Marafiki Coffee Insights</h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover the latest updates and insights on Tanzania’s coffee industry and Marafiki Coffee Marketing’s journey.
        </p>
      </header>
      <Image src={"/blog-welcome.jpg"} className=' object-cover w-screen h-[70vh] ' width={100} height={100} alt={"blog image"} />

      {/* Blog Content */}
      <article className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">The Tanzania’s Coffee Story: 2023/24 Market Insights | Volume 1</h2>
        <p>
          Coffee stands as Tanzania’s second-largest traditional export, generating a substantial 24% of the
          country’s foreign exchange earnings, second only to tobacco (NBS, 2019). Not just an economic
          force, coffee is also a lifeline for 200,000 households, making it integral to the country’s social
          fabric. Recognizing this potential, the Tanzanian government classified coffee as a national
          strategic crop in 2018—a move that has sparked renewed focus, investment, and growth.
        </p>
        
        <h3 className="text-xl font-medium">Navigating a Volatile Market: The 2023/24 Coffee Season</h3>
        <p>
          In the global arena, coffee prices have faced intense volatility. However, Tanzanian farmers have
          experienced a welcome shift: 2023/24 has brought some of the highest prices seen in recent
          years. So, what’s behind these favorable trends?
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>The Coffee Rehabilitation Program:</strong> Tanzania initiated a national coffee
            rehabilitation program designed to improve both yield and quality. This program has led to
            increased productivity across smallholder farms, a cornerstone of Tanzanian coffee production.
          </li>
          <li>
            <strong>Growing Demand for Tanzanian Coffee:</strong> Global steady demand is on the rise,
            especially in key markets such as the EU, Japan, and the U.S., which fuels competitive prices and
            showcases the unique flavors of our high-altitude, volcanic soils.
          </li>
          <li>
            <strong>Brazil’s Climate Catastrophe:</strong> Severe weather in Brazil has impacted global coffee
            supplies, opening doors for Tanzanian coffee to gain traction on the world stage.
          </li>
          <li>
            <strong>The Auction System:</strong> Tanzania’s coffee auction system, launched in 2018, gives
            farmers more control over pricing, enabling a fairer marketplace for Tanzanian coffee.
          </li>
        </ul>

        <h3 className="text-xl font-medium">Tanzania’s Coffee Production: Record Growth</h3>
        <p>
          Tanzania’s 2023/24 coffee production is projected to grow by 21%, reaching 1.35 million bags in
          exports. Smallholder farmers, who produce roughly 90% of Tanzanian coffee, are at the heart of this
          success. Their dedication and resilience drive our mission at Marafiki Coffee Marketing to foster
          sustainable, long-term growth within the coffee supply chain.
        </p>

        <h3 className="text-xl font-medium">Tanzanian Coffee: A Growing Global Favorite</h3>
        <p>
          With global coffee lovers increasingly seeking out Tanzanian beans, exports are anticipated to
          rise by 13%. International buyers are drawn to the quality and character of Tanzanian coffee, and
          the domestic market is also expanding, particularly in Tanzania’s tourism hotspots.
        </p>

        <p>
          At Marafiki Coffee Marketing, we believe that every cup of coffee represents the shared journey
          from farm to table. We are committed to supporting gender equality, driving action against climate
          change, and promoting eco-friendly, innovative farming techniques. Through partnerships and
          adherence to EUDR Standards, we’re building a sustainable coffee industry for future generations.
        </p>

        <p>
          Here’s to a thriving coffee journey—one that’s rich, resilient, and brewed with purpose!
        </p>
      </article>
    </div>
  );
}

export default Blog;
