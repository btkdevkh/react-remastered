import { useState } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

function App() {
  // Using the useSate Hook
  const [name, setName] = useState('Bunthoeun');
  const [showTechs, setShowTechs] = useState(false);
  const [techs, setTechs] = useState([
    { id: 1, techno: "html" },
    { id: 2, techno: "css" },
    { id: 3, techno: "javascript" },
    { id: 4, techno: "php" },
  ]);

  const handleClick = () => name === 'jim007' ? setName('Bunthoeun') : setName('jim007');
  const handleShow = () => setShowTechs((oldState) => !oldState);

  // Using the Previous State
  const handleDelete = (id) => {
    setTechs((oldState) => oldState.filter(x => x.id !== id));
  };

  /* 
    useState hook Limitations
    Always use react hook within the component itself not outside the component
    React Hooks is not allowed to use in the function except the custom hooks
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>{name === 'jim007' ? 'Hide my nickname' : 'See my nickname'}</button><br />
        <button onClick={handleShow}>{!showTechs ? 'See my skills' : 'Hide my skills'}</button>
        <h3>My technical skills are</h3>

        {/* Conditional Templates */}
        {showTechs && (
          <ul>
            {/* Outputting Lists */}
            {techs.map(tech => (
              <li 
                key={tech.id}
                onClick={() => handleDelete(tech.id)}
              >
                {tech.techno.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
