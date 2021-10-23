import { useState } from 'react';
//import { useRef } from 'react';
import '../assets/css/TechForm.css';

export default function TechForm({ addTech }) {
  const [techno, setTechno] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Paris');

  // Example of useRef
  // const techno = useRef();
  // const date = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of useRef
    // const tech = {
    //   id: Date.now(),
    //   techno: techno.current.value,
    //   date: date.current.value,
    // }

    const tech = {
      id: Date.now(),
      techno,
      date,
      location
    }

    console.log(tech);

    addTech(tech);

    setTechno('');
    setDate('');
    setLocation('Paris');

    // Example of useRef
    // techno.current.value = '';
    // date.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Techno:</span>
        <input 
          type="text" 
          value={techno} 
          onChange={(e) => setTechno(e.target.value)}
          // Example of useRef
          //ref={techno}
        />
      </label>
      <label>
        <span>Date:</span>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          // Example of useRef
          //ref={date}
        />
      </label>
      <label>
        <span>Loaction:</span>
        <select 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="paris">Paris</option>
          <option value="manchester">Machester</option>
          <option value="phnom penh">Phnom Penh</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
