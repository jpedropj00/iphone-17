function Highlights() {
    return (
        <section className="bg-black py-20 px-6 " id="design">
            <div className="max-2-7xl mx-auto">
                <div className="text-center mb-16"> 
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionário </h2>
                    <p className="text-xl text-gray-400"> Cada detalhe foi pensado para criar a melhor experiência para você</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-16"> 
                    <div className="bg-gray-900 rounded-3xl p-8 cursor-pointer transition-all hover:scale-105 duration-300"> 
                        <img className="w-full rounded-2xl mb-4"src="../../public/imgs/titanium-design.jpg" alt="Iphone Titanium"></img>
                        <h3 className="font-bold mb-2 text-3xl ">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. o smartphone mais forte e leve.</p>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 cursor-pointertransition-all hover:scale-105 duration-300">
                        <img  className="w-full rounded-2xl mb-4" src="../../public/imgs/ios-features.jpg" alt="Imagem Iphones"></img>
                        <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="perfomance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro </h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl" src="../../public/imgs/chip-a18-pro.jpg" alt="Imagem Iphone Chip"></img>
                    <ul className="space-y-3 text-gray-300">
                        <li className="mt-4">CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray toucing acelerado por hardware</li>
                    </ul>
                </div>
                <div id="camera" className="text-center">
                    <h3 className="font-bold text-4xl mb-10">Sistema de Câmera Pro avançado</h3>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-orange-800 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4> 
                            <p className="text-gray-400">Campo de visão de 120° com modo noturno</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x </h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Highlights