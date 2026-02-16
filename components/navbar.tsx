"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";

import  MotionTransition  from "./transition-component";



const Navbar = () => {
    const router = usePathname()
    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backgraund-blur-sm">
                {itemsNavbar.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={`px-3 py-2 transition duration-150 rounded-full 
                            cursor-pointer hover:bg-secondary 
                            ${router === item.link && 'bg-secondary'}`}
                    >
                        {item.icon}
                    </Link>
                ) )}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;