import { AreaItem } from './types';

interface AreaListItemProps {
  areaItem: AreaItem;
}

export default function AreaListItem(props: AreaListItemProps) {
  const { areaItem } = props;

  return (
    <li className="area__item">
      <div className="area__code">
        {areaItem.code}
      </div>
      <div className="area__name">
        <a
          href={`https://en.wikipedia.org/wiki/${areaItem.name}`}
          target="_blank"
          rel="noreferrer"
          className="area__link"
        >
          {areaItem.name}
        </a>
      </div>
    </li>
  );
}
