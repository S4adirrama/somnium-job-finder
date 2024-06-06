import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About the Somnium</h1>
          <p className='text-justify leading-7'>
          Salem Office - инструмент эффективного управления, автоматизации процессов и обеспечения безопасности документов. Автоматизируя процессы создания, утверждения и обмена документами, она обеспечивает эффективность и точность в рабочей среде. Анализ данных и интеграция с существующими системами позволяют принимать обоснованные решения на основе актуальных фактов.          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
    </div>
  );
};

export default About;
