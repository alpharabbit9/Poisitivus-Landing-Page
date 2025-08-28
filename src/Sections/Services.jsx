import React from "react";
import ServiceCard from "../Components/ServiceCard";


const services = [
    {
        title: "Search engine optimization",
        color: "bg-[#F3F3F3]",
        accent: "bg-[#B9FF66]",
        dark: false,
        textBg: "bg-[#B9FF66]",
       illustration: <></>,
    },
    {
        title: "Pay-per-click advertising",
        color: "bg-[#B9FF66]",
        accent: "bg-black",
        textBg: "bg-white",
        dark: false,
        illustration: <></>,
    },
    {
        title: "Social Media Marketing",
        color: "bg-black",
        accent: "bg-[#B9FF66]",
        textBg: "bg-white",
        dark: true,
        illustration: <></>,
    },
    {
        title: "Email Marketing",
        color: "bg-[#F3F3F3]",
        accent: "bg-[#B9FF66]",
        textBg: "bg-[#B9FF66]",
        dark: false,
        illustration: <></>,
    },
    {
        title: "Content Creation",
        color: "bg-[#B9FF66]",
        accent: "bg-black",
        textBg: "bg-white",
        dark: false,
        illustration: <></>,
    },
    {
        title: "Analytics and Tracking",
        color: "bg-black",
        accent: "bg-[#B9FF66]",
        textBg: "bg-[#B9FF66]",
        dark: true,
        illustration: <></>,
    },
];

const Services = () => {
    return (
        <section className="w-11/12 mx-auto mt-10 mb-16">
            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Services
                </h2>
                <p className="text-gray-700 max-w-2xl">
                    At our digital marketing agency, we offer a range of services to help
                    businesses grow and succeed online. These services include:
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
