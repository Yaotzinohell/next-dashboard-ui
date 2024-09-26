import Image from "next/image";
import Navbar from '@/components/Navbar'
import Menu from "@/components/Menu";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* Left  */}
    <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] p-4" style= {{background: "#F1F2F7"}}>
      <Link href="/" className="flex items-center justify-center lg: justify-start gap=2">
        <Image src="/aryaka.webp" alt="logo" width = {150} height={100}/>
        {/* <span className="hidden lg:block"></span> */}
      </Link>
      <Menu />
    </div>
    {/* Right  */}
    <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white overflow-scroll">
      <Navbar />
      {children}
    </div>
  </div>
}
