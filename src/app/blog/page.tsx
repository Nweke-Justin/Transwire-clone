"use client"
import Header from "../Components/Header"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import img20 from "../../../public/pictures/img20.png"
import img24 from "../../../public/pictures/img24.png"
import img25 from "../../../public/pictures/img25.png"
import { useState, useEffect,useRef } from "react"
import Footer from "../Components/Footer"
type Post = {
  forEach: any
  id: number;
  title: string;
  description: string;
  image: string
  price: number
  category: string
}
function Page() {
  const [loading, setLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([])
  const [display, setDisplay] = useState<Post | null>(null)
  const [border, setBorder] = useState<boolean>(true)
   const yesBorder = ()=>{
    if (border===false){
      setBorder(true)
    }
   }
   const noBorder=()=>{
    if (border===true){
      setBorder(false)
    }
   }
  useEffect(() => {
    async function getInfo() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.log("the error is:", err)
      } finally {
        setLoading(false)
      }
    }
    getInfo()

  }, [])

  return (
    <div>
      <Header />
      <div >
        {display && (
          <div className="w-[90vw] lg:w-[79vw] mx-auto lg:mt-[130px] mb-16">
            <div className=" block lg:flex items-center lg:space-x-[60px]">
              <div className="lg:w-[70.5%]">
                <img
                  src={display.image}
                  alt={display.title}
                  className="w-full  h-auto lg:h-[60vh] rounded-[26px]"
                />
                <p className="font-semibold text-[20px] lg:text-[28px]">{display.title}</p>
                <p className="text-[#565656] text-[16px] lg:text-[20px] mt-2">
                  <span className="font-bold text-black">Category:</span> {display.category}
                </p>
                <p className="text-[#565656] text-[16px] lg:text-[20px] mt-1">
                  <span className="font-bold text-black">Price:</span> ${display.price}
                </p>
              </div>
              <div className=" block lg:flex lg:w-[28vw]">
                <p className="mt-4 text-[14px] lg:text-[16px] text-gray-600">
                  {display.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" lg:mt-[192px] w-[95vw] lg:w-[79.1vw] mx-auto">
        <h1 className="font-semibold text-[24px] lg:text-[40px] mb-[20px] lg:mb-[16px]">Latest Articles</h1>
        <p className="font-medium text-16px text-[#A5A5A5] hidden md:block md:mb-[20px] lg:mb-[45px] ">Explore best articles</p>
        <div className="w-[19vw] flex gap-[5%] text-medium">
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="all" className={`pb-[20px] hover:cursor-pointer ${border ? ("border border-b-[#0052CC] rounded border-b-4 text-[#0052CC]") : ("")} `}onClick={()=>{yesBorder()}}>ALL</TabsTrigger>
              <TabsTrigger value="exchange" className={`pb-[20px] hover:cursor-pointer ${!border ? ("border border-b-[#0052CC] rounded border-b-4 text-[#0052CC]") : ("")} `}onClick={()=>{noBorder()}}>Exchange Rate</TabsTrigger>
            </TabsList>
            <hr className="border w-[95vw] lg:w-[79.1vw] mx-auto border-[#A5A5A580] mb-[36px]" />
            <TabsContent value="all">
              <div>
                {loading ? (<p className="w-[90vw] lg:w-[79.12vw] mx-auto font-bold">Loading</p>) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90vw] gap-[36px] lg:w-[79.12vw] mx-auto lg:mb-[92px]"  >
                    {posts.map((post) => {
                      return (
                        <div key={post.id} className="hover:cursor-pointer" onClick={() => setDisplay(post)}>
                          <img
                            src={post.image}
                            alt=""
                            className="w-full h-[50vh]  lg:h-[25.2vw] lg:w-[24.7vw] rounded-[26px] mb-[16px] "
                          />
                          <p className="font-semibold text-[16px] lg:text-[24px]">{post.title}</p>
                          <p className="font-medium text-[12px] lg:text-[16px] text-[#565656]">
                            <span className="font-bold text-black">Category:</span> {post.category}
                          </p>
                          <p className="font-medium text-[12px] lg:text-[16px] text-[#565656]">
                            <span className="font-bold text-black">Price:</span> ${post.price}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="exchange">Change your password here.</TabsContent>
          </Tabs>
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
        <Footer />
      </div>
    </div>
  )
}

export default Page
