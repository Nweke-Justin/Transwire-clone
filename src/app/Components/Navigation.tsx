import Link from "next/link"
import Image from "next/image";
import Logo from "../../../public/pictures/Logo.png"
import { ChevronDown, MenuIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
function navigation() {
    return (
        <div>
            {/* desktop view */}
            <div className="pt-[28px] hidden lg:block">
                <div className="flex justify-between bg-white w-[79vw] h-[68px] mx-auto  rounded-full sticky top-0 px-[32px]">
                    <div>
                        <Link href={"/"} className="w-[134px] h-[28px]"><Image src={Logo} alt="" width={0} height={0} className="w-fill h-fill mt-[19px]" /></Link>
                    </div>
                    <div className="flex mt-[11px] mb-[13px] p-[10px] space-x-[16px] font-semibold">
                        <Link href={"/product"} className="flex space-x-1 text-[14px]">
                            <span>Product</span> <ChevronDown width={0} height={0} className="w-[16px] h-[16px] mt-1" />
                        </Link>
                        <Link href={"/About"} className="text-[14px]" > About Us</Link>
                        <Link href={'/Support'} className="text-[14px]">Support</Link>
                        <Link href={'/blog'} className="text-[14px]">Blog</Link>
                    </div>
                    <div className="flex my-[14px] space-x-[8px] text-[12px]">
                        <Link href={"/sign up"} className="px-[25px]  py-[9px]  text-center border font-semibold  rounded-full">
                            Sign Up
                        </Link>
                        <Link href={"/login"} className="bg-[#0052CC] px-[25px] py-[10px]  rounded-full text-md text-center text-[#FAFAFA] font-semibold">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            {/* mobile view/tablet */}
            <div className="lg:hidden flex justify-between bg-white ">
                <div className="py-[24px] pl-[16px]">
                    <Link href={"/"} className="w-[134px] h-[28px]"><Image src={Logo} alt="" width={0} height={0} className="w-fill h-fill " /></Link>                </div>
                <div className="py-[26px] px-[16px]">
                    <Sheet>
                        <SheetTrigger>
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent side="top" className=" bg-white h-[100vh]">
                            <SheetHeader>
                                <SheetTitle className="w-[134px] h-[28px]">
                                    <Image src={Logo} alt="" width={0} height={0} className="w-fill h-fill " />
                                </SheetTitle>
                                <SheetDescription className="mt-[32px] font-medium text-[14px] text-black">
                                    <div className="flex flex-col justify-between h-[90vh]">
                                        <div className="space-y-[20px       ]">
                                            <Link href={"/product"} className="flex space-x-2">
                                                <span className="font-medium">Product</span> <ChevronDown width={0} height={0} className="w-[16px] h-[16px] mt-1"/>
                                            </Link>
                                            <div>
                                                <Link href={"/support"} className="font-medium">
                                                    Support
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href={"/blog"} className="font-medium">
                                                    Blog
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="space-y-[12px] text-center ">
                                            <div className="border px-[20px] py-[12px] rounded-full border-black">
                                                <Link href={"/sign up"}  > Sign Up</Link>
                                            </div>
                                            <div className="bg-[#513DEB]  px-[20px]  py-[12px] rounded-full mb-[44px]">
                                                <Link href={"/login"} className=" text-white">Login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default navigation
