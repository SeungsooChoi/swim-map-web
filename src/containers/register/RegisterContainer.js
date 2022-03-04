import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Logo from '../../components/common/Logo';
import RegisterBlock from '../../components/register/RegisterBlock';
import AuthLayout from '../../components/user/AuthLayout';
import useChecks from '../../hooks/useChecks';
import useInputs from '../../hooks/useInputs';
import useLoggedInUser from '../../hooks/useLoggedInUser';

const REGISTER_MUTATION = gql`
  mutation createSwimPool(
    $name: String!
    $irregPoolLength: Float
    $roadNmAddr: String
    $registeredUser: String
  ) {
    createSwimPool(
      name: $name
      irregPoolLength: $irregPoolLength
      roadNmAddr: $roadNmAddr
      registeredUser: $registeredUser
    ) {
      ok
      error
    }
  }
`;

// 수영장 레인 종류
const checksTitle = '수영장 레인 종류';
const labels = ['50m', '25m', '기타'];

const RegisterContainer = () => {
  const { data } = useLoggedInUser();
  const [{ name, detailAddress }, onChange, reset] = useInputs({
    name: '',
    detailAddress: '',
  });
  const [address, setAddress] = useState('');
  const [renderChecks, getCheckList] = useChecks(checksTitle, labels);

  const onCompleted = data => {
    console.log(data);
    if (!data) {
      throw Error('등록 오류');
    }
    if (data.ok) {
      // ! 다 지워진거 필요한가 체크
      reset();
      alert('등록완료');
      // 등록 완료 안내하고 홈으로.. ?
    }
  };

  const [createSwimPool, { loading }] = useMutation(REGISTER_MUTATION, {
    onCompleted,
  });

  // 받아야 할 데이터
  // 1. 장소명 (필수)
  // 2. 위치 (필수)
  // 3. 레인 몇 m 인지
  // 나머지 항목은 관리자가 등록시 채워넣는 방식이 될 수 밖에 없다고 생각함
  const onSubmit = e => {
    e.preventDefault();
    const checkedList = getCheckList()
      .map((item, i) => item && labels[i])
      .filter(item => item !== false)
      .join();
    console.log(name, address, detailAddress, checkedList);
    // console.log(loading);
    // if (loading) {
    //   return;
    // }
    // const laneStr = getCheckList.map(li => li.data).join();
    // const totalAddress = address + detailAddress;
    // const username = data.seeProfile.username;

    // createSwimPool({
    //   variables: { name, laneStr, totalAddress, username },
    // });
  };

  return (
    <AuthLayout>
      <Logo />
      <RegisterBlock
        name={name}
        address={address}
        setAddress={setAddress}
        detailAddress={detailAddress}
        onChange={onChange}
        onSubmit={onSubmit}
        renderChecks={renderChecks}
        labels={labels}
      />
    </AuthLayout>
  );
};

export default RegisterContainer;
