'use client';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import MemeberCard from '@/components/common/MemberCard';
import CloseIcon from '@/components/icons/CloseIcon';
import GroupFourIcon from '@/components/icons/GroupFourIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';

const TeamInfo = () => {
  return (
    <AppContainer>
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
              4조
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
          {/* 정산 여부 모임 나가기 버튼 추가 */}
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default TeamInfo;
