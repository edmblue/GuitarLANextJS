import { useEffect, useState } from 'react';
import carritoStyle from '../styles/carrito.module.css';
import Layout from '@/components/layout';
import ItemCarrito from '@/components/itemCarrito';

const Carrito = ({ carrito, handleCantidad, handleEliminar, total }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <Layout
      title="Carrito"
      description="GuitarLA | Todos los articulos pendientes por adquirir"
    >
      <main>
        {isRendered ? (
          <div className={`contenedor ${carritoStyle['carrito-grid']}`}>
            <div>
              <h2>Articulos</h2>
              <div>
                {carrito?.length
                  ? carrito?.map((item) => (
                      <ItemCarrito
                        handleCantidad={handleCantidad}
                        handleEliminar={handleEliminar}
                        item={item}
                        key={item.id}
                      />
                    ))
                  : 'Añada elementos a su carrito'}
              </div>
            </div>
            <aside className={carritoStyle.resumen}>
              <h2>Resumen del pedido</h2>
              <div>
                <p className={carritoStyle.total}>
                  Total a pagar: $<span>{total}</span>
                </p>
              </div>
            </aside>
          </div>
        ) : (
          'Cargando...'
        )}
      </main>
    </Layout>
  );
};

export default Carrito;
