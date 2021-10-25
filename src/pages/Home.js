import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Home() {
  const { datas: articles, isPending, error } = useFetch("http://localhost:8000/articles");

  console.log(articles);

  return (
    <div>
      <h2>Articles</h2>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {articles && articles.map(article => (
        <article key={article.id}>
          <Link to={`/articles/${article.id}`}><h3>{article.title}</h3></Link>
          <p>{article.author}</p>
          <hr />
        </article>
      ))}
    </div>
  )
}
