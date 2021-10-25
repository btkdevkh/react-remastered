import { Fragment, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Article() {
  const { id } = useParams();
  const { datas: article, isPending, error } = useFetch("http://localhost:8000/articles/"+id);

  const history = useHistory();

  useEffect(() => {
    error && setTimeout(() => history.push('/'), 2000);
  }, [error, history])

  return (
    <article>
      <h2>Article - {id}</h2>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {article && (
        <Fragment>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </Fragment>
      )}
    </article>
  )
}
