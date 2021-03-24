import './SearchField.scss';

export default function SearchField(props: any) {
  const { newValue } = props;

  function getInput(event: any): void {
    const { value } = event.target;

    props.handleInput(value);
  }

  return (
    <div className="plate">
      <div className="plate__top">
        <div className="plate__eu">D</div>
        <input
          className="plate__input"
          name="code"
          maxLength={3}
          placeholder="XXX"
          aria-label="Area code"
          onChange={getInput}
          value={newValue}
        />
      </div>
    </div>
  );
}
