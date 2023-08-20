/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import AppContainer from '@/components/common/AppContainer';
import MyButton from '@/components/common/MyButton';
import Navbar from '@/components/common/NavBar';
import Logo from '@/components/icons/Logo';

const MyInfo = () => {
  const [name, setName] = useState<any>('이름');
  const [id, setId] = useState('아이디');
  const [phoneNum, setPhoneNum] = useState('');
  const [userCode, setUserCode] = useState<any>('유저코드');
  const [account, setAccount] = useState(['1', '2', '3']);

  const router = useRouter();
  const handleLogout = async () => {
    router.push('/');
  };

  const data = {
    name: name,
    id: id,
    phoneNum: phoneNum,
    userCode: userCode,
    //게좌데이터
    account: account,
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 값을 가져옴
    const savedName = localStorage.getItem('currentUserName');
    const savedCode = localStorage.getItem('currentUserCode');
    setName(savedName);
    setId('silverain');
    setUserCode(savedCode);
    setPhoneNum('01074635295');
    setAccount(['신안 110514186097', '궁민 620602013868', '토수 3333169044108']);
  }, []);

  return (
    <AppContainer>
      <Box borderRadius={'10px'} bg={'#F7F8F8'} w={'full'} pb={'30px'} my={'47px'} px={6} py={4}>
        <Stack gap={9} mt={'120px'} mb={'30px'} align={'center'}>
          <Logo />
          <Text textStyle={'headline2'}>마이페이지</Text>
          <Flex mt={'10px'} ml={'10px'} flexDir={'column'} gap={'25px'}>
            <Flex flexDir={'row'} gap={'20px'} justify={'space-between'}>
              <Text textStyle={'subtitle1'} pt={'5px'}>
                이름
              </Text>
              <Box
                textStyle={'body2'}
                w={'180px'}
                h={'35px'}
                borderRadius={'5px'}
                bg={'white'}
                pt={'8px'}
                pl={'10px'}
              >
                {data.name}
              </Box>
            </Flex>
            <Flex flexDir={'row'} gap={'20px'} justify={'space-between'}>
              <Text textStyle={'subtitle1'} pt={'5px'}>
                아이디
              </Text>
              <Box
                textStyle={'body2'}
                w={'180px'}
                h={'35px'}
                borderRadius={'5px'}
                bg={'white'}
                pt={'8px'}
                pl={'10px'}
              >
                {data.id}
              </Box>
            </Flex>
            <Flex flexDir={'row'} gap={'20px'} justify={'space-between'}>
              <Text textStyle={'subtitle1'} pt={'5px'}>
                전화번호
              </Text>
              <Box
                textStyle={'body2'}
                w={'180px'}
                h={'35px'}
                borderRadius={'5px'}
                bg={'white'}
                pt={'8px'}
                pl={'10px'}
              >
                {data.phoneNum}
              </Box>
            </Flex>
            <Flex flexDir={'row'} gap={'20px'} justify={'space-between'}>
              <Text textStyle={'subtitle1'} pt={'5px'}>
                유저코드
              </Text>
              <Box
                textStyle={'body2'}
                w={'180px'}
                h={'35px'}
                borderRadius={'5px'}
                bg={'white'}
                pt={'8px'}
                pl={'10px'}
              >
                {data.userCode}
              </Box>
            </Flex>
            <Flex flexDir={'row'} gap={'20px'} justify={'space-between'}>
              <Text textStyle={'subtitle1'} pt={'5px'}>
                계좌
              </Text>

              <Flex flexDir={'column'} gap={'10px'}>
                {data.account.map((account, index) => (
                  <Flex key={index} flexDir={'row'}>
                    <Box
                      textStyle={'body2'}
                      w={'150px'}
                      h={'35px'}
                      borderRadius={'5px'}
                      bg={'white'}
                      pt={'8px'}
                      pl={'10px'}
                    >
                      {account}
                    </Box>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Stack>
        <MyButton color="negative" size="L" text="로그아웃" onClick={handleLogout} />
      </Box>

      <Navbar currentTab="MyInfo" />
    </AppContainer>
  );
};

export default MyInfo;
