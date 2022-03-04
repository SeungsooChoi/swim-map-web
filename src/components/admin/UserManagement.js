import React from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/useUser';
import { formatDate } from '../../lib/util';
import { commonStyle } from '../../styles';

const Wrapper = styled.div`
  max-width: 70%;
  height: 100vh;
  padding: 2rem;

  .contents {
    margin-top: 1rem;
    /* width: 80%; */
    height: 80%;
    border-radius: 0.5rem;
    box-shadow: ${commonStyle.boxShadow};
    overflow: scroll;
  }
`;

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

const UserManagement = () => {
  const { data, loading } = useUser();

  if (loading) return null;

  return (
    <Wrapper>
      <h1>회원 관리</h1>
      <div className="contents">
        <TableWrapper>
          <thead>
            <tr>
              {Object.keys(data.getUsers[0])
                .filter(item => item !== '__typename')
                .map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.getUsers.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.isAdmin ? 'true' : 'false'}</td>
                <td>{formatDate(Number(item.createdAt))}</td>
                <td>{formatDate(Number(item.updatedAt))}</td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </Wrapper>
  );
};

export default UserManagement;
