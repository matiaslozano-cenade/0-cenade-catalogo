"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { icono } from "./iconos";

export type Hoja = {
  rama: string;
  titulo: string;
  url: string;
  tipo?: string;
  icono?: string;
  contexto: string;
};

/** Sin tildes y en minúscula: "fundicion" tiene que encontrar "Fundición". */
function normalizar(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function Buscador({
  hojas,
  placeholder = "Buscar una pantalla…",
}: {
  hojas: Hoja[];
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const [activo, setActivo] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  // ⌘K / Ctrl+K enfoca el buscador desde cualquier parte de la página.
  useEffect(() => {
    function atajo(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.current?.focus();
      }
      if (e.key === "Escape") {
        setQ("");
        input.current?.blur();
      }
    }
    window.addEventListener("keydown", atajo);
    return () => window.removeEventListener("keydown", atajo);
  }, []);

  const resultados = useMemo(() => {
    const term = normalizar(q.trim());
    if (!term) return [];
    // Busca en el título y en el contexto, así "planificacion lagmet" y
    // "operaciones fundicion" también encuentran.
    return hojas
      .map((h) => {
        const titulo = normalizar(h.titulo);
        const texto = `${titulo} ${normalizar(h.contexto)} ${h.rama}`;
        if (!texto.includes(term)) return null;
        // Primero lo que empieza igual, después lo que solo contiene.
        return { h, peso: titulo.startsWith(term) ? 0 : titulo.includes(term) ? 1 : 2 };
      })
      .filter((r): r is { h: Hoja; peso: number } => r !== null)
      .sort((a, b) => a.peso - b.peso)
      .slice(0, 8)
      .map((r) => r.h);
  }, [q, hojas]);

  function teclas(e: React.KeyboardEvent) {
    if (!resultados.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActivo((i) => (i + 1) % resultados.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActivo((i) => (i - 1 + resultados.length) % resultados.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const h = resultados[activo];
      // Misma pestaña, igual que las fichas; solo los sitios públicos van aparte.
      if (h.tipo === "sitio") window.open(h.url, "_blank", "noopener,noreferrer");
      else window.location.assign(h.url);
      setQ("");
    }
  }

  return (
    <div className="pc-buscador">
      <label className="pc-buscador-caja">
        <Search className="pc-ico-s" />
        <input
          ref={input}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActivo(0);
          }}
          onKeyDown={teclas}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <kbd>⌘K</kbd>
      </label>

      {q.trim() !== "" && (
        <div className="pc-resultados">
          {resultados.length === 0 ? (
            <p className="pc-vacio">Nada con “{q}”.</p>
          ) : (
            resultados.map((h, i) => {
              const Icon = icono(h.icono);
              return (
                <a
                  key={h.rama}
                  href={h.url}
                  {...(h.tipo === "sitio"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onMouseEnter={() => setActivo(i)}
                  className={i === activo ? "pc-resultado pc-activo" : "pc-resultado"}
                >
                  <Icon className="pc-ico-s pc-ico-acento" />
                  <span className="pc-texto">
                    <span className="pc-titulo">{h.titulo}</span>
                    {h.contexto && <span className="pc-bajada">{h.contexto}</span>}
                  </span>
                  <ArrowUpRight className="pc-ico-s pc-flecha" />
                </a>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
