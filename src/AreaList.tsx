import AreaListItem from './AreaListItem';

import { AreaItem } from './types';

interface AreaListProps {
  list: AreaItem[];
}

export default function AreaList(props: AreaListProps) {
  const { list } = props;

  return (
    <div className="area__list">
      {
        list.map((item: AreaItem) => (
          <AreaListItem key={item.code} areaItem={item} />
        ))
      }
    </div>
  );
}
