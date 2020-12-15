import React from 'react';
import useProtected from '../../Hooks/useProtected';

const CreateTrip = () => {
  useProtected();

  
  return (
    <div className="App">
      <p>Criar Viagem</p>
      <button>Criar Viagem</button>
    </div>
  );
}

export default CreateTrip;