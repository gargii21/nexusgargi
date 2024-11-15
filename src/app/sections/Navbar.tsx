import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="sticky h-14  insert-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-zinc-200">
                    <Link href='\ flex z-40 font-semibold'>
                      <span>KB</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                      <>
                       <Link href='/' className={buttonVariants({
                        variant:'ghost',
                        size:'sm'
                       })}>Sign in </Link>

                       <Link href='/' className={buttonVariants({
                        variant:'ghost',
                        size:'sm'
                       })}>Log in </Link>

                       <Link href='/dashboard' className={buttonVariants({
                        size:'sm'
                       })}>Get Started </Link>
                       

                      </>

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )

}

export default Navbar