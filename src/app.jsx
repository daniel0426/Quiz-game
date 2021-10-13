import React from 'react';
import { useGlobalContext } from './context';
import SetupForm from './components/setupForm';

const App = () => {
    const {waiting} = useGlobalContext();

    if(waiting){
        return <SetupForm />
    }

    return (
       
        <div>
            
        </div>
    );
}

export default App;
