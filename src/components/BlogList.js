function BlogList({ blogs, displayPost }) {
    const blogTitles = blogs.map(({ title, id }) => (
      <li key={id} onClick={() => displayPost(id)}>
        {title}
      </li>
    ));
    return (
      <div>
        <h1>Blog Posts</h1>
        <p>- click to view -</p>
        <ul>{blogTitles}</ul>
      </div>
    );
  }
  
  export default BlogList;