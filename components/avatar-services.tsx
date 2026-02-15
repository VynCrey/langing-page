import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarServices = () => {
  return (
    <MotionTransition position="right" 
    className="bottom-0 left-0 hidden md:inline md:absolute">
        <Image src="/services-1.PNG" width={300} height={300} className="w-[350px] h-full" alt="Avatar" />
    </MotionTransition>
  );
};

export default AvatarServices;