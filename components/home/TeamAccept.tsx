/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Key, useEffect, useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import MemeberCard from '@/components/common/MemberCard';
import MyButton from '@/components/common/MyButton';
import InvitationIcon from '@/components/icons/InvitationIcon';
const TeamAccept = ({ groupId, onClose }: { groupId: number; onClose: any }) => {
  const [groupInfo, setGroupInfo] = useState<any>({});
  const [userCode, setUserCode] = useState<any>('');
  const router = useRouter();
  const acceptGroup = async () => {
    localStorage.setItem('groupId', JSON.stringify(groupId));
    const response = await groupApis.acceptGroup({
      user_code: Number(userCode),
      group_code: Number(groupId),
    });
    if (response.ok) {
      router.push('/');
    }
  };
  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await groupApis.getGroupInfo(groupId);
      console.log('fetchdd', response);
      if (response.data) {
        setGroupInfo(response.data.data);
      }
    };
    setUserCode(localStorage.getItem('currentUserCode'));
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
            <Text textStyle={'headline2'}>{groupInfo.owner_name}</Text>
            <Text textStyle={'body2'}>님이 초대장을 보냈습니다</Text>
          </Flex>
          <InvitationIcon />
          <Text textStyle={'headline2'}>{groupInfo.group_name}</Text>
          <Text textStyle={'body3'}>멤버 리스트</Text>
          <Divider mt={2} />
          {groupInfo.user_list &&
            groupInfo.user_list.map((el: { user_name: Key | null | undefined }) => {
              return <MemeberCard key={el.user_name} mt={3} />;
            })}
          <MyButton size="L" text="모임수락" onClick={acceptGroup} />
          <MyButton size="L" color="negative" text="거절하기" onClick={onClose} />
        </Flex>
      </Stack>
    </BackGroundCard>
  );
};

export default TeamAccept;
