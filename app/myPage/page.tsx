/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import InputBar from '@/components/common/InputBar';
import MyButton from '@/components/common/MyButton';
import AvatarIcon from '@/components/icons/AvatarIcon';
import Logo from '@/components/icons/Logo';
import LogoSmall from '@/components/icons/LogoSmall';
import Navbar from '@/components/common/NavBar';
import { Select } from '@chakra-ui/react';

const MyInfo = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    router.push('/');
  };

  let data = {
    name: '이은비',
    id: 'silverain',
    phoneNum: '01074635295',
    userCode: 'abcdefg',
    //게좌데이터
    account: ['신안 12345678', '궁민 12345678', '토수 12345678'],
  };
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
