"use client";

import Link from "next/link";
// import { Stage, Layer, Star } from 'react-konva';
import { FaStar } from "react-icons/fa";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { useState, useRef, useEffect } from "react";
import { Formulario } from "@/components/component/formulario";
import { arc, pie, star } from "./svgutils";

export default function Princi() {
  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const starPath = star(200, 200, 8, 80, 200);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {formOpen && (
          <Formulario handleFormClose={handleFormClose} />
        )}
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#FF3131] text-white">
        <Link className="flex items-center justify-center" href="#">
          <img src="logo.webp" alt="logo" className="h-12 pl-8" />
          <span className="sr-only">RHCB</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sobre Nosotros
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-30 bg-[#FFC823]">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#FF3131]">
                  Descubre los mejores destinos turisticos barranquilleros
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4"
                  style={{ textWrap: "balance" }}
                >
                  Te acompañamos a conocer lo mejor de curramba la bella y asi
                  disfrutar de una experiencia inolvidable.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#0F782B] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#25D366]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] disabled:pointer-events-none disabled:opacity-50"
                    href=""
                    onClick={handleFormOpen}
                  >
                    Reservar
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-custom-green">
                <svg width="100px" height="100px" viewBox="0 0 400 400">
                  <rect width="600" height="600" fill="transparent" />
                  <path
                    d={starPath}
                    fill="rgba(255,255,255, 1)"
                    stroke="rgba(255,255,255,0.2"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF3131] text-white">
          <div className="w-full space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios turísticos para que
                  puedas disfrutar de Barranquilla al máximo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              <div className="grid gap-1 h-full content-center">
                <h3 className=" text-6xl font-bold text-[#FFC823]">Carnaval</h3>
                <p className="text-lg text-gray-100">
                  Si bien el carnaval es una de las fiestas más importantes, no
                  solo para Barranquilla, sino para el país en general, es más
                  que una fiesta donde reinan disfraces, música, comparsas y
                  carrosas, existe un trasfondo histórico y cultural detrás de
                  esta maravillosa celebración.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex flex-col items-start space-y-4">
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex flex-col items-start space-y-4">
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                </div>
              </div>
              <div className="grid gap-1 h-full content-center">
                <h3 className="text-6xl font-bold text-[#FFC823]">
                  Una nueva cara
                </h3>
                <p className="text-lg text-gray-100 dark:text-gray-100 ">
                  El cual está muy relacionado con la historia y tradiciones que
                  convergieron en Barranquilla y la hicieron la ciudad que
                  conocemos ahora, eso es lo que queremos que las personas
                  vivan, disfruten y sientan a través de nuestras rutas, otra
                  cara, otra perspectiva de lo que solemos ver en Barranquilla
                  como ciudad.
                </p>
              </div>
              <div className="grid gap-1 h-full content-center">
                <h3 className="text-6xl font-bold text-[#FFC823]">
                  ¿Estás listo?
                </h3>
                <p className="text-lg text-gray-100 dark:text-gray-100">
                  Estamos acostumbrados a ver la ciudad, pero no la leemos...
                  Las calles, las casas, las infraestructuras, nos cuentan
                  historias, ¿estás listo para escucharlas?
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex flex-col items-start space-y-4">
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className=" mt-20 inline-flex h-10 items-center justify-center rounded-md bg-[#0F782B] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#25D366]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] disabled:pointer-events-none disabled:opacity-50"
                href="#"
                onClick={handleFormOpen}
              >
                Reservar
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF3131] text-white">
          <div className="grid items-center justify-center gap-8 px-8 text-center grid-cols-3 md:px-6">
            <h2 className="text-3xl text-custom-yellow font-bold tracking-tighter md:text-4xl/tight">
              Misión
            </h2>
            <h2 className="text-3xl text-green-500 font-bold tracking-tighter md:text-4xl/tight">
              Visión
            </h2>
            <h2 className="text-3xl text-custom-yellow font-bold tracking-tighter md:text-4xl/tight">
              Valores
            </h2>
            <p className="mx-auto text-justify max-w-[600px] text-gray-100 md:text-sm/relaxed lg:text-sm/relaxed xl:text-lg/relaxed">
              Promover la historia y orígenes de Barranquilla, así como su
              riqueza cultural, demostrar que está es más que carnaval y
              preservar la identidad de la ciudad y la costa Caribe en general a
              través de una experiencia turística inmersiva y educativa.
            </p>
            <p className="mx-auto text-justify max-w-[600px] text-gray-100 md:text-sm/relaxed lg:text-sm/relaxed xl:text-lg/relaxed">
              Convertirse en la ruta turística líder en Barranquilla, destacando
              su patrimonio histórico y cultural como motor de desarrollo
              turístico sostenible y generador de identidad local.
            </p>

            <p className="mx-auto text-justify max-w-[600px] text-gray-100 md:text-sm/relaxed lg:text-base/relaxed xl:text-base/relaxed">
              <strong>Respeto:</strong> Por la historia, la cultura, el
              patrimonio y lastradiciones de Barranquilla. <br />
              <strong>Autenticidad:</strong> Ofrecer una experiencia genuina y
              representativa de la identidad barranquillera. <br />
              <strong>Inclusión:</strong> Brindar una experiencia accesible y
              enriquecedora para visitantes de todas las edades <br />
              <strong>Sostenibilidad:</strong> Promover el turismo responsable
              que beneficia a la comunidad y preserva el patrimonio cultural.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFC823]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#FF3131]">
                  Sobre Nosotros
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  style={{ textWrap: "balance" }}
                >
                  Somos un Tour Operador que busca mediante la realización de
                  tours por la ciudad de Barranquilla, promover, preservar y
                  posicionar a la ciudad como uno de los destinos líder de
                  Colombia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5 lg:gap-12">
              <div className="grid gap-3">
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Andrea Betancourt </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Guía turístico
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Valentina Iscala</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Guía turístico
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Maria Gutierrez</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Guía turístico
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Juan Gonzalez</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Guía turístico
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Elvis Ocampo</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Guía turístico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#FF3131] text-white">
        <p className="text-xs">© 2024 RHCB. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos y Condiciones
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
