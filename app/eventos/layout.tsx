'use client'
import FlyLogo from "@/components/FlyLogo";
import { useEffect, useState } from "react";

export default function EventoLayout({ children } : Readonly<{children : React.ReactNode}>) {
    const [visible, setVisible] = useState(true)

    function TotallySpies(){
        
        useEffect(() => {
            const timer = setTimeout(() => {
                setVisible(false)
            }, 2000)
    
            return () => clearTimeout(timer)
        },[])
    
        if(!visible) return null
    
        return <FlyLogo/>
    }


    return (
        <>
            <div style={{position: "fixed", zIndex: 10}}>
                {TotallySpies()}
            </div>
            <div>
                {children}
            </div>
        </>
    )
}