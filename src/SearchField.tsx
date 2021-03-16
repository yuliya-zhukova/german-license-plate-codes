import { useState } from 'react';

import { InputGroup, FormControl } from 'react-bootstrap';

export default function SearchField() {
  const [inputCode, setInputCode]: any[] = useState('');

  function hundleInput(event: any) {
    const { value } = event.target;

    setInputCode(value);
  }

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Search</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        name="code"
        placeholder="Area code"
        aria-label="Area code"
        onChange={hundleInput}
        value={inputCode}
      />
    </InputGroup>
  );
}
