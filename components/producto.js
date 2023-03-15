import Image from 'next/image';
import Link from 'next/link';
import guitarraStyle from '../styles/guitarras.module.css';

const Producto = ({ item }) => {
  const { name, description, price, url, image } = item.attributes;

  const imageSelected = image.data.attributes.formats.small.url;

  return (
    <div className={guitarraStyle.guitarra}>
      <div>
        <Image
          width={250}
          height={100}
          src={imageSelected}
          alt={`Fotografia del producto ${name}`}
        />
      </div>
      <div className={guitarraStyle.contenido}>
        <h3>{name}</h3>
        <p className={guitarraStyle.descripcion}>{description} </p>
        <p>
          Price $<span className={guitarraStyle.precio}>{price} </span>
        </p>
        <Link href={`tienda/${url}`} className={guitarraStyle.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Producto;
