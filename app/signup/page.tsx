/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import InputBar from '@/components/common/InputBar';
import MyButton from '@/components/common/MyButton';
import AvatarIcon from '@/components/icons/AvatarIcon';
import LockIcon from '@/components/icons/LockIcon';
import Logo from '@/components/icons/Logo';

const Login = () => {
  const [inputValues, setInputValues] = useState<any>({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (inputValues.password !== inputValues.passwordConfirm) {
      setHasError(true);
    }
  }, [inputValues]);
  const router = useRouter();
  const handleSignup = async () => {
    const response = await authApis.login({
      id: inputValues.user_id,
      password: inputValues.password,
    });
    console.log(response);
    if (response.ok) {
      // localStorage.setItem('currentUser',{})
      router.push('/');
    } else {
      setHasError(true);
    }
  };
  const signupInfo = [
    { icon: <AvatarIcon />, placeholder: 'ID', title: 'user_id' },
    { icon: <AvatarIcon />, placeholder: 'NAME', title: 'user_name' },
    { icon: <LockIcon />, placeholder: 'Password', title: 'password' },
    { icon: <LockIcon />, placeholder: 'Password Confirm', title: 'passwordConfirm' },
  ];
  return (
    <AppContainer>
      <Stack gap={9} mt={'120px'} align={'center'}>
        <Logo />
        <Text textStyle={'headline2'}>회원가입</Text>
        <Box mt={'20px'}>
          {signupInfo.map((el, index) => {
            return (
              <>
              <Box mb={9} key={el.title}>
                <InputBar
                  icon={el.icon}
                  placeholder={el.placeholder}
                  handleChange={(e) =>
                    setInputValues((prev: any) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                  />
              </Box>
              {hasError && (
            <Text mt={3} color={'#C70C0C'} textStyle={'timetable1'}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Text>}
                  </>
            );
          })}

          {hasError && (
            <Text mt={3} color={'#C70C0C'} textStyle={'timetable1'}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Text>
          )}
        </Box>
        <MyButton size="L" text="회원가입" onClick={handleSignup} />
      </Stack>
    </AppContainer>
  );
};

export default Login;
