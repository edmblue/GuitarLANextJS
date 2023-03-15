import { useState } from 'react';
import Layout from '@/components/layout';
import stylesGuitarra from '../../styles/guitarras.module.css';

const GuitarraUrl = ({ guitarraSeleccionada, carrito, setCarrito }) => {
  const { name, description, price, image } =
    guitarraSeleccionada[0].attributes;

  const [cantidad, setCantidad] = useState(0);

  const selectedImage = image.data.attributes.url;

  const agregarAlCarrito = (e) => {
    e.preventDefault();

    const itemObj = {
      name,
      price,
      selectedImage,
      cantidad,
      id: guitarraSeleccionada[0].id,
    };

    if (carrito.some((item) => item.id === itemObj.id)) {
      const carritoActualizado = carrito.map((item) => {
        if (item.id === itemObj.id) {
          item.cantidad = itemObj.cantidad;
        }

        return item;
      });

      setCarrito(carritoActualizado);
      alert('Cantidad Actualizada');

      return;
    }

    setCarrito((carrito) => [...carrito, itemObj]);
    alert('Articulo Añadido');
  };

  return (
    <Layout title={name} description={`Información de la Guitarra ${name}`}>
      <div className="contenedor">
        <div className={stylesGuitarra.guitarra}>
          <img src={selectedImage} alt={`Fotografia de la guitarra ${name}`} />
          <div className={stylesGuitarra.contenido}>
            <h3>{name} </h3>
            <p className={stylesGuitarra.descripcion}>{description} </p>
            <p>
              Precio: $<span className={stylesGuitarra.precio}>{price}</span>
            </p>
            <form className={stylesGuitarra.formulario}>
              <label htmlFor="cantidad-guitarra">Cantidad</label>
              <select
                name="cantidad-guitarra"
                id="cantidad-guitarra"
                value={cantidad}
                onChange={(e) => setCantidad(+e.target.value)}
              >
                <option value="">-- Elija La Cantidad --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button
                onClick={agregarAlCarrito}
                className={stylesGuitarra.enlace}
              >
                Añadir al Carrito
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data: guitarras } = await respuesta.json();

  const paths = guitarras.map((item) => {
    const obj = {
      params: {
        url: item.attributes.url,
      },
    };

    return obj;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlApi = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`;
  const respuesta = await fetch(urlApi);
  const { data: guitarraSeleccionada } = await respuesta.json();

  return {
    props: {
      guitarraSeleccionada,
    },
  };
}

export default GuitarraUrl;
