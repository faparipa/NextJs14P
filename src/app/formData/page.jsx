import { addPost, deletePost } from '@/lib/action';

const formData = () => {
  return (
    <>
      <form action={addPost}>
        <h1>Add New User</h1>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='desc' placeholder='description' />
        <input type='text' name='slug' placeholder='slug' />
        <input type='text' name='userId' placeholder='userId' />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type='text' name='id' placeholder='postId' />
        <button>Delete</button>
      </form>
    </>
  );
};

export default formData;
