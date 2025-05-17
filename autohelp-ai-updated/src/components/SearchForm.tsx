
import { useState } from "react";

const SearchForm = () => {
  const [carModel, setCarModel] = useState("");
  const [problem, setProblem] = useState("");
  const [level, setLevel] = useState("beginner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Model: ${carModel}\nProblém: ${problem}\nÚroveň: ${level}`);
    // Zde později volání OpenAI API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <div>
        <label className="block font-medium mb-1">Model vozu</label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Popis problému nebo kód chyby</label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="w-full border rounded p-2"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Úroveň vysvětlení</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="beginner">Začátečník</option>
          <option value="professional">Profesionál</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Odeslat dotaz
      </button>
    </form>
  );
};

export default SearchForm;
