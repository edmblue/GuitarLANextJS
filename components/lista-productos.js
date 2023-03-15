import Producto from '@/components/producto';
import gridStyles from '../styles/grid.module.css';

const ListaProductos = ({ productos }) => {
  return (
    <div className={gridStyles.grid}>
      {productos?.map((item) => {
        return <Producto key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ListaProductos;
