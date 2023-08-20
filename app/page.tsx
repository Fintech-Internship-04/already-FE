/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';

import { Box, Flex, Text, Switch, Grid, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import BlueTooth from '@/components/home/BlueTooth';
import CreateButton from '@/components/home/CreateButton';
import GroupCard from '@/components/home/GroupCard';
import Header from '@/components/home/Header';

const Home = () => {
  const [isClickOn, setIsClickOn] = useState(false);
  const [groupList, setGroupList] = useState<any>([]);

  const router = useRouter();
  const handleRouter = () => {
    router.push('/makeTeam');
  };
  const fetchGroupList = async () => {
    const response = await groupApis.getGroupList(19);
    if (response.data) {
      setGroupList(response.data.data);
    }
    console.log(22, response);
  };

  useEffect(() => {
    fetchGroupList();
  }, []);
  // Call the function
  return (
    <AppContainer>
      <Header mt={7} />
      <Box mt={10} />
      <BlueTooth isOn={isClickOn} handleClick={() => setIsClickOn(!isClickOn)} />
      <Box mt={'17px'} />
      <CreateButton onClick={handleRouter} />
      <Flex mt={'36px'} justify={'space-between'}>
        <Text fontSize={'18px'} fontWeight={'600'}>
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
          {groupList.map((el: { group_name: any; groupInfo: string }) => {
            return (
              <GroupCard key={el.group_name} groupName={el.group_name} groupInfo={el.groupInfo} />
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
