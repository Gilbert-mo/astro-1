import Imagen from "./Imagen";

function Galeria() {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center">
        <h2 class="text-5xl px-4 mb-8 font-medium">
          ¡Galería de
          <span className="text-green-500 font-bold"> Imágenes</span>!
        </h2>
        <p className="px-8 text-center text-xl mx-auto">
        Descubre nuestro <span className="text-green-500 font-bold">trabajo en acción</span> a través de estas imágenes que muestran nuestro compromiso con la excelencia y la calidad
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 :grid-rows-4 min-w-0 max-w-screen-2xl mx-auto px-4 my-12 gap-6">
        <div className="row-span-2 w-full h-full">
          <Imagen />
        </div>
        <Imagen />
        <div className="row-span-2 md:col-span-2">
          <Imagen />
        </div>
        <Imagen />
        <div className="row-span-2 md:col-span-2">
          <Imagen />
        </div>
        <div className="row-span-2">
          <Imagen />
        </div>
        <div className="row-span-2 ">
          <Imagen />
        </div>
        <div className="md:col-span-2">
          <Imagen />
        </div>
        <Imagen />
        <Imagen />
      </div>
    </section>
  );
}

export default Galeria;
