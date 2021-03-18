import { Table } from 'react-bootstrap';

import AreaListItem from './AreaListItem';

import { AreaItem } from './types';

import './AreaList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AreaListProps {
  list: AreaItem[];
}

export default function AreaList(props: AreaListProps) {
  const { list } = props;

  return (
    <Table striped bordered>
      <thead>
        <tr className="area__item">
          <th className="area__code">
            Code
          </th>
          <th className="area__name">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item: AreaItem) => (
            <AreaListItem key={item.code} areaItem={item} />
          ))
        }
      </tbody>
    </Table>
  );
}
