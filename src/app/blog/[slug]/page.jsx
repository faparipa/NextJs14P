import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';

const SinglePostPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/about.png'
          alt='single post picture'
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            src='/noavatar.png'
            alt='user avatar'
            width={50}
            height={50}
            className={styles.avatar}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Autor</span>
            <span className={styles.detailValue}>UserName</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>2022.10.10</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          maxime? Numquam fuga assumenda sequi neque veritatis officia officiis
          ullam cumque ipsa non obcaecati placeat delectus pariatur velit quis,
          aliquam repellendus!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
