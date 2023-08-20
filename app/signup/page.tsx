/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import InputBar from '@/components/common/InputBar';
import MyButton from '@/components/common/MyButton';
import AvatarIcon from '@/components/icons/AvatarIcon';
import LockIcon from '@/components/icons/LockIcon';
import Logo from '@/components/icons/Logo';
import allKeysHaveValues from '@/utils/isObjectNull';

const Signup = () => {
  const [inputValues, setInputValues] = useState<any>({});
  const [hasError, setHasError] = useState(false);
  const [isPwConfirmed, setIsPwConfirmed] = useState(false);
  const [buttonType, setButtonType] = useState('default');
  useEffect(() => {
    if (inputValues.password !== inputValues.passwordConfirm) {
      setIsPwConfirmed(true);
    } else {
      setIsPwConfirmed(false);
    }
    !allKeysHaveValues(inputValues) || !isPwConfirmed ? setHasError(true) : setHasError(false);
    console.log(!allKeysHaveValues(inputValues) || !isPwConfirmed);
  }, [inputValues]);
  useEffect(() => {
    //입력값 유효성 검사-> 버튼 활성화
    console.log(inputValues.user_id);
    inputValues.user_id !== '' && inputValues.password !== '' && inputValues.user_name !== ''
      ? setButtonType('default')
      : setButtonType('disabled');
  }, [inputValues]);
  const router = useRouter();
  const handleSignup = async () => {
    console.log(hasError);
    if (!hasError) {
      const response = await authApis.signup({
        id: inputValues.user_id,
        password: inputValues.password,
        user_name: inputValues.user_name,
      });
      console.log(response);
      if (response.ok) {
        // localStorage.setItem('currentUser',{})
        router.push('/login');
      } else {
        alert('회원가입에 실패하였습니다.');
      }
    }
  };
  const signupInfo = [
    { icon: <AvatarIcon />, placeholder: 'ID', title: 'user_id' },
    { icon: <AvatarIcon />, placeholder: 'NAME', title: 'user_name' },
    { icon: <LockIcon />, placeholder: 'Password', title: 'password', type: 'password' },
    {
      icon: <LockIcon />,
      placeholder: 'Password Confirm',
      title: 'passwordConfirm',
      type: 'password',
    },
  ];
  return (
    <AppContainer>
      <Stack gap={9} mt={'120px'} align={'center'}>
        <Logo />
        <Text textStyle={'headline2'}>회원가입</Text>
        <Box mt={'20px'}>
          {signupInfo.map((el) => {
            return (
              <>
                <Box mb={9} key={el.title}>
                  <InputBar
                    type={el.type}
                    icon={el.icon}
                    placeholder={el.placeholder}
                    handleChange={(e) =>
                      setInputValues((prev: any) => {
                        return { ...prev, [el.title]: e.target.value };
                      })
                    }
                  />
                </Box>
                {isPwConfirmed && el.title === 'passwordConfirm' && (
                  <Text mt={'-24px'} color={'#C70C0C'} textStyle={'timetable1'}>
                    입력한 비밀번호와 일치하지 않습니다.
                  </Text>
                )}
              </>
            );
          })}
        </Box>
        <MyButton color={buttonType} size="L" text="회원가입" onClick={handleSignup} />
      </Stack>
    </AppContainer>
  );
};

export default Signup;
