import { unstable_noStore as noStore } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
//import { Post, User } from './models';
//import { connectToDb } from './utils';
//import { unstable_noStore as noStore } from 'next/cache';

//TEMPORARY DATA
// export const DUMMYPOSTS = [
//   {
//     id: 1,
//     title: 'title1 ',
//     date: '2020.01.01',
//     description: 'Some description1',
//     img: '/about.png',
//   },
//   {
//     id: 1,
//     title: 'title2 ',
//     date: '2021.01.01',
//     description: 'Some description2',
//     img: '/brands.png',
//   },
//   {
//     id: 1,
//     title: 'title3 ',
//     date: '2022.01.01',
//     description: 'Some description3',
//     img: '/contact.png',
//   },
//   {
//     id: 1,
//     title: 'title1 ',
//     date: '2020.01.01',
//     description: 'Some description1',
//     img: '/about.png',
//   },
// ];

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
// ];

// const posts = [
//   { id: 1, title: 'Post 1', body: '......', userId: 1 },
//   { id: 2, title: 'Post 2', body: '......', userId: 1 },
//   { id: 3, title: 'Post 3', body: '......', userId: 2 },
//   { id: 4, title: 'Post 4', body: '......', userId: 2 },
// ];

//Local Database
// export const getPosts = async () => {
//   return posts;
// };

// export const getPost = async (id) => {
//   return posts.find((post) => post.id === +id); //az id-t számmá kell alakítani ezért kella + jel (ua: parseInt(id))
// };

// export const getUser = async (id) => {
//   return users.find((user) => user.id === +id);
// };

//Data from mongoDb
//.env
//.utils

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    //console.log('posts: ', posts);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    //console.log('lekér', post);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

export const getUser = async (id) => {
  // cache kontrol:
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};
