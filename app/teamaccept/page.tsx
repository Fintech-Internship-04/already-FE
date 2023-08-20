/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import groupApis from '@/api/group';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import MemeberCard from '@/components/common/MemberCard';
import MyButton from '@/components/common/MyButton';
import InvitationIcon from '@/components/icons/InvitationIcon';

const TeamAccept = ({ groupId }: { groupId: number }) => {
  const [groupInfo, setGroupInfo] = useState<any>({});

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await groupApis.getGroupInfo(groupId);
      console.log('fetchdd', response);
      if (response.data) {
        setGroupInfo(response.data.data);
      }
    };
    fetchGroupInfo();
  }, []);
  return (
    <BackGroundCard>
      <Stack gap={6}>
        <Flex justify={'center'} align={'flex-end'}>
          <Box w={2} h={2} />
          <Text textStyle={'body3'} color={'#2D3748'} fontWeight={'500'}>
            모임 초대장
          </Text>
        </Flex>

        <Flex flexDir={'column'} alignItems={'center'} justifyContent={'space-evenly'} h={'600px'}>
          <Flex align={'center'}>
            <Text textStyle={'headline2'}>{groupInfo.group_name}</Text>
            <Text textStyle={'body2'}>님이 초대장을 보냈습니다</Text>
          </Flex>
          <InvitationIcon />
          <Text textStyle={'headline2'}>{groupInfo.group_name}</Text>
          <Text textStyle={'body3'}>멤버 리스트</Text>
          <Divider mt={2} />
          <MemeberCard mt={3} />
          <MyButton size="L" text="모임수락" onClick={() => {}} />
          <MyButton size="L" color="negative" text="거절하기" onClick={() => {}} />
        </Flex>
      </Stack>
    </BackGroundCard>
  );
};

export default TeamAccept;
