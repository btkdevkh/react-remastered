import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, _options) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // useRef to wrap an object/array argument
  // which is a useEffect dependency
  const options = useRef(_options).current;

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();

        setIsPending(false);
        setDatas(data);
        setError(null)
      } catch (err) {
        if(err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError('could not fetch data');
        }
      }
    }

    fetchData();

    // Cleanup Function
    return () => {
      controller.abort();
    }

  }, [url, options])

  return { datas, isPending, error }
}
