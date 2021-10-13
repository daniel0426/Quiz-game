import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./components/setupForm";
import Loading from "./components/loading";
import Modal from "./components/modal";
import Question from "./components/question";

const App = () => {
  const { isLoading, waiting } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Modal />
      <Question/>
    </main>
  );
};

export default App;
