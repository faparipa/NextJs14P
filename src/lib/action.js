'use server';

import { revalidatePath } from 'next/cache';
import { connectToDb } from './utils';
import formData from '@/app/formData/page';
import { Post } from './models';

// ADD Post to Mongodb

export const addPost = async (formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  // console.log(title, desc, slug, userId);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    //console.log('newPost', newPost);
    await newPost.save();
    console.log('saved to db');
    revalidatePath('/blog');
    //revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

//Delete Post from MongoDb

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/blog');
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
