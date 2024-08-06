import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { DUMMYPOSTS } from '@/lib/data';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {DUMMYPOSTS.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
