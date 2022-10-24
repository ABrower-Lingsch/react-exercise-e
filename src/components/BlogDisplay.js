import { useState } from "react";
// import Blog from "./Blog";

function BlogDisplay(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.post?.title);
  const [newBody, setNewBody] = useState(props.post?.body);

  const handleSave = (e) => {
    props.updateBlog(props.post.id, newTitle, newBody);
    setIsEditing(false);
  };

  const previewHTML = (
    <>
      <h1 htmlFor={props.post?.id}>
        {props.post?.title}
      </h1>
      <p htmlFor={props.post?.id}>
        {props.post?.body}
      </p>
      <div>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.removeBlog(props.post?.id)}
        >
          Delete
        </button>
      </div>
    </>
  );

  const editingHTML = (
    <>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        name="display-body"
        id="display-body-text"
        cols="30"
        rows="10"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></textarea>
      <div>
        <button type="button" onClick={(e) => handleSave()}>
          Save
        </button>
        <button
          type="button"
          onClick={() => props.removeBlog(props.post?.id)}
        >
          Delete
        </button>
      </div>
    </>
  );

  return <div>{isEditing ? editingHTML : previewHTML}</div>;
}

export default BlogDisplay;