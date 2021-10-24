import { useEffect, useState, useRef } from 'react';

// Creating a Custom Fetch Hook
export const useFetch = (url, _options) => {
  const [datas, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // useRef to wrap an object/array argument
  // which is a useEffect dependency
  const options = useRef(_options).current;

  // Fetching Data with useEffect
  useEffect(() => {
    console.log(options);

    // Aborting Fetch Requests
    const controller = new AbortController();

    const fetchDatas = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if(!res.ok) throw new Error("Not Found");
        
        const data = await res.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if(err.name === "AbortError") {
          console.log('the fetch was aborted');
        } else {
          setIsPending(false);
          setError("Could not fetch the data", err);
          console.log(err.message);
        }
      }
    }

    fetchDatas();

    // Cleanup Function
    return () => {
      controller.abort();
    }

  // The useEffect Dependency Array
  }, [url, options])

  return { error, isPending, datas }
}
