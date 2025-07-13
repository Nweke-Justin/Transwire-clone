import Header from "../Components/Header"
import Image from "next/image"
import img20 from "../../../public/pictures/img20.png"
import img24 from "../../../public/pictures/img24.png"
import img25 from "../../../public/pictures/img25.png"
import img26 from "../../../public/pictures/img26.png"
import img27 from "../../../public/pictures/img27.png"
import img28 from "../../../public/pictures/img28.png"
import Footer from "../Components/Footer"
function page() {
    return (
        <div className="bg-[#F3F3F3] lg:bg-[#FFFFFF]">
            <Header />
            <div className="pt-[36px] lg:pt-[152px] w-[91vw] lg:w-[63vw] mx-auto">
                <p className="text-center font-semibold text-[10px] md:text-[15px] lg:text-[20px] text-[#0052CC] leading-[32px]">About us  </p>
                <p className="font-semibold text-[20px] lg:text-[48px] text-center mt-[8px] mb-[16px] ">
                    Creating a Unique Global financial Inclusion for all.
                </p>
                <p className="font-medium text-[12px] lg:text-[24px] text-center text-[#565656]">
                    Unique value proposition—offering instant, secure, and affordable currency exchange across Africa.
                </p>
            </div>
            <div className=" mt-[36px] lg:mt-[60px]">
                <Image
                    src={img26}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[78vw] mx-auto hidden lg:block"
                />
                <Image
                    src={img27}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[91vw] mx-auto  lg:hidden" />
            </div>
            <div className="w-full mt-[72.5px] lg:mt-[184px]">
                <div className="block lg:flex w-[91vw] lg:w-[78vw] mx-auto gap-[49.5px]">
                    <div className="w-[91vw] lg:w-[45.9vw] mx-auto">
                        <div className="mb-[40px]">
                            <h1 className="font-semibold text-[20px] md:text-[35px] text-[#1E1E1E] mb-[16px] text-center lg:text-left">Invite friends and earn rewards</h1>
                            <h4 className="font-medium text-[12px] lg:text-[24px] text-center lg:text-left">Invite friends and earn rewards when they sign up using your referral code.
                            </h4>
                        </div>
                        <div className=" block md:flex md:space-x-[32px] mb-[16px] lg:mb-[12px]">
                            <div><h1 className="font-medium text-[16px] lg:text-[20px]">Our Mission</h1></div>
                            <div><p className="font-medium text-[12px] lg:text-[16px] text-[#A5A5A5]">To provide seamless and low-cost currency exchange and cross-border transactions for businesses, freelancers, and everyday users through a cutting-edge web and mobile platform.</p></div>
                        </div>
                        <hr className="border-[#A5A5A5]" />
                        <div className=" block md:flex space-x-[32px] mt-[24px] mt-[16px] lg:mt-[12px] mb-[32px] lg:mb-[0px]">
                            <div><h1 className="font-medium text-[16px] lg:text-[20px]">Our Vision</h1></div>
                            <div><p className="font-medium  text-[12px] lg:text-[16px] text-[#A5A5A5]">Revolutionize currency exchange across Africa by creating a platform that empowers users with instant, secure, and transparent financial transactions—bridging the gap between traditional banking and digital finance.</p></div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={img28}
                            alt=""
                            height={0}
                            width={0}
                            className="w-[91vw] lg:w-[30.5vw] mx-auto mb-[42px] lg:mb-[92px]"
                        />
                    </div>
                </div>
            </div>
            {/* desktop view section3*/}
            <div className="w-full py-[62px] hidden lg:block bg-[#FFFFFF]">
                <div className="w-[73vw] mx-auto flex justify-between ">
                    <div className=" text-center"> <p className="font-semibold text-[52px]">10M+</p> <p className="font-medium text-[16px] text-[#565656] pt-[15px]">Total Users</p></div>
                    <div className=" space-y-[15px] text-center"> <p className="font-bold text-[52px]">50+</p> <p className="font-medium text-[16px] text-[#565656]">Currencies Supported</p></div>
                    <div className=" space-y-[15px] text-center"> <p className="font-bold text-[52px]">100K+</p> <p className="font-medium text-[16px] text-[#565656]">Transaction Per Day</p></div>
                    <div className=" space-y-[15px] text-center"> <p className="font-bold text-[52px]">30+</p> <p className="font-medium text-[16px] text-[#565656]">Country & Regions</p></div>
                </div>
            </div>
            <div className="w-full py-[32px] hidden md:block">

            </div>
            {/* mobile/tablet view section3 */}
            <div className="w-full bg-[#FFFFFF] lg:hidden ">
                <div className="w-[91vw] mx-auto space-y-[69px] py-[20px]">
                    <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">10M+</p> <p className="font-medium text-[12px] text-[#565656]">Total Users</p></div>
                    <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">50+</p> <p className="font-medium text-[12px] text-[#565656]">Currencies Supported</p></div>
                    <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">100K+</p> <p className="font-medium text-[12px] text-[#565656]">Transaction Per Day</p></div>
                    <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">30+</p> <p className="font-medium text-[12px] text-[#565656]">Country & Regions</p></div>
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

export default page
