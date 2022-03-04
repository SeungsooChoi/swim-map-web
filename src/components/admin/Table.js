import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../../lib/util';

const TableWrapper = styled.table`
  min-width: 100%;

  thead {
    background: #e9ecef;

    th {
      padding: 0.75rem 1.5rem;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-align: left;
      /* text-transform: uppercase; */
      border-right: 1px solid #ced4da;
    }
  }

  tbody {
    tr {
      background: white;
      border-bottom: 1px solid #ced4da;

      :hover {
        background: #f1f3f5;
      }

      td {
        padding: 1rem 1.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        white-space: nowrap;
        border-right: 1px solid #ced4da;
      }
    }
  }
`;

const Table = ({ swimpool, isShow }) => {
  const getIsShow = item => {
    if (isShow) {
      // 실제 보여주고 있는 데이터를 리턴할 때
      return item !== '__typename' && item !== 'isShow';
    }
    // 사용자가 등록신청을 했지만 관리자가 공개하지 않은 데이터를 리턴할 때
    return item !== '__typename';
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          {Object.keys(swimpool[0])
            .filter(item => getIsShow(item))
            .map((item, i) => (
              <th key={i} scope="col">
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {swimpool
          .filter(item => item.isShow === isShow)
          .map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.sigunguName}</td>
              <td>{item.sigunguCode}</td>
              <td>{item.name}</td>
              <td>{item.inOutDoorDivName}</td>
              <td>{item.manageMainName}</td>
              <td>{item.contactNo}</td>
              <td>{item.homepageAddr}</td>
              <td>{item.divingLength}</td>
              <td>{item.divingWidth}</td>
              <td>{item.divingDepth}</td>
              <td>{item.regPoolLength}</td>
              <td>{item.regPoolWidth}</td>
              <td>{item.regPoolLaneCnt}</td>
              <td>{item.irregPoolLength}</td>
              <td>{item.irregPoolWidth}</td>
              <td>{item.irregPoolLaneCnt}</td>
              <td>{item.seatCnt}</td>
              <td>{item.personCnt}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.lotNoAddr}</td>
              <td>{item.roadNmAddr}</td>
              <td>{item.remarks}</td>
              <td>{item.registeredUser}</td>
              {!isShow && <td>{String(item.isShow)}</td>}
              <td>{formatDate(Number(item.updatedAt))}</td>
            </tr>
          ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
