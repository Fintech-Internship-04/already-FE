/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import BackGroundCard from '@/components/common/BackGroundCard';
import MyButton from '@/components/common/MyButton';
import PaymentIcon from '@/components/icons/PaymentIcon';
type PaymentProps = {
  onClose: () => void;
};
const PaymentAccept: React.FC<PaymentProps> = ({ onClose }) => {
  const [groupInfo, setGroupInfo] = useState<any>({});
  const [userCode, setUserCode] = useState<any>('');
  const router = useRouter();
  const acceptPay = async () => {
    const response = await groupApis.calculatePayment(userCode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isRequest', 'false');
    }
    router.push('/');
    onClose();
    console.log('accept', response);
  };
  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await groupApis.getGroupInfo(Number(localStorage.getItem('groupId')));
      console.log('fetchdd', response);
      if (response.data) {
        setGroupInfo(response.data.data);
      }
    };
    setUserCode(Number(localStorage.getItem('currentUserCode')));
    fetchGroupInfo();
  }, []);

  return (
    <BackGroundCard>
      <Stack gap={6}>
        <Flex justify={'center'} align={'flex-end'}>
          <Box w={2} h={2} />
          <Text textStyle={'body3'} color={'#2D3748'} fontWeight={'500'}>
            정산요청
          </Text>
        </Flex>

        <Flex flexDir={'column'} alignItems={'center'} justifyContent={'space-evenly'} h={'600px'}>
          <Flex align={'center'}>
            <Text textStyle={'headline2'}>결제</Text>
            <Text textStyle={'body2'}>를 수락하시겠습니까?</Text>
          </Flex>
          <PaymentIcon />
          <Text textStyle={'headline2'}>{groupInfo.group_name}</Text>
          <Flex
            w={'157px'}
            h={'50px'}
            bg={'white'}
            borderRadius={'10px'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text textAlign={'center'} py={'auto'} textStyle={'headline2'}>
              70,000원
            </Text>
          </Flex>
          <Flex flexDir={'column'} gap={'10px'} justify={'center'} align={'center'}>
            <Text textStyle={'body1'}>결제자 {groupInfo.owner_name}</Text>
            <Text textStyle={'body1'}>전체금액 350,000원</Text>
            <Text textStyle={'body1'}>인원 5명</Text>
          </Flex>

          <Flex flexDir={'row'} w={'100%'} justify={'space-between'}>
            <MyButton size="S" color="positive" text="결제하기" onClick={acceptPay} />
            <MyButton size="S" color="negative" text="거절하기" onClick={onClose} />
          </Flex>
        </Flex>
      </Stack>
    </BackGroundCard>
  );
};

export default PaymentAccept;
