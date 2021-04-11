import germanLicensePlatePrefixes from 'german-license-plate-prefixes';
import { useState } from 'react';

import AreaList from './AreaList';
import SearchField from './SearchField';
import { AreaItem } from './types';

import './App.scss';

export default function App() {
  const [newInput, setNewInput] = useState('');

  function searchArea(value: string) {
    const regExLettersOnly = /^[a-zA-ZäÄöÖüÜ]*$/; // there is no ß in the code

    if (regExLettersOnly.test(value)) {
      setNewInput(value);
    }
  }

  function objectToArray(obj: any): AreaItem[] {
    return Object.keys(obj).map((key) => ({
      code: key,
      name: obj[key]
    }));
  }

  const areaList = objectToArray(germanLicensePlatePrefixes);

  const areaSortList = areaList.sort((a: AreaItem, b: AreaItem) => (a.code > b.code ? 1 : -1));

  const newCode = new RegExp(`^${newInput}`, 'i');

  const areaFilterableList = areaSortList.filter((item: AreaItem) => newCode.test(item.code));

  return (
    <div className="area">
      <h1 className="area__title">German license plate codes</h1>
      <SearchField
        handleInput={searchArea}
        newValue={newInput}
      />
      {
        areaFilterableList.length === 0 && (
        <div className="area__message">
          Sorry, code
          {' '}
          <span className="area__code area__code_match">{newInput}</span>
          {' '}
          does not exist in Germany
        </div>
        )
      }
      {
        newInput && <AreaList list={areaFilterableList} match={newInput} />
      }
    </div>
  );
}
