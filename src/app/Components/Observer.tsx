"use client"
import img13 from "../../../public/pictures/img13.png"
import img14 from "../../../public/pictures/img14.png"
import img15 from "../../../public/pictures/img15.png"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
function Observer() {
  const items = [
    {
      title: "Instant Access",
      description: "Open a global account in just a minutes.Conveniently receive and make payment anywhere you are.",
      imageUrl: img13
    },
    {
      title: "Push Notifications for Rate Changes",
      description: "Open a global account in just a minutes.Conveniently receive and make payment anywhere you are.",
      imageUrl: img14
    },
    {
      title: "Offline Transaction App",
      description: "Open a global account in just a minutes.Conveniently receive and make payment anywhere you are.",
      imageUrl: img15
    },
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setIndex(prev => {
          if (prev < items.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setIndex(prev => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [items.length]);

  return (
    <div className="mt-[36px] md:mt-[92px] w-[90vw] mx-auto">
      {/* sect1 */}
      <div className="text-center space-y-[16px] w-[100%] lg:w-[774px] mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[40px]">Simplified Global Finance Solutions</h1>
        <p className="text-[#565656] font-bold text-[14px] md:text-[19px] lg:text-[24px]">Manage your money effortlessly,<br className="hidden md:block" />
          anywhere in the world.
        </p>
      </div>
      {/* desktopview */}
      {/* sect2 */}
      <div className=" lg:mt-[52px] block lg:flex   lg:space-x-[129px] space-y-[32px] lg:space-y-[0px]  ">
        <div className="flex flex-col lg:flex-row justify-center items-start">
          {/* Left - Text List */}
          <div className="w-[90vw] lg:w-[45%] mx-auto space-y-[4px] lg:space-y-[14px] py-[0px] lg:py-[70px] h-[130px] md:h-[250px] lg:h-[190px]">
            {items.map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${i === index ? "border-l-3 md:border-l-8 border-blue-500 p-4 rounded" : "pl-2 lg:pl-4"}`}
              >
                <h1 className="font-bold text-[14px] md:text-[20px]">{item.title}</h1>
                <p className="text-[#565656] font-bold text-[12px] md:text-[16px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Image Display */}
          <div className="relative w-[90vw] md:w-[400px] mt-40 md:mt-30 lg:mt-0 mx-auto lg:w-[444px] h-[130px] md:h-[250px] lg:h-[190px]">
            {items.map((item, i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 lg:w-[400px] xl:w-[444px] xl:h-[452px] transition-opacity duration-500 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image
                  src={item.imageUrl}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Observer
