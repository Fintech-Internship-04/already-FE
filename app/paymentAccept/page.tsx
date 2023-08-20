'use client';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import MyButton from '@/components/common/MyButton';
import CloseIcon from '@/components/icons/CloseIcon';
import PaymentIcon from '@/components/icons/PaymentIcon';

const PaymentAccept = () => {
  return (
    <AppContainer>
      <BackGroundCard>
        <Stack gap={6}>
          <Flex justify={'space-between'} align={'flex-end'}>
            <Box w={2} h={2} />
            <Text textStyle={'body3'} color={'#2D3748'} fontWeight={'500'}>
              정산요청
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
              <Text textStyle={'headline2'}>결제</Text>
              <Text textStyle={'body2'}>를 수락하시겠습니까?</Text>
            </Flex>
            <PaymentIcon />
            <Text textStyle={'headline2'}>4조</Text>
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
            <Flex flexDir={'column'} gap={'10px'} justify={'center'} align={'center'}>
              <Text textStyle={'body1'}>결제자 핀인코</Text>
              <Text textStyle={'body1'}>전체금액 98,000원</Text>
              <Text textStyle={'body1'}>인원 5명</Text>
            </Flex>

            <Flex flexDir={'row'} w={'100%'} justify={'space-between'}>
              <MyButton size="S" color="positive" text="결제하기" onClick={() => {}} />
              <MyButton size="S" color="negative" text="거절하기" onClick={() => {}} />
            </Flex>
          </Flex>
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default PaymentAccept;
