import Image from 'next/image';
import carritoStyle from '../styles/carrito.module.css';
import guitarraStyle from '../styles/guitarras.module.css';

const ItemCarrito = ({ item, handleCantidad, handleEliminar }) => {
  const { name, price, cantidad, selectedImage, id } = item;

  return (
    <div
      className={`${guitarraStyle.guitarra} ${carritoStyle['carrito-item']}  `}
      style={{ maxWidth: '48rem' }}
    >
      <Image
        height={250}
        width={400}
        src={selectedImage}
        alt={`Fotografia de la Guitarra ${name}`}
      />
      <div className={guitarraStyle.contenido}>
        <h3>{name}</h3>
        <p className={guitarraStyle['font-bold']}>
          Subtotal $<span className={guitarraStyle.precio}>{price}</span>
        </p>
        <form className={guitarraStyle.formulario}>
          <label htmlFor="cantidad-guitarra">Cantidad</label>
          <select
            name="cantidad-guitarra"
            id="cantidad-guitarra"
            value={cantidad}
            onChange={(e) => handleCantidad(+e.target.value, id)}
          >
            <option value="">-- Elija La Cantidad --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
        <p className={guitarraStyle['font-bold']}>
          Total
          <span className={guitarraStyle.precio}>${price * cantidad} </span>
        </p>
        <button
          onClick={() => handleEliminar(id)}
          className={carritoStyle['boton-eliminar']}
        >
          Eliminar Producto
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
