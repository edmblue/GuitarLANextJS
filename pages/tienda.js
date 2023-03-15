import Layout from '@/components/layout';
import ListaProductos from '../components/lista-productos';

const Tienda = ({ productos }) => {
  return (
    <Layout
      title="Tienda"
      description="GuitarLa | Productos y servicios disponibles a cualquier hora del dia"
    >
      <main>
        <div className="contenedor">
          <h1 className="heading">Nuestros Productos</h1>
          <ListaProductos productos={productos} />
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=image`
  );
  const { data: productos } = await respuesta.json();

  return {
    props: {
      productos,
    },
  };
}

export default Tienda;
