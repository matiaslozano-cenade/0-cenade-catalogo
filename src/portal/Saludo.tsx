"use client";

import { useEffect, useState } from "react";

/**
 * La línea chica sobre el título: fecha de hoy y saludo según la hora, en hora
 * de Chile. Se calcula en el navegador y después de montar: hay portales que se
 * generan estáticos (Demo), y ahí una fecha puesta en el servidor quedaría
 * congelada en el día del deploy.
 */
export function Saludo({ nombre, respaldo = "Portal interno" }: { nombre?: string | null; respaldo?: string }) {
  const [texto, setTexto] = useState<string | null>(null);

  useEffect(() => {
    const ahora = new Date();
    const zona = "America/Santiago";
    const fecha = new Intl.DateTimeFormat("es-CL", { timeZone: zona, weekday: "long", day: "numeric", month: "long" }).format(ahora);
    const hora = Number(new Intl.DateTimeFormat("es-CL", { timeZone: zona, hour: "numeric", hour12: false }).format(ahora));
    // De madrugada sigue siendo «buenas noches».
    const saludo = hora < 6 ? "Buenas noches" : hora < 12 ? "Buenos días" : hora < 20 ? "Buenas tardes" : "Buenas noches";
    // Solo el primer nombre, y solo si es un nombre (no un correo).
    const primero = nombre && !nombre.includes("@") ? nombre.trim().split(/\s+/)[0] : null;
    setTexto(`${fecha} · ${saludo}${primero ? `, ${primero}` : ""}`);
  }, [nombre]);

  return (
    <p className="pc-saludo">
      <span className="pc-saludo-punto" aria-hidden />
      {texto ?? respaldo}
    </p>
  );
}
