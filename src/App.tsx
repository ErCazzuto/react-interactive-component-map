import PCExplorer from "./components/PCExplorer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Spazio per aggiungere nuove sezioni */}
      <section className="min-h-40 p-8">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center"> <strong className="text-4xl text-[#4ade80]">Assemblaggio di un PC fisso</strong> </h2>

          {/* Esempio di casella di testo */}
          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Titolo della sezione</h3>
            <p className="text-gray-300 leading-relaxed">
              Questo è un esempio di casella di testo. Puoi modificare questo contenuto
              e aggiungere tutte le sezioni che vuoi qui sotto.
            </p>
          </div>

          {/* Esempio di sezione con immagine */}
          <div className="bg-gray-900 p-6 rounded-lg mb-2">
            <h3 className="text-xl font-semibold mb-4">Sezione con immagine</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Qui puoi aggiungere testo accanto a un'immagine.
                  La struttura è flessibile e puoi personalizzarla come preferisci.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Aggiungi quanti paragrafi vuoi e organizza il contenuto
                  nel modo che più ti piace.
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

      {/* Sezione PC Explorer */}
      <section className="mb-8">
        <PCExplorer />
      </section>
    </div>
  );
}
