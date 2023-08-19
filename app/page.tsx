'use client';

import React, { useState } from 'react';

import { Box, Flex, Text, Switch, Grid, Stack } from '@chakra-ui/react';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import BlueTooth from '@/components/home/BlueTooth';
import CreateButton from '@/components/home/CreateButton';
import GroupCard from '@/components/home/GroupCard';
import Header from '@/components/home/Header';

const Home = () => {
  const [isClickOn, setIsClickOn] = useState(false);
  async function fetchUserList() {
    const response = await authApis.login({ id: 'test1', password: 'test1' });
    console.log(response);
  }

  // Call the function
  const group = [
    { groupName: 'test1', groupInfo: '정윤아 님 외 6명' },
    { groupName: 'test1', groupInfo: '정윤아 님 외 6명' },
    { groupName: 'test1', groupInfo: '정윤아 님 외 6명' },
    { groupName: 'test1', groupInfo: '정윤아 님 외 6명' },
    { groupName: 'test1', groupInfo: '정윤아 님 외 6명' },
  ];
  return (
    <AppContainer>
      <Header mt={7} />
      <Box mt={10} />
      <BlueTooth isOn={isClickOn} handleClick={() => setIsClickOn(!isClickOn)} />
      <Box mt={'17px'} />
      <CreateButton />
      <Flex mt={'36px'} justify={'space-between'}>
        <Text fontSize={'18px'} fontWeight={'600'} onClick={fetchUserList}>
          정산 모임 선택
        </Text>
        <Flex align={'center'}>
          <Text mr={1} fontSize={'13px'} fontWeight={'400'} color={'#ADA4A5'}>
            모임 결제 활성화
          </Text>
          <Switch colorScheme="pink" size={'lg'} />
        </Flex>
      </Flex>
      <Stack gap={'10px'} mt={2} p={5} bg={'#F7F8F8'} borderRadius={'14px'}>
        <Text fontSize={'15px'} fontWeight={'400'} textAlign={'center'}>
          내 모임 리스트
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {group.map((el) => {
            return (
              <GroupCard key={el.groupName} groupName={el.groupName} groupInfo={el.groupInfo} />
            );
          })}
        </Grid>
      </Stack>
      <Box h={16} />
      <Navbar />
    </AppContainer>
  );
};

export default Home;
