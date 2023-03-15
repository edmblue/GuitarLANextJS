import Layout from '@/components/layout';
import Image from 'next/image';
import blogStyle from '../../styles/blog.module.css';

const Entrada = ({ post }) => {
  const { title, content, createdAt, image } = post[0].attributes;
  const selectedImage = image.data.attributes.url;
  return (
    <Layout
      title={title}
      description={`Todo lo que tienes que saber sobre ${title}`}
    >
      <main>
        <div className={`contenedor ${blogStyle.post}`}>
          <Image
            width={800}
            height={600}
            src={selectedImage}
            alt={`Imagen de el post ${title}`}
          />
          <div className={blogStyle.contenido}>
            <h1>{title}</h1>
            <p className={blogStyle.fecha}>{createdAt}</p>
            <p className={blogStyle.texto}>{content}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/posts`);
  const { data: posts } = await respuesta.json();

  const paths = posts.map((post) => {
    return {
      params: {
        entrada: post.attributes.url,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { entrada } }) {
  const url = `${process.env.API_URL}/posts?filters[url]=${entrada}&populate=image`;
  const respuesta = await fetch(url);
  const { data: post } = await respuesta.json();

  console.log(url);

  return {
    props: {
      post,
    },
  };
}

export default Entrada;
