/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import InputBar from '@/components/common/InputBar';
import MyButton from '@/components/common/MyButton';
import AvatarIcon from '@/components/icons/AvatarIcon';
import Logo from '@/components/icons/Logo';
import LogoSmall from '@/components/icons/LogoSmall';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [buttonType, setButtonType] = useState('default');
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    const response = await authApis.login({ id: userId, password: userPw });
    console.log(response);
    if (response.ok) {
      localStorage.setItem('currentUserName', response.data?.data.user_name);
      localStorage.setItem('currentUserCode', response.data?.data.user_code);
      router.push('/enrollAccount');
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    //입력값 유효성 검사-> 버튼 활성화
    userId.length >= 1 && userPw.length >= 1 ? setButtonType('default') : setButtonType('disabled');
  }, [userId, userPw]);
  return (
    <AppContainer>
      <Stack gap={9} mt={'120px'} align={'center'}>
        <Logo />
        <Text textStyle={'headline2'}>로그인</Text>
        <Box mt={'20px'}>
          <InputBar
            icon={<AvatarIcon />}
            placeholder="ID"
            handleChange={(e) => setUserId(e.target.value)}
          />
          <Box mt={9}>
            <InputBar
              icon={<AvatarIcon />}
              placeholder="Password"
              type="password"
              handleChange={(e) => setUserPw(e.target.value)}
            />
          </Box>
          {hasError && (
            <Text mt={3} color={'#C70C0C'} textStyle={'timetable1'}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Text>
          )}
        </Box>
        <MyButton color={buttonType} size="L" text="로그인" onClick={handleLogin} />
        <Flex align={'center'}>
          <Text color={'#A0AEC0'} textStyle={'caption2'}>
            아직
          </Text>
          <LogoSmall />
          <Text color={'#A0AEC0'} textStyle={'caption2'}>
            회원이 아니신가요?
          </Text>
        </Flex>
        <Text
          color={'#A0AEC0'}
          textStyle={'caption2'}
          fontSize={'15px'}
          onClick={() => router.push('/signup')}
        >
          회원가입
        </Text>
      </Stack>
    </AppContainer>
  );
};

export default Login;
