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
        <a
          href={`https://en.wikipedia.org/wiki/${areaItem.name}`}
          target="_blank"
          rel="noreferrer"
          className="area__link"
        >
          {areaItem.name}
        </a>
      </td>
    </tr>
  );
}
