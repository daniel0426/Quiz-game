import React, { useContext, useState } from "react";

const table = {
    animals: 27,
    art: 25,
    sports: 21,
    politics: 24,
    vehicle: 28,
    celebrities: 26,
    music:12,
  }

const API_ENDPOINT = 'https://opentdb.com/api.php?'
const urlExample = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
      amount: 10,
      category :'sports',
      difficulty: 'easy'
  })

  const handleChange = (e)=> {
    const attribute = e.target.name;
    const value = e.target.value;
    setQuiz({...quiz, [attribute]: value})
  }
  const handleSubmit = (e)=> {
      e.preventDefault();
      const {amount, category, difficulty} = quiz;
      const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
      console.log(url);
  } 
  
  const openModal = ()=> {
      setModalOpen(true)
  }

  const closeModal = ()=> {
      setModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        waiting,
        openModal, 
        closeModal,
        handleChange,
        handleSubmit,
        error, 
        quiz
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
