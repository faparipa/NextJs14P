import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
//import { DUMMYPOSTS } from '@/lib/data';

//FETCH DATA WITH API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 3600 },
//   });
//   //ha sokszór gyorsan változnak az adatok akkor kel acache:"no-store"
//   //óránkén frisíti az oldalt: {next:{revalidate:3600}}

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }
//   return res.json();
// };

const BlogPage = async () => {
  //FETCH DATA WITH API
  //const posts = await getData();

  //FETCH DATA WITHOUT API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {/* {DUMMYPOSTS.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))} */}
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
