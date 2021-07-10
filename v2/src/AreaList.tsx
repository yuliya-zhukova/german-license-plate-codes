import AreaListItem from './AreaListItem';

import { AreaItem } from './types';

import './AreaList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AreaListProps {
  list: AreaItem[];
  match: string;
}

export default function AreaList(props: AreaListProps) {
  const { list, match } = props;

  return (
    <ul className="area__list">
      {
        list.map((item: AreaItem) => (
          <AreaListItem key={item.code} areaItem={item} match={match} />
        ))
      }
    </ul>
  );
}
