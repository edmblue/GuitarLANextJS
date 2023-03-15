import Post from '@/components/post';
import styleGrid from '../styles/grid.module.css';
const ListaEntradas = ({ posts }) => {
  return (
    <div className={styleGrid.grid}>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default ListaEntradas;
