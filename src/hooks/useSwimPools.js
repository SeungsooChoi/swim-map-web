import { gql, useQuery } from '@apollo/client';

const SELECT_QUERY = gql`
  query selectAll {
    swimPools {
      id
      sigunguName
      sigunguCode
      name
      inOutDoorDivName
      manageMainName
      contactNo
      homepageAddr
      divingLength
      divingWidth
      divingDepth
      regPoolLength
      regPoolWidth
      regPoolLaneCnt
      irregPoolLength
      irregPoolWidth
      irregPoolLaneCnt
      seatCnt
      personCnt
      latitude
      longitude
      lotNoAddr
      roadNmAddr
      remarks
      registeredUser
      isShow
      updatedAt
    }
  }
`;

const useSwimPools = () => {
  const { data, loading } = useQuery(SELECT_QUERY);

  return { data, loading };
};

export default useSwimPools;
