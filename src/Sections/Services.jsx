import React from "react";
import ServiceCard from "../Components/ServiceCard";


const services = [
    {
        title: "Search engine optimization",
        color: "bg-[#F3F3F3]",
        accent: "bg-[#B9FF66]",
        dark: false,
        textBg: "bg-[#B9FF66]",
        illustration: (
            <svg
                width="210"
                height="170"
                viewBox="0 0 210 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect y="2" width="210" height="166.047" fill="url(#pattern0_1_624)" />
                <defs>
                    <pattern
                        id="pattern0_1_624"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            xlinkHref="#image0_1_624"
                            transform="matrix(0.00581395 0 0 0.00735294 -0.244186 -0.441176)"
                        />
                    </pattern>
                    <image
                        id="image0_1_624"
                        width="256"
                        height="256"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0K..."
                    />
                </defs>
            </svg>
        ),
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
