import germanLicensePlatePrefixes from 'german-license-plate-prefixes';

import AreaList from './AreaList';
import SearchField from './SearchField';
import { AreaItem } from './types';

import './App.scss';

export default function App() {
  function objectToArray(obj: any): AreaItem[] {
    return Object.keys(obj).map((key) => ({
      code: key,
      name: obj[key]
    }));
  }

  const areaList = objectToArray(germanLicensePlatePrefixes);

  const areaSortList = areaList.sort((a: AreaItem, b: AreaItem) => (a.code > b.code ? 1 : -1));

  return (
    <div className="area">
      <h1>German license plate codes</h1>
      <SearchField />
      <AreaList list={areaSortList} />
    </div>
  );
}
