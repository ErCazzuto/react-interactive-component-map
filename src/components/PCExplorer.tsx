import { useState } from "react";
import SidePanel from "./SidePanel";
import { components, PCComponent } from "../data/components";

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
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0b0d14]">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0f1117]/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-widest uppercase text-white/95 leading-none">
              PC Build Explorer
            </h1>
            <p className="text-[10px] text-white/30 tracking-widest uppercase mt-0.5">AMD Ryzen Gaming Build</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Component count badges */}
          <div className="hidden md:flex items-center gap-2">
            {["CPU", "GPU", "RAM", "SSD", "AIO", "PSU", "Fans", "Case"].map((label) => (
              <span
                key={label}
                className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 uppercase tracking-widest"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-white/30 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Click to inspect
          </div>
        </div>
      </header>

      {/* Main area */}
      <div className="flex flex-1 relative">
        {/* Image container */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out"
          style={{ marginRight: selected ? "400px" : "0" }}
        >
          {/* Background atmosphere */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-900/8 rounded-full blur-3xl" />
          </div>

          {/* Image wrapper */}
          <div className="relative w-full max-w-5xl mx-auto select-none px-4 py-6">
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

          {/* Bottom legend */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 flex-wrap px-4">
            {components.map((comp) => (
              <button
                key={comp.id}
                onClick={() => handleSelect(comp)}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest
                  transition-all duration-200 border
                  ${selected?.id === comp.id
                    ? "bg-cyan-400/20 border-cyan-400/60 text-cyan-300"
                    : "bg-white/5 border-white/10 text-white/40 hover:text-white/70 hover:bg-white/10"
                  }
                `}
              >
                <span>{comp.icon}</span>
                <span>{comp.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Side Panel */}
        <SidePanel component={selected} onClose={() => setSelected(null)} />
      </div>

      {/* Bottom status bar */}
      <div
        className="relative z-10 flex items-center justify-between px-6 py-2 border-t border-white/5 bg-[#0f1117]/80 transition-all duration-500"
        style={{ marginRight: selected ? "400px" : "0" }}
      >
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          {components.length} components detected
        </p>
        {selected && (
          <p className="text-[10px] text-cyan-400/60 tracking-widest uppercase animate-pulse">
            ● {selected.name} selected
          </p>
        )}
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          Press ESC to deselect
        </p>
      </div>
    </div>
  );
}
