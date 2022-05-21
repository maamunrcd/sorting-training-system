import React, { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import InputModal from "./components/InputModal";
import { generateRandomNameEmail } from "./utils";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState({});
  const [currentPosition, setCurrentPosition] = useState([]);
  const [showWarning, setShowWarning] = useState(null);


  const handlePeople = (e) => {
    if (e.target.value < 20 || e.target.value > 100) {
      setShowWarning(true);
      setCurrentPosition([]);
      return;
    } else {
      setPeople(e.target.value);
      setShowWarning(false);
    }
  };

  const startSorting = (numberOfPeople) => {
    let uniqueIdentifiers = [];
    while (uniqueIdentifiers.length < numberOfPeople) {
      const newIdentifier = Math.floor(Math.random() * 100) + 1;
      if (uniqueIdentifiers.indexOf(newIdentifier) === -1) {
        uniqueIdentifiers.push(newIdentifier);
      }
    }
    let newPeople = {};

    uniqueIdentifiers.forEach((uniqueIdentifier) => {
      const info = generateRandomNameEmail();
      newPeople[uniqueIdentifier] = {
        ...info,
        potatoes: uniqueIdentifier,
      };
    });

    setCurrentPosition(uniqueIdentifiers);
    setPeople(newPeople);
    setShowModal(false);
  }

  
  return (
    <div className="sorting-system">
      <Header showModal={showModal} toggleModal={setShowModal} />
      {currentPosition.length > 0 && (
        <Table currentPosition={currentPosition} people={people}/>
      )}
      <InputModal
        handlePeople={handlePeople}
        people={people}
        startSorting={startSorting}
        showModal={showModal}
        toggleModal={setShowModal}
        showWarning={showWarning}
      />
    </div>
  );
}

export default App;
