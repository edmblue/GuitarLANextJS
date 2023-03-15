import Image from 'next/image';
import Link from 'next/link';
import styleBlog from '../styles/blog.module.css';

const Post = ({ post }) => {
  const { title, content, createdAt, url, image } = post.attributes;

  const selectedImage = image.data.attributes.formats.small.url;

  return (
    <div className={styleBlog.post}>
      <Image
        width={800}
        height={200}
        src={selectedImage}
        alt={`Imagen de la entrada de blog ${title}`}
        priority
      />
      <div className={styleBlog.contenido}>
        <h3>{title}</h3>
        <p className={styleBlog.fecha}>{createdAt}</p>
        <p className={styleBlog.resumen}>{content}</p>
        <Link className={styleBlog.enlace} href={`/blog/${url}`}>
          Ver Entrada
        </Link>
      </div>
    </div>
  );
};

export default Post;
