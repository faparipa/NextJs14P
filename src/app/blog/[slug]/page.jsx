import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';

import { Suspense } from 'react'; //amíg az adatokat lekérjük megjelínthetünk vele plpl: Loading...
import { getPost } from '@/lib/data';
//FETCH DATA WITH API
// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { cache: 'no-store' }
//   );

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //FETCH DATA WITH API
  // const post = await getData(slug);
  //console.log('slug:', slug);
  //FETCH DATA WITHOUT API
  const post = await getPost(slug);
  //console.log('post ', post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image
            src={post.img}
            alt='single post picture'
            fill
            className={styles.img}
          />
        )}
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<h3>Loading...</h3>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
