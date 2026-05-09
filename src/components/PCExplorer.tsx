import { useState } from "react";
import SidePanel from "./SidePanel";
import PopUpDescription from "./PopUpDescription";
import { components, PCComponent } from "../data/components";
import MediaQuery from 'react-responsive';

export default function PCExplorer() {
  const [selected, setSelected] = useState<PCComponent | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleSelect = (comp: PCComponent) => {
    if (selected?.id === comp.id) {
      setSelected(null);
    } else {
      setSelected(comp);
    }
  };

  return (
    <div className="relative w-full h-3/4 flex flex-col overflow-hidden bg-black max-w-7xl mx-auto ">
      <div className="flex flex-col justify-center relative">
        {/* Image container */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out">
          {/* Background atmosphere */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-900/8 rounded-full blur-3xl" />
          </div>

          {/* Image wrapper */}
          <div className="relative w-full select-none px-4 py-6">
            <img
              src="/pc-components.jpg"
              alt="PC Components Exploded View"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl shadow-black/70 border border-white/5"
              draggable={false}
            />

            {/* Hotspot overlays */}
            {components.map((comp) => {
              const isSelected = selected?.id === comp.id;
              const isHovered = hovered === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => handleSelect(comp)}
                  onMouseEnter={() => setHovered(comp.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute cursor-pointer focus:outline-none group"
                  style={{
                    left: `${comp.x}%`,
                    top: `${comp.y}%`,
                    width: `${comp.w}%`,
                    height: `${comp.h}%`,
                    transform: isSelected
                      ? "scale(1.06)"
                      : isHovered
                      ? "scale(1.03)"
                      : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                    borderRadius: "12px",
                    border: isSelected
                      ? "2px solid rgba(34, 211, 238, 0.8)"
                      : isHovered
                      ? "2px solid rgba(255,255,255,0.35)"
                      : "2px solid transparent",
                    background: isSelected
                      ? "rgba(34, 211, 238, 0.1)"
                      : isHovered
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                    boxShadow: isSelected
                      ? "0 0 20px rgba(34, 211, 238, 0.25), inset 0 0 20px rgba(34,211,238,0.05)"
                      : "none",
                    zIndex: isSelected || isHovered ? 10 : 1,
                  }}
                  title={comp.name}
                  aria-label={`View ${comp.name} details`}
                >
                  {/* Tooltip label */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-all duration-200"
                    style={{
                      opacity: isSelected || isHovered ? 1 : 0,
                      transform: `translateX(-50%) translateY(${isSelected || isHovered ? "0" : "4px"})`,
                    }}
                  >
                    <div
                      className={`
                        text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg
                        ${isSelected
                          ? "bg-cyan-400 text-black"
                          : "bg-black/80 text-cyan-300 border border-white/10"
                        }
                      `}
                    >
                      {comp.label}
                    </div>
                    <div className={`w-1 h-1 mx-auto rounded-full mt-0.5 ${isSelected ? "bg-cyan-400" : "bg-white/30"}`} />
                  </div>

                  {/* Corner indicator dot */}
                  {(isSelected || isHovered) && (
                    <div className="absolute top-1.5 right-1.5 flex gap-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-cyan-400" : "bg-white/50"}`} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Side Panel */}
        <MediaQuery query="(min-width: 1280px)">
          <PopUpDescription component={selected} onClose={() => setSelected(null)} />
        </MediaQuery>

        <MediaQuery query="(max-width: 1280px)">
          <SidePanel component={selected} onClose={() => setSelected(null)} />
        </MediaQuery>

      </div>
    </div>
  );
}
