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
    <section id="colors" className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor{" "}
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
                alt="Imagem Iphone"
              ></img>
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
        <div className=" flex items-center justify-center gap-5 "> 
            {colors.map((color)=> (
                <button className={`relative transition-all duration-300`} key={color.id} onClick={() => setSelectedColor(color.id)}>
                    <div className={`w-16 h-16 rounded-full border-4 cursor-pointer ${color.colorClass} ${selectedColor === color.id ? 'border-white ': 'border-gray-400'}`}>
                    </div>
                </button>
            ))}
        </div>
        <div>
            {models.map( (model, index) => (
                <div key ={index}>
                    <div></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
export default Colors;

