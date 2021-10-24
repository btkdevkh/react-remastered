// import { useEffect, useState, useCallback } from 'react';
import { Fragment, useState } from 'react';
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:8000/trips");
  const { datas: trips, isPending, error } = useFetch(url, { types: 'GET' });

  // Normal fetch without custom hook
  // useCallback for Function Dependencies
  // const fetchTrips = useCallback(async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setTrips(data);
  // }, [url])

  // // Fetching Data with useEffect
  // useEffect(() => {
  //   /*
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setTrips(data))
  //     .catch(err => console.log(err));
  //   */
  //   fetchTrips();

  // // The useEffect Dependency Array
  // }, [url, fetchTrips])

  return (
    <div>
      <h2>Trip List</h2>
      {isPending && (<h3>Loading...</h3>)}
      {error ? (
        <h3>{error}</h3>
      ) : (
        <Fragment>
          <ul>
            {trips && trips.map(trip => (
              <li key={trip.id}>
                <h4>{trip.title}</h4>
                <p>{trip.location}</p>
                <p>{trip.price}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => setUrl("http://localhost:8000/trips?location=europe")}>European Trips</button><br />
          <button onClick={() => setUrl("http://localhost:8000/trips?location=asia")}>Asia Trips</button><br />
          <button onClick={() => setUrl("http://localhost:8000/trips")}>All Trips</button>
        </Fragment>
      )}
    </div>
  )
}
