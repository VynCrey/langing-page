'use client';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";   

const Introduction = () => {
    return (
        <div className= 'z-20 w-full bg-darkBg/60'>
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-3.png" priority width={500} height={500} alt="Profile pic" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> 
                    Si puedes pensarlo,
                    <TypeAnimation

                        sequence={[
                            "puedes programarlo",
                            1000,
                            "puedes optimizarlo",
                            1000,
                            "puedes implementarlo",
                            1000,
                            "puedes desarrollarlo",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                    
                    />

                    </h1>
                    
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    ¡Hola! Soy Cristian, un apasionado desarrollador de software con experiencia en la creación de soluciones innovadoras y eficientes. Me especializo en transformar ideas en aplicaciones funcionales que impulsan el éxito empresarial.
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                        href="/projects" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyectos
                        </Link>
                        <Link 
                        href="/contact" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contacta conmigo
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Introduction;