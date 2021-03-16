import { AreaItem } from './types';

interface AreaListItemProps {
  areaItem: AreaItem;
}

export default function AreaListItem(props: AreaListItemProps) {
  const { areaItem } = props;

  return (
    <tr className="area__item">
      <td className="area__code">
        {areaItem.code}
      </td>
      <td className="area__name">
        {areaItem.name}
      </td>
    </tr>
  );
}
