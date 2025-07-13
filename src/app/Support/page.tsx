import Header from "../Components/Header"
import Image from "next/image"
import vector1 from "../../../public/pictures/Vector1.png"
import vector2 from "../../../public/pictures/Vector2.png"
import vector3 from "../../../public/pictures/Vector3.png"
import img29 from "../../../public/pictures/img29.png"
import img24 from "../../../public/pictures/img24.png"
import img25 from "../../../public/pictures/img25.png"
import img20 from "../../../public/pictures/img20.png"
import Footer from "../Components/Footer"
import Footerc from "../Components/Footerc"
function page() {
    return (
        <div >
            <Header />
            {/* desktop */}
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
                    <div className=" bg-[#513DEB33] text-[#0052CC] rounded-full text-center w-[96px] mx-auto">Reach Us</div>
                    <h1 className="text-center font-semibold text-[40px] mt-[12px] mb-[16px]">Contact Us</h1>
                    <p className="font-medium text-[16px] text-[#A5A5A5] text-center">Your questions and feedback are important to us. Reach out to us through any of the channels listed below, and we'll make sure to get back to you as soon as possible.</p>
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
                <p className="w-[50.5px] md:w-[96px] text-[6px] md:text-[12px] mx-auto text-center bg-[#513DEB33] text-[#0052CC] rounded-full mb-[5.75px]"> Reach us</p>
                <h1 className="font-semibold text-[20px] text-center mb-[8px] ">Contact us</h1>
                <div className="mb-[20.75px] text-[12px] font-medium text-center text-[#A5A5A5] w-[297px] mx-auto">
                    Your questions and feedback are important to us. Reach out to us through any of the channels listed below, and we'll make sure to get back to you as soon as possible.
                </div>
            </div>
            <div className="block lg:flex bg-[#FFFFFF]  lg:w-[71.16vw] mx-auto py-[33px] lg:py-[72px] lg:space-x-[64px]">
                <div className="bg-[#0052CC] text-[#FFFFFF] w-[90vw] lg:w-[25vw] mx-auto rounded-[20px] lg:space-x-[94px] lg:h-[440px]">
                    <div className=" pt-[30px] md:pt-[40px] pl-[30px] md:pl-[40px] pb-[68px] pr-[83px] mb-[40px] lg:mb-[0px] ">
                        <h1 className="mb-[4px] font-semibold text-[15px] md:text-[20px]">Headquarters</h1>
                        <p className="mb-[24px] font-medium text-[12px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur.</p>
                        <h1 className="mb-[4px] font-semibold text-[15px] md:text-[20px]">Send Us and email</h1>
                        <p className="mb-[24px] font-medium text-[12px] md:text-[16px]">support@transwire.com</p>
                        <h1 className="mb-[4px] font-semibold text-[15px] md:text-[20px]">Call Us</h1>
                        <p className="mb-[24px] font-medium text-[12px] md:text-[16px]">+2348100000000</p>
                        <h1 className="mb-[4px] font-semibold text-[12px] md:text-[20px]">Visit our Social</h1>
                        <Image
                            src={img29}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[168px] md:w-[224px] h-[24px] md:h-[32px]"
                        />
                    </div>
                </div>
                <div className="lg:rounded-lg border-t border-b lg:border border-[#A5A5A580] w-full lg:w-[55%] mb-[59px] lg:mb-[72px]">
                    <div className="w-[90%] mx-auto my-[28px] lg:my-[44px]">
                        <h1 className="font-semibold text-[16px] md:text-[20px] mb-[15px] md:mb-[24px]">Please complete this form to <br /> send us a message.</h1>
                        <div className="block md:flex md:gap-[6%] mb-[15px]">
                            <div className=" md:w-[47%]">
                                <h1 className="font-bold text-[12px] mb-[10px]">First name</h1>
                                <input type="text" className="w-full h-[51px] border border-[#A5A5A580] rounded-lg mb-[15px] md:mb-[24px]" />
                            </div>
                            <div className=" space-x-[20px] md:w-[47%] ">
                                <h1 className="font-bold text-[12px] mb-[10px]">Last name</h1>
                                <input type="text" className="h-[51px] w-full border border-[#A5A5A580] rounded-lg mb-[15px] md:mb-[24px]" />
                            </div>
                        </div>
                        <div className="block md:flex md:gap-[6%] mb-[15px]">
                            <div className=" md:w-[47%] ">
                                <h1 className="font-bold text-[12px] mb-[10px]">Phone number</h1>
                                <input type="text" className="w-full h-[51px] border border-[#A5A5A580] rounded-lg mb-[15px] md:mb-[24px]" />
                            </div>
                            <div className=" space-x-[20px] md:w-[47%]">
                                <h1 className="font-bold text-[12px] mb-[10px]">Email   </h1>
                                <input type="text" className="h-[51px] w-full border border-[#A5A5A580] rounded-lg mb-[15px] md:mb-[24px]" />
                            </div>
                        </div>
                        <div className="mb-[34px]">
                            <h1 className="font-bold text-[12px] mb-[10px]">Message</h1>
                            <input type="text" className="w-full h-[119px] border border-[#A5A5A580] rounded-[8px]" />
                        </div>
                        <button className="bg-[#0052CC] text-white py-[14px] md:py-[19px] px-[27px] md:px-[44px] text-white rounded-full">Send message</button>
                    </div>
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
            <div className="lg:bg-[#05060F] lg:text-white">
            <Footerc/>
            </div>
        </div>
    )
}

export default page
