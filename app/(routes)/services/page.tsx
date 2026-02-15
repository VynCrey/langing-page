import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SilderServices from "@/components/slider-services";
import TransitionPage from "@/components/transitionPage";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl 
      gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "} 
            <span className="font-bold text-secondary">
              servicios.
            </span>
          
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco una variedad de servicios para ayudar a llevar tu proyecto al siguiente nivel,
            desde el desarrollo web hasta la optimización de rendimiento y la consultoría técnica.
            <button className="pc-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
          </p>
        </div>
        {/* Slider(Carrusel) */}
        <div>
          <SilderServices />
        </div>
      </div>
    </>

  );
}

export default ServicesPage;