import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setToggled] = useState(false);

  const toggleState = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      {isToggled ? (
        <div>
          <h2>This is the visible state.</h2>
          <button onClick={toggleState} className='add'>Hide</button>
        </div>
      ) : (
        <div>
          <h2>This is the hidden state.</h2>
          <button onClick={toggleState} className='add'>Show</button>
        </div>
      )}
    </div>
  );
}

export default Toggle;
