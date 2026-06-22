
import {

  FaGem,
  FaGlobeAsia,
  FaShieldAlt,
  FaWatchmanMonitoring,
} from "react-icons/fa";

export default function StatsBar() {
  const stats = [
    {
      icon: <FaGem className="text-4xl text-[#C9A24E]" />,
      value: "50+",
      label: "Luxury Models",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-[#C9A24E]" />,
      value: "120+",
      label: "Countries",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#C9A24E]" />,
      value: "10 Years",
      label: "Warranty",
    },
    {
      icon: <FaWatchmanMonitoring className="text-4xl text-[#C9A24E]" />,
      value: "Swiss",
      label: "Movement",
    },
  ];

  return (
    <section className="border-y border-[#C9A24E]/30 py-6 bg-mist-950">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-6 px-4 ${
              index !== stats.length - 1
                ? "md:border-r border-[#C9A24E]/30"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="w-16 h-16  flex items-center justify-center ">
              {item.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl font-normal text-white uppercase">
              {item.value}
            </h3>

            {/* Label */}
            <p className=" text-sm uppercase  text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}