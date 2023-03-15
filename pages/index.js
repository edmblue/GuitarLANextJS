import Layout from '@/components/layout';
import ListaEntradas from '@/components/lista-entradas';
import ListaProductos from '../components/lista-productos';
import styleCurso from '../styles/curso.module.css';

export default function Home({ productos, posts, curso }) {
  const { title, description, image } = curso.data.attributes;

  const imageSelected = image.data.attributes.url;

  return (
    <Layout
      title="Inicio"
      description="GuitarLA | Pagina principal donde se verá disponible todos los articulos y productos que tenemos en linea"
    >
      <div className="contenedor">
        <div>
          <main>
            <h1 className="heading">Nuestros Productos</h1>
            <ListaProductos productos={productos.data} />
          </main>
          <style jsx>
            {`
              .curso-wrapper {
                background-image: linear-gradient(to right, rgba(0 0 0 / .75), rgba(0 0 0 / .60)), url(${imageSelected}) ;
              }
            `}
          </style>
          <div className={`${styleCurso.curso} curso-wrapper`}>
            <div className={styleCurso.grid}>
              <div className={styleCurso.contenido}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading">Blog</h2>
            <ListaEntradas posts={posts.data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [resProductos, resEntradas, resCurso] = await Promise.all([
    fetch(`${process.env.API_URL}/guitarras?populate=image`),
    fetch(`${process.env.API_URL}/posts?populate=image`),
    fetch(`${process.env.API_URL}/curso?populate=image`),
  ]);

  const [productos, posts, curso] = await Promise.all([
    resProductos.json(),
    resEntradas.json(),
    resCurso.json(),
  ]);

  return {
    props: {
      productos,
      posts,
      curso,
    },
  };
}
