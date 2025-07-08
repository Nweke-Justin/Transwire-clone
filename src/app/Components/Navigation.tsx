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
                    <div className="flex mt-[11px] mb-[13px] p-[10px] space-x-[16px] font-medium">
                        <Link href={"/product"} className="flex">
                            <span>Product</span> <ChevronDown />
                        </Link>
                        <Link href={"/about us"} > About Us</Link>
                        <Link href={'/support'}>Support</Link>
                        <Link href={'/blog'}>Blog</Link>
                    </div>
                    <div className="flex my-[14px] space-x-[8px]">
                        <Link href={"/sign up"} className="px-[20px]  py-[9px] text-md text-center border font-medium rounded-full">
                            Sign Up
                        </Link>
                        <Link href={"/login"} className="bg-[#0052CC] px-[20px] py-[9px] rounded-full text-md text-center font-medium">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            {/* mobile view/tablet */}
            <div className="lg:hidden flex justify-between bg-white border border-b border-gray-300">
                <div className="py-[24px] pl-[16px]">
                    <Link href={"/"} className="w-[134px] h-[28px]"><Image src={Logo} alt="" width={0} height={0} className="w-fill h-fill " /></Link>                </div>
                <div className="py-[26px] px-[16px]">
                    <Sheet>
                        <SheetTrigger>
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent side="top" className="h-[100vh]">
                            <SheetHeader>
                                <SheetTitle className="w-[134px] h-[28px]">
                                   <Image src={Logo} alt="" width={0} height={0} className="w-fill h-fill " />
                                </SheetTitle>
                                <SheetDescription className="mt-[32px] font-medium text-[14px] text-black space-y-[20px]">
                                    <Link href={"/product"} className="flex space-x-2">
                                        <span>Product</span> <ChevronDown />
                                    </Link>
                                    <div>
                                        <Link href={"/product"}>
                                            Support
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"/product"}>
                                            Blog
                                        </Link>
                                    </div>
                                    <div className="space-y-[12px] text-center mt-[200px]">
                                        <div className="border px-[20px] py-[12px] rounded-full border-black">
                                            <Link href={"/sign up"}  > Sign Up</Link>
                                        </div>
                                        <div className="bg-[#513DEB] px-[20px] py-[12px] rounded-full">
                                            <Link href={"/login"}>Login</Link>
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
