import Image from "next/image"
import Logo from "../../../public/pictures/Logo.png"
import Twitter from "../../../public/pictures/Twitter.png"
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import img21 from "../../../public/pictures/img21.png"
import img22 from "../../../public/pictures/img22.png"
function Footer() {
    return (
        <div className="w-full ">
            {/* desktop view */}
            <div className="hidden md:block space-y-[92px]">
                <div className="w-[88vw] mx-auto  flex mt-[92px]  justify-between">
                    <div className="space-y-[16px]">
                        <Image
                            src={Logo}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[134.5px] h-[28px] "
                        />
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <p>About Us</p>
                            <p>Why Transwire</p>
                            <p>what is new</p>
                        </div>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="font-semibold text-[18px]">Product</h1>
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <p>
                                Currency <br className="lg:hidden" /> conversion
                            </p>
                            <p>
                                Cross-border payments
                            </p>
                            <p>
                                Digital wallet management
                            </p>
                        </div>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="font-semibold text-[18px]">Legal</h1>
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <p>
                                Terms and Conditions
                            </p>
                            <p>
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="font-semibold text-[18px]">Help</h1>
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <p>
                                Help Center
                            </p>
                            <p>
                                Blog
                            </p>
                            <p>
                                Contact
                            </p>
                        </div>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="font-semibold text-[18px]">Follow us</h1>
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <div className="hidden lg:flex justify-between space-x-[8px]">
                                <div className="rounded-full p-[10px] border">
                                    <Facebook className="text-black" />
                                </div>
                                <div className="rounded-full p-[10px] border">
                                    <Instagram className="text-black" />
                                </div>
                                <Image
                                    src={Twitter}
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="w-[42px] h-[42px]"
                                />
                                <div className="rounded-full p-[10px] border">
                                    <Youtube className="text-black" />
                                </div>
                                <div className="rounded-full p-[10px] border">
                                    <Linkedin className="text-black" />
                                </div>
                            </div>
                            <div className="md:flex lg:hidden space-x-[6px]">
                                <div className="rounded-full pt-1 px-1 border">
                                    <Facebook className="text-black w-4 h-4" />
                                </div>
                                <div className="rounded-full p-[5px] border">
                                    <Instagram className="text-black black w-4 h-4" />
                                </div>
                                <Image
                                    src={Twitter}
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="w-[30px] h-[30px]"
                                />
                                <div className="rounded-full p-[5px] border">
                                    <Youtube className="text-black black w-4 h-4" />
                                </div>
                                <div className="rounded-full p-[5px] border">
                                    <Linkedin className="text-black black w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-[8px]">
                            <Image
                                src={img21}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[98px] lg:w-[108px] h-[24px] lg:h-[32px]"
                            />
                            <Image
                                src={img22}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[98px] lg:w-[108px] h-[24px] lg:h-[32px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-[92px] w-[88vw] mx-auto space-y-[28px]">
                    <hr className="border-t border-t-[#A5A5A5]" />
                    <p className="font-medium text-[16px]">© 2024 Transwire Glodal LLC. All rights reserved.</p>
                </div>
            </div>
            {/* mobile view */}
            <div className="md:hidden ">
                <div className="w-[90vw] mx-auto  mt-[36px]  space-y-[24px]">
                    <div className="flex justify-between">
                        <div>
                            <Image
                                src={Logo}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[100.92px] h-[21px] mb-[12px]"
                            />
                            <div className="space-y-[12px] font-medium text-[#565656] text-[12px]">
                                <p>About us</p>
                                <p>Why Transwire</p>
                                <p> What's new</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[12px] mb-[18px]">Product</h1>
                        <div className=" font-medium text-[#565656] space-y-[12px] text-[12px]">
                                 <p>
                                Currency conversion
                            </p>
                            <p>
                                Cross-border payments
                            </p>
                            <p>
                                Digital wallet management
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-[43px]">
                        <div >
                           <h1 className="font-semibold text-[12px] mb-[18px]">Legal</h1>
                            <div className="space-y-[12px] font-medium text-[#565656] text-[12px]">
                                <p>Terms and Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[12px] mb-[18px]">Help</h1>
                        <div className=" font-medium text-[#565656] space-y-[12px] text-[12px]">
                             <p>
                              Help Center      
                             </p>
                            <p>
                              Blog
                            </p>
                            <p>
                              Contact
                            </p>
                            </div>
                        </div>
                    </div>
                     <div className="space-y-[24px]">
                        <h1 className="font-semibold text-[18px]">Follow us</h1>
                        <div className=" font-medium text-[#565656] space-y-[16px]">
                            <div className="flex space-x-[6px]">
                                <div className="rounded-full pt-1 px-1 border">
                                    <Facebook className="text-black w-4 h-4" />
                                </div>
                                <div className="rounded-full p-[5px] border">
                                    <Instagram className="text-black black w-4 h-4" />
                                </div>
                                <Image
                                    src={Twitter}
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="w-[30px] h-[30px]"
                                />
                                <div className="rounded-full p-[5px] border">
                                    <Youtube className="text-black black w-4 h-4" />
                                </div>
                                <div className="rounded-full p-[5px] border">
                                    <Linkedin className="text-black black w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-[6px]">
                            <Image
                                src={img21}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[81px] h-[24px] "
                            />
                            <Image
                                src={img22}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[81px] h-[24px]"
                            />
                        </div>
                    </div>
                     <div className="pb-[36px] w-[90vw] mx-auto space-y-[28px]">
                    <hr className="border-t border-t-[#A5A5A5]" />
                    <p className="font-medium text-[10px]">© 2024 Transwire Glodal LLC. All rights reserved.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
