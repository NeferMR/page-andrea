"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaTimes } from 'react-icons/fa';

export function Formulario({handleFormClose}) {

  return (
    <div className="flex flex-col min-h-[100dvh] absolute w-full bg-black bg-opacity-50">
      <div>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
          <div className="flex justify-between pr-4 items-center">
          <h2 className="text-2xl font-bold mb-4 text-[#FF3131]">
            Reservar tu Viaje
          </h2>
          <button onClick={handleFormClose}><FaTimes color="black" size={24}/></button>
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Ingresa tu nombre" type="text" />
            </div>
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" placeholder="Ingresa tu correo" type="email" />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Ingresa tu teléfono" type="tel" />
            </div>
            <div>
              <Label htmlFor="date">Fecha de Viaje</Label>
              <Input id="date" type="date" />
            </div>
            <div>
              <Label htmlFor="guests">Número de Personas</Label>
              <Input
                id="guests"
                min="1"
                placeholder="Ingresa la cantidad"
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje"
                rows="3"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit">Reservar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
