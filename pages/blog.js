import Layout from '@/components/layout';
import ListaEntradas from '@/components/lista-entradas';

const Blog = ({ posts }) => {
  return (
    <Layout
      title="Blog"
      description="GuitarLA | Noticias e información de interes sobre guitarras y música"
    >
      <div className="contenedor">
        <h1 className="heading">Blog</h1>
        <ListaEntradas posts={posts} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const { data: posts } = await respuesta.json();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
