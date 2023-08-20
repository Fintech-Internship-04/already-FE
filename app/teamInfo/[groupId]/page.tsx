/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import MemeberCard from '@/components/common/MemberCard';
import MyButton from '@/components/common/MyButton';
import CloseIcon from '@/components/icons/CloseIcon';
import GroupFourIcon from '@/components/icons/GroupFourIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';

const TeamInfo = ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;
  const [groupInfo, setGroupInfo] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await groupApis.getGroupInfo(groupId);
      console.log('fetch', response);
      if (response.data) {
        setGroupInfo(response.data.data);
      }
    };
    fetchGroupInfo();
  }, []);

  return (
    <AppContainer>
      <Box mt={12} />
      <BackGroundCard>
        <Stack gap={6}>
          <Flex justify={'space-between'} align={'flex-end'}>
            <Box w={2} h={2} />
            <Text textStyle={'body3'} color={'#2D3748'} fontWeight={'500'}>
              모임 상세정보
            </Text>
            <CloseIcon />
          </Flex>
          <Flex mt={12} direction={'column'} align={'center'}>
            <Text mb={2} textStyle={'headline1'}>
              {groupInfo.group_name}
            </Text>
            <GroupFourIcon />
          </Flex>
          <Box mt={16}>
            <Text textStyle={'headline2'}>멤버</Text>
            <MemeberCard mt={3} />
          </Box>
          <Box>
            <Text textStyle={'headline2'}>개설일</Text>
            <Text mt={2} textStyle={'headline2'}>
              2023.08.12
              <Divider mt={4} />
            </Text>
          </Box>
          <Flex justify={'space-between'} align={'center'}>
            <Text textStyle={'headline1'}>결제 내역</Text>
            <RightArrowIcon />
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <MyButton
              size="S"
              color="positive"
              text="정산 여부"
              onClick={() => router.push(`/checkTeam/${groupId}`)}
            />
            <MyButton size="S" color="negative" text="나가기" onClick={() => router.push('/')} />
          </Grid>
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default TeamInfo;