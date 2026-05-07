import PCExplorer from "./components/PCExplorer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Spazio per aggiungere nuove sezioni */}
      <section className="min-h-40 p-8">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-20 text-center"> <strong className="text-6xl text-[#4ade80]">Assemblaggio di un sogno</strong> </h2>

          {/* Esempio di casella di testo */}
          <div className="bg-gray-1000 p-6 rounded-lg mb-8">

            <p className="text-gray-300 leading-relaxed">
              Nell' estate del 2024 sono, dopo anni che lo ambivo, finalmente riuscito ad assemblare il mio primo PC fisso. <br></br>
              Ho sempre avuto un computer portatile con prestazioni medie-basse, ma sono riuscito a sfruttare l'inizio della terza superiore e il fatto che avrei dovuto usare software come Solid Edge per usufruire delle ricerche che per pura passione svolgevo già da almeno 3 anni, e ho concretizzato il mio sogno: assemblarmi una bestia di PC. <br></br> 
              <br></br>
              In seguito parlerò di come ho scelto tutti i componenti, e di come ci ho messo mano assemblando il tutto, ma per ora vorrei fare una panoramica del mio PC e dei componenti descrivendone brevemente la funzione.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-0">
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

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione con immagine */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-1000 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Ricerca dei componenti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  → immagini + storia <br></br>
                  → compatibilità <br></br>
                  → specifiche <br></br>
                </p>
                <p className="text-gray-300 leading-relaxed">
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Immagine qui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
