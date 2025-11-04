import React, { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      img: "/imgs/iphone-blue.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      img: "/imgs/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      img: "/imgs/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512Gb ou 1Tb",
      battery: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.9 polegadas",
      storage: "256GB, 512Gb ou 1Tb",
      battery: "29h de vídeo",
      weight: "199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <section id="colors" className="bg-black py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Três acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                className="max-w-full max-h-[600px] mx-auto"
                src={colors.find((color) => color.id === selectedColor).img}
                alt="Imagem iPhone"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mb-12">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className="relative transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full border-4 cursor-pointer ${
                  color.colorClass
                } ${
                  selectedColor === color.id
                    ? "border-white scale-110"
                    : "border-gray-400"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-20 grid-cols-2">
          {models.map((model, index) => (
            <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
              <div className="text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-10 h-10 fill-white"
                >
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM128 440c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24zM304 64H80V368H304V64z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>
              <ul className="space-y-2 text-gray-200">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-2 p-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full cursor-pointer text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50">Compre agora a partir de R$9.299</button>
        <p className="p-4 text-gray-400 ">Ou em até 12x de R$ 774,92 sem juros</p> 
      </div>
    </section>
  );
}

export default Colors;
