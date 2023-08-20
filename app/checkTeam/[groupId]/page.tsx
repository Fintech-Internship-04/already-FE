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

type FailTextProps = {
  price: number;
};
const FailText: React.FC<FailTextProps> = ({ price }) => {
  return (
    <Flex direction={'column'} textStyle={'overline'} color={'#D53F8C'}>
      <Text>{price.toLocaleString('ko-KR')}원</Text>
      <Text fontWeight={'700'}>미정산</Text>
    </Flex>
  );
};
const CheckTeamFail = ({ params }: { params: { groupId: string } }) => {
  const [groupInfo, setGroupInfo] = useState<any>([]);

  const { groupId } = params;

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const response = await groupApis.getGroupInfo(groupId);
      console.log('fetchff', response);
      if (response.data) {
        setGroupInfo(response.data.data);
      }
    };
    fetchGroupInfo();
  }, [groupId]);
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
            {groupInfo.user_list &&
              groupInfo?.user_list.map((el: any) => {
                return (
                  <>
                    {el.is_taken ? (
                      <MemeberCard
                        key={el.user_code}
                        userName={el.user_name}
                        mt={3}
                        userCode={el.user_code}
                        icon={<CheckIcon />}
                      />
                    ) : (
                      <MemeberCard
                        mt={3}
                        userName={el.user_name}
                        userCode={el.user_code}
                        icon={<FailText price={70000} />}
                      />
                    )}
                  </>
                );
              })}
            <MemeberCard mt={3} userCode={'1'} userName={'김의찬'} icon={<CheckIcon />} />
            <MemeberCard mt={3} userCode={'7'} userName={'엘론'} icon={<CheckIcon />} />
            <MemeberCard mt={3} userCode={'8'} userName={'참치'} icon={<CheckIcon />} />
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
