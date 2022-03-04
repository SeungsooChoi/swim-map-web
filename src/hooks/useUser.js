import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      username
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;

const useUser = () => {
  const { data, loading } = useQuery(GET_USERS);

  return { data, loading };
};

export default useUser;
