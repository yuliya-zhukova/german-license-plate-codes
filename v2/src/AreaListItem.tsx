import { AreaItem } from './types';

interface AreaListItemProps {
  areaItem: AreaItem;
  match: string;
}

export default function AreaListItem(props: AreaListItemProps) {
  const { areaItem, match } = props;

  const num = match.split('').length;

  return (
    <li className="area__item">
      <div className="area__code">
        <span className="area__code_match">
          {match}
        </span>
        {areaItem.code.substr(num)}
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
