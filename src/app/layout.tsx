'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "./lib/utils";
import Navbar from "./sections/Navbar"
import MaxWidthWrapper from "./sections/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Ghost } from "lucide-react"
import { usePathname } from 'next/navigation';






const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//export const metadata: Metadata = {
  //title: "Create Next App",
  //description: "Generated by create next app",
//};
/* <html lang="en" className='light'>
      <body
        className={cn('min-h-screen font-sans antialiased grainy', geistMono.className)}> */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showNavbar = usePathname()==='/';
  return (
    <html lang="en" >
      <body> {showNavbar && (
        <nav className="sticky h-14  insert-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/0 backdrop-blur-lg transition-all ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-zinc-200">
                    <Link href='/' className=" flex z-40 font-bold'">
                      <span style={{fontSize:'30px',textAlign:'center', display:'flex', alignItems:'center'}}>KB</span>
                      <span style={{marginLeft:'20px', width:'82px', textAlign:'center', display:'flex', alignItems:'center'}}>Contact Us</span>
                      <span style={{marginLeft:'10px', width:'60px', textAlign:'center', display:'flex', alignItems:'center'}}>Tutorial</span>
                      <span style={{marginLeft:'15px', width:'60px', textAlign:'center', display:'flex', alignItems:'center' }}>Reviews</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex" style={{marginLeft:'700px',}}>
                      <>
                       <Link href='/' className={buttonVariants({
                        
                        size:'sm'
                       })}>Sign in </Link>

                       <Link href='/' className={buttonVariants({
                        
                        size:'sm'
                       })} >Log in </Link>

                       {/* <Link href='/dashboard' target="_blank" className={buttonVariants({
                        size:'sm'
                       })}>Get Started </Link> */}
                       

                      </>

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav> )}
        {/*<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }} className="fixed bottom-0 left-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-bl from-[#ff80b5] to-[#ebf24d] opacity-40 sm:w-[72.1875rem]"/>
            </div>*/}
        {children}
      </body>
    </html>
  );
}
