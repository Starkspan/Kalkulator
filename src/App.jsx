import React, { useState } from "react";

function App() {
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [targetPrice, setTargetPrice] = useState("");

  const pricePerPiece = {
    Aluminium: 10,
    Edelstahl: 15,
    Stahl: 12,
    Messing: 20,
  };

  const calculatePrice = () => {
    const base = pricePerPiece[material] || 0;
    const discount = quantity >= 100 ? 0.85 : quantity >= 50 ? 0.9 : quantity >= 10 ? 0.95 : 1;
    return (base * discount).toFixed(2);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CNC Preisrechner</h1>

      <label>Material:</label>
      <select value={material} onChange={(e) => setMaterial(e.target.value)}>
        <option value="">Bitte wählen</option>
        <option value="Aluminium">Aluminium</option>
        <option value="Edelstahl">Edelstahl</option>
        <option value="Stahl">Stahl</option>
        <option value="Messing">Messing</option>
      </select>

      <br /><br />
      <label>Menge:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />

      <br /><br />
      <label>Zielpreis pro Stück (€):</label>
      <input type="number" value={targetPrice} onChange={(e) => setTargetPrice(e.target.value)} />

      <br /><br />
      <p>Berechneter Preis pro Stück: <strong>{calculatePrice()} €</strong></p>
    </div>
  );
}

export default App;