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
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-7"> 
                    Data Engineer Jr:
                    <TypeAnimation

                        sequence={[
                            "Python",
                            1000,
                            "SQL",
                            1000,
                            "ETL",
                            1000,
                            "Machine Learning",
                            1000,
                            "APIs",
                            1000,
                            "Dashboards",
                            1000,
                            "Flask",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                    
                    />

                    </h1>
                    
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Construyo pipelines de datos, dashboards y soluciones de machine learning para transformar datos en decisiones.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                            href="/portfolio" 
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyectos
                        </Link>
                        <Link 
                            href="/services"
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