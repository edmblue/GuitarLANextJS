import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '../styles/nosotros.module.css';

const nosotros = ({ nosotrosInfo }) => {
  const { content, image, title } = nosotrosInfo.attributes;

  const selectedImage = image.data.attributes.url;
  return (
    <Layout
      title="Nosotros"
      description="GuitarLA - Descripcion de lo que somos como empresa y lo que esperamos ofrecer"
    >
      <div className="contenedor">
        <main>
          <div className={styles['nosotros-grid']}>
            <div>
              <Image
                src={selectedImage}
                alt="Imagén demostrativa Nosotros"
                width={500}
                height={0}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            <div>
              <h1 className="heading">{title}</h1>
              <div className={styles.content}>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/info-nosotros?populate=image`
  );
  const { data: nosotrosInfo } = await respuesta.json();

  return {
    props: {
      nosotrosInfo,
    },
  };
}

export default nosotros;
