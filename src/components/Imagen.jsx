import './stylesGallery.css' 

function Imagen() {
  const url =
    "https://st4.depositphotos.com/4749861/25333/i/450/depositphotos_253332156-stock-photo-landscapes-image-of-mt-fuji.jpg";

  return (
    <div className="relative z-10 overflow-hidden w-full h-full rounded-lg shadow-xl img-container"> 
      <div className="w-full h-full">
        <img src={url} alt="imagen-azuabana" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 text-gray-200 z-20 flex-col w-full h-full p-6 content-text gap-5">
        <h5 className='text-xl'>Titulo</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          provident magnam eum aspernatur quam ipsam repellat ullam? Nesciunt,
          repudiandae officiis!
        </p>
      </div>
    </div>
  );
}

export default Imagen;
