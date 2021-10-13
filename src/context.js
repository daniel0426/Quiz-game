import React, { useContext, useState } from "react";
import axios from 'axios';

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
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [index, setIndex]= useState(0)
  const [quiz, setQuiz] = useState({
      amount: 10,
      category :'sports',
      difficulty: 'easy'
  })

  const fetchQuestions = async (url)=> {
        setIsLoading(true);
        setWaiting(false);
        const response = await axios(url).catch((error) => console.log(error))
        if(response){
            const data = response.data.results;
            if(data.length>0){
                setQuestions(data);
                setIsLoading(false);
                setWaiting(false);
                setError(false)
            }else{
                setWaiting(true)
                setError(true)
            }
        }
  }
  const checkAnswer = (isCorrectAnswer)=> {
    if(isCorrectAnswer) {
        setCorrect(prevState => prevState +1)
    }
    nextQuestions()
  }

  const nextQuestions = ()=> {
    setIndex(prevIndex => {
        const index = prevIndex+1;
        if(index > questions.length -1){
            openModal()
            return 0; 
        }else {
            return index;
        }
    })
  }

  const handleChange = (e)=> {
    const attribute = e.target.name;
    const value = e.target.value;
    setQuiz({...quiz, [attribute]: value})
  }
  
  const handleSubmit = (e)=> {
      e.preventDefault();
      const {amount, category, difficulty} = quiz;
      const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
      fetchQuestions(url);
  } 
  
  const openModal = ()=> {
      setModalOpen(true)
  }

  const closeModal = ()=> {
      setModalOpen(false)
      setWaiting(true)
      setCorrect(0);
  }
  return (
    <AppContext.Provider
      value={{
        waiting,
        isLoading, 
        openModal, 
        closeModal,
        handleChange,
        handleSubmit,
        nextQuestions,
        checkAnswer,
        questions,
        index,
        error, 
        quiz,
        correct,
        modalOpen,
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
