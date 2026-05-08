import PCExplorer from "./components/PCExplorer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Spazio per aggiungere nuove sezioni */}
      <section className="min-h-40 p-8">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-20 text-center"> <strong className="text-6xl text-[#4ade80]">L'assemblaggio di un sogno</strong> </h2>

          {/* Esempio di casella di testo */}
          <div className="bg-gray-9000 p-6 rounded-lg mb-8">

            <p className="text-gray-300 leading-relaxed">
              Nell' estate del 2024 sono, dopo anni che lo ambivo, finalmente riuscito ad assemblare il mio primo PC fisso. <br></br>
              Ho sempre avuto un computer portatile con prestazioni medie-basse, ma sono riuscito a sfruttare l'inizio della terza superiore e il fatto che avrei dovuto usare software come Solid Edge per usufruire delle ricerche che per pura passione svolgevo già da almeno 3 anni, e ho concretizzato il mio sogno: assemblarmi una bestia di PC. <br></br> 
              <br></br>
              In seguito parlerò di come ho scelto tutti i componenti, e di come ci ho messo mano assemblando il tutto, ma per ora vorrei fare una panoramica del mio PC e dei componenti descrivendone brevemente la funzione.
            </p>
          </div>
        </div>
      </section>

      {/* inizio */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-9000 p-6 rounded-lg mb-0">
            <h3 className="text-xl font-semibold mb-0">Scopri i dettagli cliccando su ogni componente!</h3>
            <div className="flex flex-col md:flex-row gap-6">
              
            </div>
          </div>
        </div>
      </section>

      {/* Sezione PC Explorer */}
      <section className="mt-0 mb-6">
        <PCExplorer />
      </section>

      
      <section className="min-h-20 p-8">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-4xl text-[#4ade80]">Fase 1: la ricerca dei componenti</strong> </h2>
        </div>
      </section>

      
      {/* CPU */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed mb-4">
                → CPU <br />
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] ml-auto">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/cpu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GPU */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[40%] lg:w-[40%]">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/gpu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed p-10 mb-4">
                → GPU <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAM */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed mb-4">
                → RAM <br />
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] ml-auto">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/ram.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* schedamadre */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[40%] lg:w-[40%]">
              <div className="w-full h-120 overflow-hidden rounded-lg">
                <img
                  src="/schedamadre.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed p-10 mb-4">
                → Scheda Madre <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* case */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed mb-4">
                → Case <br />
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] ml-auto">
              <div className="w-full h-120 overflow-hidden rounded-lg">
                <img
                  src="/case.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ssd */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[40%] lg:w-[40%]">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/ssd.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed p-10 mb-4">
                → SSD <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* radiatore */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed mb-4">
                → Radiatore <br />
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] ml-auto">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/radiatore.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* psu */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[40%] lg:w-[40%]">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/psu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed p-10 mb-4">
                → PSU <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fans */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed mb-4">
                → Fans <br />
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] ml-auto">
              <div className="w-full h-100 overflow-hidden rounded-lg">
                <img
                  src="/fans.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl pr-1 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
