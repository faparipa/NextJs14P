'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  //ennek a segítségével tudunk arra a linke hivatkozni ami épp aktív, így adhatunk neki más sstílust
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
