/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

import { Box, Stack, Text, Grid, Center, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import AlarmCard from '@/components/common/AlarmCard';
import AppContainer from '@/components/common/AppContainer';
import ModalCard from '@/components/common/Modal';
import MyButton from '@/components/common/MyButton';
import Logo from '@/components/icons/Logo';
import LogoSmall from '@/components/icons/LogoSmall';
const ArsCertification = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const handleEnroll = () => {
    onOpen();
    const timer = setTimeout(() => {
      router.push('/');
    }, 1000);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setText1('3');
    }, 1000);

    const timer2 = setTimeout(() => {
      setText2('7');
    }, 1500);
    return () => {
      clearTimeout(timer1); // 첫 번째 타이머 클리어
      clearTimeout(timer2); // 두 번째 타이머 클리어
    };
  }, []); // The empty
  return (
    <AppContainer>
      <Stack gap={9} mt={'90px'} align={'center'}>
        <Logo />
        <Text textStyle={'headline2'}>ARS 인증</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Center
            textStyle={'headline1'}
            fontSize={'60px'}
            h={'100px'}
            w={'100px'}
            borderRadius={'10px'}
            bg={'#F7F8F8'}
          >
            {text1}
          </Center>
          <Center
            textStyle={'headline1'}
            fontSize={'60px'}
            h={'100px'}
            w={'100px'}
            borderRadius={'10px'}
            bg={'#F7F8F8'}
          >
            {text2}
          </Center>
        </Grid>
        <Box mt={10}>
          <MyButton size="L" text="완료" onClick={handleEnroll} />
        </Box>
        <LogoSmall />
        <ModalCard
          content={<AlarmCard content={'계좌 등록이 완료되었습니다!'} />}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Stack>
    </AppContainer>
  );
};

export default ArsCertification;
