import { AreaItem } from './types';

interface AreaListItemProps {
  areaItem: AreaItem;
}

export default function AreaListItem(props: AreaListItemProps) {
  const { areaItem } = props;

  return (
    <div>
      <div>{areaItem.code}</div>
      <div>{areaItem.name}</div>
    </div>
  );
}
