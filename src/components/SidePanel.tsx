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
        fixed right-6 top-6 bottom-6 w-[400px] z-30
        flex flex-col
        bg-[#13161f] border border-white/10
        shadow-2xl shadow-black/80
        transition-all duration-500 ease-in-out
        rounded-2xl overflow-hidden
        ${component ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {component && (
        <>
          {/* Panel header */}
          <div
            className="relative overflow-hidden p-6 text-white shadow-2xl shadow-black/40 border-b border-white/10"
            style={{ backgroundImage: component.color }}
          >

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 hover:bg-black/60 transition-colors text-white hover:text-white"
              aria-label="Close panel"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              <span className="text-4xl mb-3 block">{component.icon}</span>
              <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest mb-2">
                {component.category}
              </div>
              <h2 className="text-xl font-bold text-white leading-snug drop-shadow-sm">
                {component.name}
              </h2>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Description */}
            <div className="p-6 border-b border-white/8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                Generalità e funzione
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {component.description}
              </p>
            </div>

            {/* Specs */}
            <div className="p-6">
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
        </>
      )}
    </div>
  );
}
