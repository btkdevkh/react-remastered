import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import TechList from './components/TechList';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Clock from './components/Clock';
import TechForm from './components/TechForm';

function App() {
  // Using the useSate Hook
  const [name, setName] = useState('Bunthoeun');
  const [showTechs, setShowTechs] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [techs, setTechs] = useState([
    { id: 1, techno: "html", date: new Date().toLocaleDateString() },
    { id: 2, techno: "css", date: new Date().toLocaleDateString() },
    { id: 3, techno: "javascript", date: new Date().toLocaleDateString() }
  ]);

  const handleClick = () => name === 'jim007' ? setName('Bunthoeun') : setName('jim007');
  const handleShow = () => setShowTechs((oldState) => !oldState);
  const handleCloseModal = () => setShowModal(oldState => !oldState);

  // Using the Previous State
  const handleDelete = (id) => {
    setTechs((oldState) => oldState.filter(x => x.id !== id));
  };

  // Add Techno
  const addTech = (tech) => {
    setTechs((oldState) => [...oldState, tech]);
    setShowModal(false);
  }

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

      {/* Nested Component & Passing Props */}
      <Title title="React World" />
      <div>
        <h2>My name is {name} <br />I'm react developer</h2>
        <button onClick={handleClick}>{name === 'jim007' ? 'Hide my nickname' : 'See my nickname'}</button><br />
        <button onClick={handleShow}>{!showTechs ? 'See my techs skills' : 'Hide my techs skills'}</button><br />
        <button onClick={handleCloseModal}>See promotion</button>

        {/* Conditional Templates */}
        {showTechs && <TechList techs={techs} handleDelete={handleDelete} />}
      </div>

      {/* Childrens & Portal */}
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} isSalesModal={true}>
          <h2>Add Techno</h2>
          <TechForm addTech={addTech} setShowModal={setShowModal} />
        </Modal>
      )}
      {/* <Modal>
        <input placeholder="News letter" />
        <input type="submit" value="submit" />
      </Modal> */}

      {/* Example of class component */}
      <Clock />
    </div>
  );
}

export default App;
