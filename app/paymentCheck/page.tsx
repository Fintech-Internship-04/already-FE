'use client';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import MemeberCard from '@/components/common/MemberCard';
import CloseIcon from '@/components/icons/CloseIcon';
import GroupFourIcon from '@/components/icons/GroupFourIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';

import MyButton from '@/components/common/MyButton';
import PaymentIcon from '@/components/icons/PaymentIcon';
import GreenCheckIcon from '@/components/icons/GreenCheckIcon';

const PaymentCheck = () => {
  return (
    <AppContainer>
      <BackGroundCard>
        <Stack gap={6}>
          <Flex justify={'space-between'} align={'flex-end'}>
            <Box w={2} h={2} />
            <Text textStyle={'body3'} color={'#2D3748'} fontWeight={'500'}>
              계산완료
            </Text>
            <CloseIcon />
          </Flex>

          <Flex
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            h={'600px'}
          >
            <Flex align={'center'}>
              <Text textStyle={'headline2'}>정산완료</Text>
            </Flex>
            <GreenCheckIcon />
            <Text textStyle={'headline2'}>4조</Text>
            <Flex flexDir={'column'} justify={'center'} align={'center'}>
              <Text textStyle={'body2'}>핀인코 님에게</Text>
              <Text textStyle={'body2'}>송금을 완료하였습니다</Text>
            </Flex>

            <Box
              w={'157px'}
              h={'50px'}
              bg={'white'}
              borderRadius={'10px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Text textStyle={'headline2'} mt={'10px'} ml={'25px'}>
                19,600원
              </Text>
            </Box>

            <MyButton size="L" color="positive" text="확인" onClick={() => {}} />
          </Flex>
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default PaymentCheck;
