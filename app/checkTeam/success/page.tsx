'use client';

import { useState, useEffect } from 'react';

import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import MemeberCard from '@/components/common/MemberCard';
import MyButton from '@/components/common/MyButton';
import CheckIcon from '@/components/icons/CheckIcon';
import CloseIcon from '@/components/icons/CloseIcon';

const fakeCardList = [1, 2, 3, 4, 5];

const CheckTeamFail = () => {
  const [cardList, setCardList] = useState(fakeCardList);

  useEffect(() => {
    //   async function () => {
    // const response = await axios~~~
    //   멤버 정보 받아오는 api
    //   }
    setCardList([1, 2, 3, 4, 5]);
  }, []);
  return (
    <AppContainer>
      <Box mt={10} />
      <BackGroundCard>
        <Stack gap={6} align={'center'}>
          <Flex w={'full'} justify={'flex-end'} align={'flex-end'}>
            <CloseIcon />
          </Flex>
          <Flex direction={'column'} align={'center'}>
            <Text mb={2} textStyle={'subtitle1'}>
              친구의 정산여부
            </Text>
          </Flex>
          <Stack my={13} mb={0} h={'410px'} overflow={'scroll'}>
            {cardList.map((el) => {
              return (
                <>
                  <MemeberCard key={el} mt={3} userCode="user code" icon={<CheckIcon />} />
                </>
              );
            })}
          </Stack>
          <Image src="/찌개마을.png" alt="Dan Abramov" />
          <MyButton text="확인" onClick={() => console.log('Positive clicked')} />
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default CheckTeamFail;
