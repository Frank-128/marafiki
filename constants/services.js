import { FaHandshake, FaSeedling, FaCheckDouble, FaTruck, FaFileContract, FaPlaneDeparture } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    title: "Direct Sourcing: Connecting Farmers with Global Opportunities",
    description: "Our commitment begins with building strong relationships with farmers across Tanzania’s rich coffee-growing regions. We work directly with both small-scale and large-scale producers, ensuring that their coffee meets the specific requirements of international buyers. Through ongoing communication and collaboration, we ensure that the coffee we source aligns with buyers' desired quality standards, flavor profiles, and certifications. This personalized approach helps elevate the value of Tanzanian coffee while giving buyers confidence that their specifications are met at the source.",
    icon: FaHandshake ,
    img:"/direct_sourcing.jpg"
  },
  {
    id: 2,
    title: "Sustainability Support: Growing Coffee Responsibly",
    description: "In alignment with the growing demand for ethically sourced products, MaRafiki Coffee Marketing supports farmers in adopting sustainable farming practices. We guide our producers in using eco-friendly methods such as organic farming, water conservation, and agroforestry, helping in the overall quality and marketability of their coffee. For buyers with specific sustainability requirements, such as Fair Trade or Organic certifications, we ensure that these standards are fully met and documented. Most of our producers are certified for FTO, Rain Forest Alliance, and some are currently pursuing JAS certification.",
    icon: FaSeedling,
    img:"/community.jpeg" 
  },
  {
    id: 3,
    title: "Quality Control: Ensuring Precision and Consistency",
    description: "From farm to cup, we take responsibility for maintaining strict quality control. We ensure that all coffee is processed according to the highest standards, with detailed checks at every stage. Before any coffee bean is shipped, our expert quality controllers rigorously oversee the process. Pre-loading samples are randomly drawn from multiple points around the stack, ensuring a thorough and representative sampling. During the loading phase, we extract samples from 100% of the bags, eliminating any chance of sampling errors. Each sample undergoes comprehensive analysis to ensure it meets the specified quality. To further safeguard against discrepancies or claims, we retain these samples for three months, offering our buyers full traceability. Upon request, we can seal the samples, underscoring our commitment to transparency and excellence. This rigorous approach guarantees consistency in flavor, quality, and appearance, ensuring buyers receive the product as specified.",
    icon: FaCheckDouble ,
    img:"/coffee_measurement.jpg"

  },
  {
    id: 4,
    title: "Export & Logistics: Flawless Execution, Global Delivery",
    description: "After ensuring the coffee is processed and ready for export, we handle every aspect of the logistics chain with a focus on meeting all contractual obligations. We work closely with shipping partners to ensure coffee is delivered on time and in agreed-upon quantities and packaging formats. Recognizing the potential for high traffic in logistics, especially at year-end, we closely monitor the safety of our client’s coffee. With our logistics partners, we handle all documentation, including export permits, customs clearance, and shipping manifests, providing detailed shipping schedules to keep our buyers informed. By managing logistics with precision, we guarantee that all terms—whether related to timing, packaging, or shipping conditions—are fulfilled as specified.",
    icon: FaTruck ,
    img:"/logistics.jpg"
  },
  {
    id: 5,
    title: "Contract Fulfillment & Market Development: Meeting Every Buyer’s Expectations",
    description: "We fully understand that every contract is an opportunity to create a win-win situation. With deep knowledge of the coffee industry, we believe that effective communication and clear understanding of trade terms are key to successful negotiations. We support both producers and buyers by negotiating fair prices based on data-driven insights, ensuring that both parties benefit from a transparent and balanced agreement. We go beyond sourcing and shipping coffee—we ensure every aspect of the contract is upheld. From ensuring the coffee meets agreed-upon grades to fulfilling volume commitments and delivering within specified timelines, we diligently protect our international buyers’ interests. Offering regular updates, quality assurance reports, and open communication throughout the process has helped us fulfill most of our client contracts smoothly. Our hands-on management guarantees that all contractual obligations are met from initial agreement to final delivery.",
    icon: FaFileContract,
    img:"/contract.jpg" 
  },
  {
    id: 6,
    title: "Origin Business Trips",
    description: "To build stronger relationships and gain firsthand knowledge of the coffee supply chain, we organize origin business trips for our international buyers. We arrange guided trips to coffee farms, cooperatives, and estates in Tanzania, allowing buyers to meet producers and witness the coffee-growing process up close. This helps buyers understand the origins of the coffee they purchase and fosters deeper connections with producers. During these trips, buyers can participate in cupping sessions, visit processing facilities, and learn more about sustainable farming practices we promote. Each trip is tailored to meet the specific interests and business needs of our clients, ensuring a valuable and informative experience.",
    icon: FaPlaneDeparture,
    img:"/bussiness-trip.jpg" 
  }
];
