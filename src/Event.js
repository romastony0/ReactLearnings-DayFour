import React, { useState } from 'react';

function NameForm() {
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(event.target.elements.name.value);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
}

export default NameForm;
