/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';

import { Box, Flex, Text, Switch, Grid, Stack, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import memberApis from '@/api/member';
import AppContainer from '@/components/common/AppContainer';
import ModalCard from '@/components/common/Modal';
import Navbar from '@/components/common/NavBar';
import BlueTooth from '@/components/home/BlueTooth';
import CreateButton from '@/components/home/CreateButton';
import GroupCard from '@/components/home/GroupCard';
import Header from '@/components/home/Header';
import PaymentAccept from '@/components/home/PaymentAccept';
import TeamAccept from '@/components/home/TeamAccept';

const Home = () => {
  const [isClickOn, setIsClickOn] = useState(false);
  const [groupList, setGroupList] = useState<any>([]);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupId, setGroupId] = useState<number>(0);
  const [isInvite, setIsInvite] = useState(true);
  const [userCode, setUserCode] = useState<any>('');
  const handleRouter = () => {
    router.push('/makeTeam');
  };
  useEffect(() => {
    setUserCode(Number(localStorage.getItem('currentUserCode')));
    console.log(userCode);
    if (!localStorage.getItem('currentUserCode')) {
      router.push('/login');
    }
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await groupApis.checkInvite(
          Number(localStorage.getItem('currentUserCode')),
        );
        console.log('isInvited', response);
        if (response.data) {
          if (response.data.data[0].is_invited) {
            setGroupId(response.data.data[0].invited_from);
            setIsInvite(true);
            onOpen();
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchPay = async () => {
      const response = await memberApis.getIsRequest(
        Number(localStorage.getItem('currentUserCode')),
      );
      // isRequest가 1인지 판단해서 알림을 띄워줄거임
      console.log('is1', response);
      if (response.data) {
        if (response.data.data) {
          onOpen();
          setIsInvite(false);
        }
      }
    };
    // Fetch the data immediately upon mounting
    fetchData();
    fetchPay();
    fetchGroupList(Number(localStorage.getItem('currentUserCode')));
    // Set an interval to fetch the data every second
    const intervalId = setInterval(fetchData, 2000);
    const intervalId2 = setInterval(fetchPay, 2000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []); //
  const fetchGroupList = async (userCode: number) => {
    const response = await groupApis.getGroupList(userCode);
    if (response.data) {
      setGroupList(response.data.data);
    }
    console.log(22, response);
  };

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
          {groupList.map(
            (el: { group_name: any; groupInfo: string; headcount: number; group_code: number }) => {
              return (
                <GroupCard
                  onClick={() => router.push(`/teamInfo/${el.group_code}`)}
                  key={el.group_name}
                  headCount={el.headcount}
                  groupName={el.group_name}
                />
              );
            },
          )}
        </Grid>
      </Stack>
      <Box h={16} />
      <ModalCard
        content={
          isInvite ? (
            <TeamAccept groupId={groupId} onClose={onClose} />
          ) : (
            <PaymentAccept onClose={onClose} />
          )
        }
        isOpen={isOpen}
        onClose={onClose}
      />
      <Navbar />
    </AppContainer>
  );
};

export default Home;
