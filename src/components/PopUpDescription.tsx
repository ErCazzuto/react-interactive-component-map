import { useEffect, useRef } from "react";
import { PCComponent } from "../data/components";

interface SidePanelProps {
  component: PCComponent | null;
  onClose: () => void;
}

export default function SidePanel({ component, onClose }: SidePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

return (
    <div
      ref={panelRef}
      className={`
        relative w-full h-3/4 flex flex-col overflow-hidden bg-black max-w-7xl mx-auto box-border
        flex flex-col justify-center px-0 mb-6
        bg-[#13161f] border border-white/10
        shadow-2xl shadow-black/80
        transition-all duration-500 ease-in-out
        rounded-2xl 
        ${component ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {component && (
        <div className="overflow-hidden rounded-2xl">
          <div
            className="rounded-t-2xl flex flex-col sm:flex-row sm:items-center justify-between overflow-hidden p-4 text-white shadow-2xl shadow-black/40 border-b border-white/10"
            style={{ backgroundImage: component.color }}
          >

            <div className="flex flex-col relative z-10">
              <span className="text-4xl mb-3 block">{component.icon}</span>
              <div className="inline-block px-2 rounded-full px-2 py-0.75 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest">
                {component.category}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white leading-snug drop-shadow-sm">
              {component.name}
            </h2>
            
            <button
              onClick={onClose}
              className="relative flex w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 hover:bg-black/60 transition-colors text-white hover:text-white"
              aria-label="Close panel"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex flex-col lg:flex-row gap-6 overflow-hidden custom-scrollbar">
            {/* Description */}
            <div className="flex-1 min-w-0 p-6 border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/10">
              <h3 className="text-md font-semibold uppercase tracking-widest text-white/40 mb-3">
                Generalità e funzione
              </h3>
              <p className="text-md text-white/70 leading-relaxed whitespace-pre-line">
                {component.description}
              </p>
            </div>

            {/* Specs */}
            <div className="w-full lg:w-2/5 min-w-0 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Specifiche tecniche
              </h3>
              <div className="space-y-2">
                {component.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{
                        backgroundImage: component.color,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {spec.key}
                    </span>
                    <span className="text-xs font-semibold text-white/90 text-right max-w-[55%]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
);

}