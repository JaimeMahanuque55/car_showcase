"use client"

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Encontre, reserve ou alugue um carro — rapidamente e facilmente!
            </h1>

            <p className="hero__subtitle">Otimize sua experiência de aluguel de carro com nosso processo de reserva sem esforço.</p>

            <CustomButton 
                title="Explore carros"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero;