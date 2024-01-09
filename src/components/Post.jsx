import { Link, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "title 1",
    body: "body 1",
  },
  {
    id: 2,
    title: "title 2",
    body: "body 2",
  },
  {
    id: 3,
    title: "title 3",
    body: "body 3",
  },
];

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  return (
    <div>
      <h1>single post</h1>
      <div>post id :{id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to="/app/posts">got to posts page</Link>
    </div>
  );
}

export default Post;
