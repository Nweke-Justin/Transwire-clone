import Header from "../Components/Header"
import Image from "next/image"
import Footer from "../Components/Footer"
import vector1 from "../../../public/pictures/Vector1.png"
import vector2 from "../../../public/pictures/Vector2.png"
import vector3 from "../../../public/pictures/Vector3.png"
import img20 from "../../../public/pictures/img20.png"
import img24 from "../../../public/pictures/img24.png"
import img25 from "../../../public/pictures/img25.png"
function Page() {
  return (
    <div>
      <Header/>
      <div className="bg-[#F9FAFB] relative justify-between hidden lg:flex h-[60vh]">
                <div>
                    <Image
                        src={vector1}
                        alt=""
                        width={0}
                        height={0}
                        className="w-[47vw] h-[60vh]"
                    />
                </div>
                <div className="absolute w-[52vw] left-1/2 transform -translate-x-1/2  top-[148px]">
                    <h1 className="text-center font-semibold text-[40px] mt-[12px] mb-[16px]">Terms of Use</h1>
                    <p className="font-medium text-[16px] text-[#A5A5A5] text-center">Effective as from September 08, 2024</p>
                </div>
                <div>
                    <Image
                        src={vector2}
                        alt=""
                        width={0}
                        height={0}
                        className="w-[47vw] h-[60vh]"
                    />
                </div>

            </div>
            {/* mobile view of section 1 */}
            <div className="bg-[#F9FAFB] relative lg:hidden pt-[36px] pb-[20px]">
                <div>
                    <Image
                        src={vector3}
                        alt=""
                        width={0}
                        height={0}
                        className="w-[16.4vw] absolute top-0 " />
                </div>
                <h1 className="font-semibold text-[20px] text-center mb-[8px] "> Terms of Use</h1>
                <div className="mb-[20.75px] text-[12px] font-medium text-center text-[#A5A5A5] w-[297px] mx-auto">
                    Effective as from September 08, 2024
                </div>
            </div>
            <div className="w-[90vw] lg:w-[65.23vw] mx-auto space-y-[32px]">
              <div className="text-[12px] lg:text-[16px] text-[#565656]">
                Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis. Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
              </div>
                <div >
                    <h1 className="font-semibold text-[24px] lg:text-[28px] text-[#1E1E1E] mb-[16px]">
                        Terms of Service
                    </h1>
                    <p  className="text-[12px] lg:text-[16px] text-[#565656] mb-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                    <p className="text-[12px] lg:text-[16px] text-[#565656] ">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                </div>
                <div>
                    <h1 className="font-semibold text-[20px]  text-[#1E1E1E] mb-[16px]">
                        Lorem ipsum dolor sit
                    </h1>
                    <p className="text-[12px] lg:text-[16px] text-[#565656] mb-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                </div>
                <div>
                    <h1 className="font-semibold text-[20px]  text-[#1E1E1E] mb-[16px]">
                        Lorem ipsum dolor sit
                    </h1>
                    <p className="text-[12px] lg:text-[16px] text-[#565656] mb-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                </div>
                 <div className="mb-[74px] lg:mb-[275px]" >
                    <h1 className="font-semibold text-[24px] lg:text-[28px] text-[#1E1E1E] mb-[16px]">
                        Terms of Service
                    </h1>
                    <p  className="text-[12px] lg:text-[16px] text-[#565656] mb-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                    <p className="text-[12px] lg:text-[16px] text-[#565656] ">
                        Lorem ipsum dolor sit amet consectetur. Felis velit tortor adipiscing tincidunt nisl ipsum dui dui pharetra. Consequat suscipit nunc hac rhoncus purus vitae ut gravida arcu. Consectetur vitae posuere mattis ac lacus curabitur. Odio natoque nulla senectus risus turpis.
                    </p>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={img20}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[82px] h-[82px] lg:w-[100px] lg:h-[100px] bg-[#F3F4F9] mx-auto rounded-full p-4 absolute left-1/2 -translate-x-1/2 -top-10 lg:-top-12 mb-[-20px] mb-[0px]"
                />
                <div className="bg-white w-full mt-[36px] lg:mt-[92px] pb-[36px] lg:pb-[92px]">
                    <div className=" w-[90vw] lg:w-[79vw] mx-auto rounded-[20px] px-[21px] lg:rounded-[40px] bg-black text-white pt-[24px] lg:pt-[32px]">

                        <h1 className="font-semibold text-[20px] md:text-[30px] lg:text-[40px] my-[24px] md:my-[28px] lg:my-[32px] text-center">Download the Transwire App & <br className="hidden md:block" /> Get Started Now!</h1>
                        <div className="flex space-x-[25.6px] md:space-x-[32px] item-center justify-center pb-[44px] lg:pb-[80px]">
                            <Image
                                src={img24}
                                alt=""
                                width={0}
                                height={0}
                                className=" w-[108px] lg:w-[135px] h-[32px] lg: h-[40px] bg-white text-black rounded"
                            />
                            <Image
                                src={img25}
                                alt=""
                                width={0}
                                height={0}
                                className=" w-[108px] lg:w-[135px] h-[32px] lg: h-[40px] bg-white text-black rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default Page
