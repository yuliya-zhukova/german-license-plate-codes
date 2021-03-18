import { InputGroup, FormControl } from 'react-bootstrap';

export default function SearchField(props: any) {
  const { newValue } = props;

  function getInput(event: any): void {
    const { value } = event.target;

    props.handleInput(value);
  }

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Search</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        name="code"
        maxLength={3}
        placeholder="Area code"
        aria-label="Area code"
        onChange={getInput}
        value={newValue}
      />
    </InputGroup>
  );
}
