import { useEffect, useState } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) ?? []
      : [];

  const [carrito, setCarrito] = useState(carritoLS);
  const [total, setTotal] = useState(0);

  const handleCantidad = (cantidad, id) => {
    const carritoActualizado = carrito.map((item) => {
      if (item.id == id) {
        item.cantidad = cantidad;
      }
      return item;
    });

    setCarrito(carritoActualizado);
  };

  const handleTotal = () => {
    const cantidad = carrito.reduce((total, item) => {
      return total + item.price * item.cantidad;
    }, 0);

    setTotal(cantidad);
  };

  const handleEliminar = (id) => {
    const carritoActualizado = carrito.filter((item) => item.id !== id);

    setCarrito(carritoActualizado);
  };

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));

    handleTotal();
  }, [carrito]);

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      setCarrito={setCarrito}
      handleCantidad={handleCantidad}
      handleEliminar={handleEliminar}
      total={total}
    />
  );
}
