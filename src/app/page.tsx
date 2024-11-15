
import Link from "next/link";
import MaxWidthWrapper from "./sections/MaxWidthWrapper";
import {ArrowRight} from "lucide-react"
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return(
    <>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center ">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-black hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Kanban Board is now public!
        </p>
      </div>

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-5xl">
        Organize, Prioritize, Succeed <br></br>
        <span className="text-purple-500">All </span> in One Place <br></br>
      </h1>

      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
      Kanban Board is an intuitive online task manager that helps individuals and teams organize, prioritize, and collaborate on projects with ease. 
      </p>

      <Link className={buttonVariants({
        size: "lg",
        
        className: "mt-5"
      })} href="/dashboard" target="_blank">
        Get Started <ArrowRight className="ml-2 w-5 h-5"/>
      </Link>


      
    </MaxWidthWrapper>
      <div>
        <div className="relative-isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform overflow-hidden blur-3xl sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="rlative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ebf24d] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }} className=" rlative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-bl from-[#ff80b5] to-[#dde71d] opacity-40 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"/>
            <div
              style={{
               clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
               background: "linear-gradient(to top left, #ff80b5, #ebf24d)", // Gradient from bottom right to top left
              }} className="fixed bottom-0 right-0 aspect-[1155/678] w-[36.125rem] rotate-[30deg] opacity-40 sm:w-[72.1875rem]"/>
            <div
            style={{
            clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: "linear-gradient(to bottom left, #ff80b5, #ebf24d)", // Gradient from top right to bottom left
            }}
            className="fixed top-7 right-7 aspect-[1155/678] w-[36.125rem] rotate-[30deg] opacity-40 sm:w-[72.1875rem]"/>
            </div>
            

           <div>
              <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-500/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                    <Image 
                    src='/kbFigma.jpg'
                    alt= 'product preview'
                    width={833}
                    height={993}
                    quality={100}
                    className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-yellow-400/10"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform overflow-hidden blur-3xl sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="rlative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ebf24d] opacity-40 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"/>
            </div> */}

        </div>
      </div>

      {/*why*/}
      <div className="mx-auto mt-10 mb-10 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 text-2xl font-bold text-black sm:text-5xl">From <span className="text-red-400">To-Do</span> to <span className="text-green-400">Done</span>, Effortlessly</h2>
            <p className="mt-4 text-gray-900 text-lg">
              Managing your tasks has never been easier than with KB!!
            </p>
          </div>
        </div>
        {/*steps!!*/}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-4 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-orange-400">Step 1</span>
              <span className="text-xl font-semibold text-zinc-900">Sign up for an account</span>
              <span className="mt-2 text-zinc-700">
                Start managing your tasks by signing up for an account!
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-4 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-orange-400">Step 2</span>
              <span className="text-xl font-semibold text-zinc-900">Choose a Kanban board to start</span>
              <span className="mt-2 text-zinc-700">
                Select a Kanban board from templates as per your need
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-4 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-orange-400">Step 3</span>
              <span className="text-xl font-semibold text-zinc-900">Edit the board as per your progress</span>
              <span className="mt-2 text-zinc-700">
                Add a task and drag them into further columns as per your progress
              </span>
            </div>
          </li>

        </ol>
        {/*todo image*/}
        <div>
              <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-500/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                    <Image 
                    src='/todo.png'
                    alt= 'product preview'
                    width={1920}
                    height={494}
                    quality={100}
                    className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-yellow-400/10"
                    />
                  </div>
                </div>
              </div>
            </div>

          
            {/*<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }} className="fixed bottom-0 left-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-bl from-[#ff80b5] to-[#ebf24d] opacity-40 sm:w-[72.1875rem]"/>
            </div>*/}
            




      </div>

    </>
  )
}
