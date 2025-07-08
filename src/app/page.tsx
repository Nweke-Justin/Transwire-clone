import Header from "./Components/Header";
import Image from 'next/image'
import img1 from "../../public/pictures/img1.png"
import img2 from "../../public/pictures/img2.png"
import img3 from "../../public/pictures/img3.png"
import img4 from "../../public/pictures/img4.png"
import img5 from "../../public/pictures/img5.png"
import img6 from "../../public/pictures/img6.png"
import img7 from "../../public/pictures/img7.png"
import img8 from "../../public/pictures/img8.png"
import img9 from "../../public/pictures/img9.png"
import img10 from "../../public/pictures/img10.png"
import img11 from "../../public/pictures/img11.png"
import img12 from "../../public/pictures/img12.png"
import img16 from "../../public/pictures/img16.png"
import img17 from "../../public/pictures/img17.png"
import img18 from "../../public/pictures/img18.png"
import img19 from "../../public/pictures/img19.png"
import img20 from "../../public/pictures/img20.png"
import { X } from 'lucide-react';

import Observer from "./Components/Observer";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div className="bg-[#EDF1FF] ">
      <Header />
      {/* desktop view,1st section */}
      <div className="mt-[52px] hidden lg:flex">
        <div className="ml-[150px]">
          <div className=" w-[500px] space-x-[16px]">
            <h1 className="font-semibold  text-[40px]">Revolutionize Currency Exchange Transactions across Africa</h1>
            <p className="font-medium text-12px font-semibold">Offering instant, secure, and affordable currency exchange across Africa.</p>
          </div>
          <div className="flex space-x-[20px] mt-[44px]">
            <div className=" w-[202.5px] h-[60px]">
              <Image src={img1} alt="" width={0} height={0} className=" w-full" />
            </div>
            <div className=" w-[202.5px] h-[60px]">
              <Image src={img2} alt="" width={0} height={0} className=" w-full" />
            </div>
          </div>
        </div>
        <div className="mt-[12px] h-[514px] w-[50%]">
          <Image src={img3} alt="your browser doesnt support image" width={0} height={0} className="w-full h-full" />
        </div>
      </div>
      {/* mobile view /tablet 1 section*/}
      <div className="lg:hidden">
        <div className="w-[91vw] mx-auto space-x-[10.55px] mt-[36px] mb-[20px]">
          <h1 className="font-semibold text-[26px] md:text-[35px]">Revolutionize Currency Exchange Transactions across Africa
          </h1>
          <p className="font-medium text-12px font-medium md:semibold">Offering instant, secure, and affordable currency exchange across Africa.</p>
        </div>
        <div className="flex space-x-[13.33px] w-[91vw] mx-auto mb-[32px] ">
          <div className="w-[135px] md:w-[202.5px] h-[40px] md:h-[60px]">
            <Image src={img1} alt="" width={0} height={0} className="w-full h-full" />
          </div>
          <div className="w-[135px] md:w-[202.5px] h-[40px] md:h-[60px]">
            <Image src={img2} alt="" width={0} height={0} className="w-full h-full" />
          </div>
        </div>
        <div className="w-[91vw] mx-auto">
          <Image src={img3} alt="" width={0} height={0} />
        </div>
      </div>
      {/* desktop view section2 */}
      <div className="w-full bg-[#1E1E1E] py-[46px] hidden lg:block">
        <div className="block md:flex space-x-[24px] lg:font-semibold   justify-center  ">
          <p className="text-[#FFFFFF] text-[20px] my-[8px]">Sign Up Today and Earn Rewards with Our Referral Program</p>
          <button className="bg-[#0052CC] text-[14px] text-[#FAFAFA] py-[12px] px-[24px] rounded">Get Started for Free</button>
        </div>
      </div>
      {/* mobile/tablet view section2 */}
      <div className="w-full bg-[#1E1E1E] block lg:hidden py-[16px]">
        <div className="w-[71vw] mx-auto  text-center font-semibold  space-y-[12px]">
          <p className="text-[14px] text-[#FFFFFF]">Sign Up Today and Earn Rewards with Our Referral Program</p>
          <button className="text-[10.5px] bg-[#0052CC] text-[#FAFAFA] py-[9px] px-[18px] rounded">Get Started for Free</button>
        </div>
      </div>
      {/* desktop view section3*/}
      <div className="w-full py-[92px] hidden lg:block bg-[#FFFFFF]">
        <div className="w-[73vw] mx-auto flex justify-between ">
          <div className=" space-y-[15px] text-center"> <p className="font-semibold text-[52px]">10M+</p> <p className="font-medium text-[16px]">Total Users</p></div>
          <div className=" space-y-[15px] text-center"> <p className="font-semibold text-[52px]">50+</p> <p className="font-medium text-[16px]">Currencies Supported</p></div>
          <div className=" space-y-[15px] text-center"> <p className="font-semibold text-[52px]">100K+</p> <p className="font-medium text-[16px]">Transaction Per Day</p></div>
          <div className=" space-y-[15px] text-center"> <p className="font-semibold text-[52px]">30+</p> <p className="font-medium text-[16px]">Country & Regions</p></div>
        </div>
      </div>
      <div className="w-full py-[32px] hidden md:block">

      </div>
      {/* mobile/tablet view section3 */}
      <div className="w-full bg-[#FFFFFF] lg:hidden mt-[20px]">
        <div className="w-[91vw] mx-auto space-y-[69px] py-[20px]">
          <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">10M+</p> <p className="font-medium text-[12px]">Total Users</p></div>
          <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">50+</p> <p className="font-medium text-[12px]">Currencies Supported</p></div>
          <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">100K+</p> <p className="font-medium text-[12px]">Transaction Per Day</p></div>
          <div className=" space-y-[11.25px] text-center"> <p className="font-semibold text-[39px]">30+</p> <p className="font-medium text-[12px]">Country & Regions</p></div>
        </div>
      </div>
      <div className="w-[91vw] mx-auto bg-[#F2F2F2] mt-[20px]  md:hidden">
        <div className="w-[72vw] mx-auto  py-[15px]">
          <p className="font-small text-[9px] mb-[4px]">Backed by and featured on</p>
          <div className="flex space-x-[18px]">
            <div className="w-[55.5px] h-[15px]">
              <Image src={img4} alt="" width={0} height={0} className="w-full h-full" />
            </div>
            <div className="w-[58.72px] h-[15px]">
              <Image src={img5} alt="" width={0} height={0} className="w-full h-full" />
            </div>
            <div className="w-[35.66px] h-[15px]">
              <Image src={img6} alt="" width={0} height={0} className="w-full h-full" />
            </div>
            <div className="w-[65.43px] h-[7.98px]" >
              <Image src={img7} alt="" width={0} height={0} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* desktopview/tab sect 4 */}
      <div className="w-[72vw] mx-auto hidden md:flex md:space-x-[20px] lg:space-x-[28px] item-center justify-center mt-[32px]">
        <p className="text-[12px]">Backend by and featured on</p>
        <div className="flex space-x-[24px]">
          <div className="w-[74.04px] h-[20px]">
            <Image src={img4} alt="" width={0} height={0} className="w-full h-full" />
          </div>
          <div className="w-[78.3px] h-[20px]">
            <Image src={img5} alt="" width={0} height={0} className="w-full h-full" />
          </div>
          <div className="w-[47.54px] h-[20px]">
            <Image src={img6} alt="" width={0} height={0} className="w-full h-full" />
          </div>
          <div className="w-[87.23px] h-[10.64px]">
            <Image src={img7} alt="" width={0} height={0} className="w-full h-full mt-1" />
          </div>
        </div>
      </div>
      {/* section5 */}
      <div className="w-full bg-[#FFFFFF]">
        <div className="w-[90vw] lg:w-[85vw] mx-auto">
          <p className="font-semibold text-[20px] md:text-[32px] text-center mt-[36px] lg:mt-[92px] lg:w-[75vw] lg:mx-auto mb-[31px] lg:mb-[60px] ">Trusted by thousands by businesses,<br />
            freelancers, & everyday users around the world</p>
        </div>
        <div className="w-[81vw] mx-auto ">
          <Image src={img8}
            alt=" your browser doesnt support pics" width={0} height={0}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* section6 */}
      <div>
        <p className="text-[20px] md:text-[40px] font-[semibold] text-center font-[Montserrat] mb-[20px] md:mb-[52px]">Discover your next business <br /> opportunity</p>
        <div className="w-[85vw] mx-auto lg:flex lg:space-x-[20px] item-center justify-center">
          <div className="w-[100%] lg:w-[508px] h-auto mb-[20px] lg:mb-[0px]">
            <Image src={img9} alt="" width={0} height={0} />
          </div>
          <div className="w-[100%] lg:w-[612px] h-auto space-y-[20px]">
            <Image src={img10} alt="" width={0} height={0} />
            <Image src={img11} alt="" width={0} height={0} />
          </div>
        </div>
      </div>
      {/* section7 */}
      <div className=" bg-[#0A2D61]  ">
        <div className="w-[95vw] lg:w-[90vw] mx-auto lg:flex space-y-[32px] lg:space-y-[0px] lg:space-x-[112px] lg:py-[110px]">
          <div className="text-[#FFFFFF] space-y-[18px] lg:space-y-[24px] lg:w-[50%] pt-[32px] pg:mt-[32px] lg:my-[80px]">
            <h1 className="font-semibold text-[30px] lg:text-[40px]">
              Invite friends and earn rewards
            </h1>
            <p className="font-medium text-[18px] lg:text-[24px]">Invite friends and earn rewards when they sign up using your referral code. Both you and your friend get bonus credits!”</p>
          </div>
          <div className=" lg:h-[504px] pb-[52px] lg:pb-[0px]">
            <Image src={img12} alt="" width={0} height={0} className="w-full h-full" />
          </div>
        </div>
      </div>
      {/* section8 */}
      <Observer />
      {/* section9 */}
      <div className="w-full">
        <h1 className="font-semibold text-[20px] md:text-[30px] lg:text-[40px] w-[91vw] md:w-[59vw] mx-auto text-center  mt-[2px]">
          Join the thousands of people that love using Transwire for their Foreign Transactions
        </h1>
        <div className=" w-[91vw] lg:w-[79.2vw] mx-auto justify-between block lg:flex space-y-[32px] lg:space-y-[0px] lg:space-x-35 mt-[32px] lg:mt-[52px]">
          <div>
            <Image
              src={img16}
              alt=""
              width={40}
              height={40}
              className="mb-8 lg:mb-16 mx-auto"
            />
            <p className="font-medium text-[12px] text-[#A5A5A5] mb-[44px]">
              Transwire has been a game-changer for me! I used to struggle with high fees and slow processing times for international transactions, but Transwire has made everything so much easier. Their exchange rates are unbeatable.
            </p>
            <Image
              src={img17}
              alt=""
              width={170}
              height={52}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={img16}
              alt=""
              width={40}
              height={40}
              className="mb-8 lg:mb-16 mx-auto"
            />
            <p className="font-medium text-[12px] text-[#A5A5A5] mb-[44px]">
              I’ve been using Transwire for a few months now, and I’m truly impressed by how seamless it is. Sending money abroad is hassle-free. Whether I’m paying for services or sending money to family, Transwire is my go-to platform.
            </p>
            <Image
              src={img18}
              alt=""
              width={170}
              height={52}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={img16}
              alt=""
              width={40}
              height={40}
              className="mb-8 lg:mb-16 mx-auto"
            />
            <p className="font-medium text-[12px] text-[#A5A5A5] mb-[44px]">
              never thought international transactions could be this straightforward. Transwire's app is intuitive and easy to use, and I can track my payments in real time. The best part? No hidden fees! I’m so glad I switched to Transwire.
            </p>
            <div className="w-[170px] h-[52px] flex mx-auto space-x-2">
              <div>
                <Image
                  src={img19}
                  alt=""
                  width={52}
                  height={52}
                />
              </div>
              <div className="space-y-[2px]">
                <h1 className="text-[#1E1E1E] text-[16px] font-medium">Jane Cooper</h1>
                <p className="text-[#A5A5A5] text-[12px] font-medium">Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section10 */}
      <div className="w-full">
        <h1 className="font-semibold text-[20px] md:text-[30px] lg:text-[40px] mt-[36px] lg:mt-[92px] text-center mb-[32px] lg:md-[52px]">
          {`Frequently asked questions (FAQs)`}
        </h1>
        <div className="space-y-[12px]">
          <div className="w-[79vw] mx-auto bg-white rounded-lg p-[40px]">
            <div className="w-[90%] mx-auto justify-between flex ">
              <h1 className="font-semibold text-[15px] md:text-[20px]">What services does Transwire offer</h1> <X className="rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="w-[79vw] mx-auto bg-white rounded-lg p-[40px]">
            <div className="w-[90%] mx-auto justify-between flex ">
              <h1 className="font-semibold text-[15px] md:text-[20px]">What services does Transwire offer</h1> <X className="rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="w-[79vw] mx-auto bg-white rounded-lg p-[40px]">
            <div className="w-[90%] mx-auto justify-between flex ">
              <h1 className="font-semibold text-[15px] md:text-[20px]">What services does Transwire offer</h1> <X className="rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="w-[79vw] mx-auto bg-white rounded-lg p-[40px]">
            <div className="w-[90%] mx-auto justify-between flex ">
              <h1 className="font-semibold text-[15px] md:text-[20px]">What services does Transwire offer</h1> <X className="rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
      {/* section11 */}
      <div className="relative">
        <Image
          src={img20}
          alt=""
          width={0}
          height={0}
          className="w-[78px] h-[78px] lg:w-[104px] lg:h-[104px] bg-[#F3F4F9] mx-auto rounded-full p-2 absolute left-1/2 -translate-x-1/2  -top-15"
        />

        <div className="bg-white w-full mt-[36px] lg:mt-[92px] pb-[36px] lg:pb-[92px]">
          <div className=" w-[90vw] lg:w-[79vw] mx-auto rounded-[40px] bg-black text-white pt-[24px] lg:pt-[32px]">

            <h1 className="font-semibold text-[20px] md:text-[30px] lg:text-[40px] my-[24px] md:my-[28px] lg:my-[32px] text-center">Download the Transwire App & <br className="hidden md:block" /> Get Started Now!</h1>
            <div className="flex space-x-[25.6px] md:space-x-[32px] item-center justify-center pb-[44px] lg:pb-[80px]">
              <Image
                src={img1}
                alt=""
                width={0}
                height={0}
                className=" w-[108px] lg:w-[135px] h-[32px] lg: h-[40px] bg-white text-black"
              />
              <Image
                src={img2}
                alt=""
                width={0}
                height={0}
                className=" w-[108px] lg:w-[135px] h-[32px] lg: h-[40px] bg-white text-black"
              />
            </div>
          </div>
          <div className=" mt-[32px] lg:mt-[92px] item-center justify-center">
            <h1 className="font-semibold text-[12px] md:text-[16px] text-center mb-[4px]">Stay Informed with Our Latest Updates</h1>
            <p className="text-[#A5A5A5] font-medium text-[12px] md:text-[16px] mb-[20px] lg:mb-[28px] text-center">Subscribe to our newsletter and be the first to know about updates.</p>
            <div className="w-[90vw] md:w-[60vw] lg:w-[44vw] mx-auto flex mb-[36px] lg:mb-[92px] bg-[#EDF1FF] pl-[18px] lg:pl-[24px]">
              <input type="text" placeholder="Enter email address" className="w-full" />
              <button className="px-[18px] lg:px-[24px] py-[12px] lg:py-[16px] text-white bg-[#2E42A5] rounded-lg lg:rounded-none lg:rounded-tr-lg lg:rounded-br-lg text-[10.5px] md:text-[14px] font-medium">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
