
import { useState } from "react";
import BlogDisplay from "../BlogDisplay";
import BlogForm from "../BlogForm";
import BlogList from "../BlogList";

const INITIAL_BLOGS = [
  {
    title: "This is a Blog Post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit. Sapien faucibus et molestie ac feugiat sed lectus. Pretium lectus quam id leo in vitae. Proin sed libero enim sed faucibus turpis in eu mi. Fringilla est ullamcorper eget nulla. Et leo duis ut diam quam nulla porttitor massa. In hac habitasse platea dictumst quisque sagittis. Enim nunc faucibus a pellentesque sit amet porttitor. At auctor urna nunc id. Non odio euismod lacinia at quis risus sed vulputate. Nunc sed augue lacus viverra vitae congue eu. Id velit ut tortor pretium viverra suspendisse. Hendrerit dolor magna eget est lorem ipsum.",
    id: 1,
  },
  {
    title: "Another Post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Etiam sit amet nisl purus in mollis nunc sed. Lectus urna duis convallis convallis. Sapien et ligula ullamcorper malesuada proin. Ac turpis egestas maecenas pharetra convallis. Tempus egestas sed sed risus pretium quam. Sed felis eget velit aliquet sagittis id consectetur. Tortor vitae purus faucibus ornare suspendisse. Eu feugiat pretium nibh ipsum consequat. Arcu risus quis varius quam quisque id. Pretium lectus quam id leo in. Risus quis varius quam quisque id diam vel quam.",
    id: 2,
  },
  {
    title: "Blogs and Stuff",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi. Ut faucibus pulvinar elementum integer enim neque. Platea dictumst vestibulum rhoncus est pellentesque. Eu feugiat pretium nibh ipsum consequat. Non consectetur a erat nam at lectus urna duis. Lacinia at quis risus sed vulputate. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Enim neque volutpat ac tincidunt vitae semper quis lectus. Sed augue lacus viverra vitae congue eu consequat. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Duis convallis convallis tellus id interdum. Urna porttitor rhoncus dolor purus. Euismod in pellentesque massa placerat.",
    id: 3,
  },
  {
    title: "I am also a Blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor. Semper risus in hendrerit gravida rutrum. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Eget felis eget nunc lobortis mattis aliquam. Faucibus purus in massa tempor nec. Condimentum lacinia quis vel eros donec. Vehicula ipsum a arcu cursus vitae congue mauris. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim enim sit amet venenatis urna. Sem nulla pharetra diam sit. Ut tellus elementum sagittis vitae et leo duis ut. Viverra aliquet eget sit amet tellus cras. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Leo duis ut diam quam nulla porttitor massa. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt.",
    id: 4,
  },
];


function App() {

  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [post, setPost] = useState();

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const displayPost = (id) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    const activePost = blogs[index];
    setPost(activePost);
  };

  const removeBlog = (id) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  const updateBlog = (id, newTitle, newBody) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    const updatedBlogs = [...blogs];
    updatedBlogs[index].title = newTitle;
    updatedBlogs[index].body = newBody;
    setBlogs(updatedBlogs);
  };

  return (
    <div className="App">
      <div className="menu-col">
        <BlogForm addBlog={addBlog} />
        <BlogList blogs={blogs} displayPost={displayPost} />
      </div>
      <div className="active-col">
        <div className="cms-active-blog">
          {post && <BlogDisplay post={post} removeBlog={removeBlog} updateBlog={updateBlog} />}
        </div>
      </div>
    </div>
  );
}

export default App;
