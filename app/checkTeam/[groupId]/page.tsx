/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import groupApis from '@/api/group';
import AppContainer from '@/components/common/AppContainer';
import BackGroundCard from '@/components/common/BackGroundCard';
import MemeberCard from '@/components/common/MemberCard';
import MyButton from '@/components/common/MyButton';
import CheckIcon from '@/components/icons/CheckIcon';
import CloseIcon from '@/components/icons/CloseIcon';

const fakeCardList = [1, 2, 3, 4, 5];
type FailTextProps = {
  price: number;
};
const FailText: React.FC<FailTextProps> = ({ price }) => {
  return (
    <Flex direction={'column'} textStyle={'overline'} color={'#D53F8C'}>
      <Text>{price}원</Text>
      <Text fontWeight={'700'}>미정산</Text>
    </Flex>
  );
};
const CheckTeamFail = ({ params }: { params: { groupId: string } }) => {
  const [cardList, setCardList] = useState(fakeCardList);
  const [groupInfo, setGroupInfo] = useState<any>({});

  const { groupId } = params;

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
  useEffect(() => {
    //   async function () => {
    // const response = await axios~~~
    //   멤버 정보 받아오는 api
    //   }
    setCardList([1, 2, 3, 4, 5]);
  }, []);
  return (
    <AppContainer>
      <Box mt={12} />
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
          <Stack my={13} mb={10} h={'410px'} overflow={'scroll'}>
            {cardList.map((el) => {
              return (
                <>
                  <MemeberCard key={el} mt={3} userCode="user code" icon={<CheckIcon />} />
                  <MemeberCard mt={3} userCode="user code" icon={<FailText price={5000} />} />
                </>
              );
            })}
          </Stack>
          <MyButton
            color="negative"
            text="미정산 알림"
            onClick={() => console.log('Positive clicked')}
          />
        </Stack>
      </BackGroundCard>
    </AppContainer>
  );
};

export default CheckTeamFail;
