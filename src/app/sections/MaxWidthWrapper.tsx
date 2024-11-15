import { ReactNode } from "react"
import { cn } from "../lib/utils"

const MaxWidthWrapper = ({
    className,
    class1,
    children,
}:{
    className?: string
    class1?: string
    children: ReactNode
}) =>{
    return(
        <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ', className)}>
            {children}
        </div>
        
    )
}

export default MaxWidthWrapper