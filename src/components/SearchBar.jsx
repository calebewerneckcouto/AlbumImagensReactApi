import React from 'react';

export const SearchBar = ({
  query,
  setQuery,
  categoria,
  setCategoria,
  setActivateSearch

}) => {
  const categorias = [
    "Natureza",
    "Animais",
    "Vida Selvagem",
    "Animais de Estimação",
    "Tecnologia",
    "Comida",
    "Bebidas",
    "Café",
    "Viagens",
    "Aventura",
    "Pessoas",
    "Retratos",
    "Arquitetura",
    "Prédios",
    "Interiores",
    "Moda",
    "Roupas",
    "Beleza",
    "Maquiagem",
    "Esportes",
    "Exercícios",
    "Yoga",
    "Negócios",
    "Escritório",
    "Startup",
    "Educação",
    "Livros",
    "Arte",
    "Pinturas",
    "Ilustração",
    "Música",
    "Instrumentos",
    "Shows",
    "Carros",
    "Motos",
    "Trens",
    "Aviação",
    "Saúde",
    "Medicina",
    "Hospital",
    "Espiritualidade",
    "Religião",
    "Meditação",
    "Cidades",
    "Urbano",
    "Ruas",
    "Mar",
    "Praia",
    "Oceano",
    "Montanhas",
    "Deserto",
    "Céu",
    "Estrelas",
    "Galáxia",
    "Espaço",
    "Abstrato",
    "Texturas",
    "Minimalismo",
    "Padrões",
    "Amor",
    "Família",
    "Casamento",
    "Bebês",
    "Clima",
    "Chuva",
    "Neve",
    "Pôr do Sol",
    "Primavera",
    "Verão",
    "Outono",
    "Inverno"
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="search-bar-controls">
        <button onClick={() => setActivateSearch(true)}>Pesquisar</button>

        <select
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            setActivateSearch(true);
          }}
        >
          <option value="">Todas categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>


      </div>
    </div>
  );
};
