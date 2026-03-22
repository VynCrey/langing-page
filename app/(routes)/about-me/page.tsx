import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transitionPage";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";


const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center 
        md:text-left md:text-5xl md:mt-10">Sobre mi {' '}
          <span className="font-bold text-secondary">experiencia</span>
        </h1>
        {/* <CounterServices /> */}
        <p className="text-gray-300 leading-relaxed md:text-2xl md:mt-4">
          Soy técnico en Ciencia de Datos e Inteligencia Artificial,
          enfocado en el desarrollo de soluciones basadas en datos. <br />

          Tengo experiencia construyendo pipelines ETL, dashboards y modelos
          de machine learning utilizando Python y SQL. <br />

          Actualmente estoy desarrollando proyectos prácticos orientados a negocio
          y buscando oportunidades freelance y sumar experiencia profesional
          en el área de datos.
        </p>
        <TimeLine />
      </ContainerPage>
    </>

  );
}

export default PageAboutMe;