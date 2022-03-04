import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedUser, userLogOut } from '../apollo';

const GET_PROFILE = gql`
  query seeProfile {
    seeProfile {
      id
      username
      isAdmin
    }
  }
`;

const useLoggedInUser = () => {
  const hasToken = useReactiveVar(isLoggedUser);
  const { data } = useQuery(GET_PROFILE, { skip: !hasToken });

  useEffect(() => {
    if (data?.seeProfile === null) {
      userLogOut();
    }
  }, [data]);

  return { data };
};

export default useLoggedInUser;
