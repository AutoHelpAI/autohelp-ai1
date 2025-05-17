
import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
  const [view, setView] = useState<"home" | "search" | "history">("home");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AutoHelp AI</h1>
        <nav className="space-x-4">
          <button onClick={() => setView("home")} className="hover:underline">Domů</button>
          <button onClick={() => setView("search")} className="hover:underline">Zadat dotaz</button>
          <button onClick={() => setView("history")} className="hover:underline">Historie</button>
        </nav>
      </header>

      <main className="p-6">
        {view === "home" && (
          <section className="text-center mt-10">
            <h2 className="text-3xl font-semibold mb-4">Vítejte na AutoHelp AI</h2>
            <p className="text-lg text-gray-600">Zadejte kód chyby, popis problému nebo model vozu a získejte řešení.</p>
          </section>
        )}

        {view === "search" && (
          <section className="text-center mt-10">
            <SearchForm />
          </section>
        )}

        {view === "history" && (
          <section className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-4">Historie dotazů (zatím prázdná)</h2>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
