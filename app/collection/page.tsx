'use client';
import { Text, Flex } from '@chakra-ui/react';

import AlertCard from '@/components/common/AlertCard';
import AppContainer from '@/components/common/AppContainer';
import BackBar from '@/components/common/BackBar';
import BackGroundCard from '@/components/common/BackGroundCard';
import Divider from '@/components/common/Divider';
import Navbar from '@/components/common/NavBar';

const Collection = () => {
  return (
    <AppContainer>
      <BackBar title={'활동내역'} />
      <BackGroundCard>
        <Flex flexDir="column">
          <Text mb={'15px'}>Today</Text>
          <Flex flexDir={'column'} gap={'20px'}>
            {/* case3 */}
            {/* <AlertCard
              type="PaymentFail"
              time="3분전"
              groupName="4조"
              member="최지갑님"
              groupNum="3"
            />
            <AlertCard time="3분전" groupName="4조" member="최지갑님" groupNum="3" />

            {/* case2 */}
            {/* <AlertCard
              type="PaymentRequest"
              time="4분전"
              groupName="냐미모임"
              member="김의찬님"
              groupNum="7"
            />
            <AlertCard time="4분전" groupName="냐미모임" member="김의찬님" groupNum="7" /> */}

            {/* case1 */}
            <AlertCard
              type="PaymentRequest"
              time="1분전"
              groupName="뿜빠야조"
              member="이준석"
              groupNum="5"
            />
            <AlertCard time="2분전" groupName="뿜빠야조" member="이준석" groupNum="5" />
          </Flex>
          <Divider mt={'20px'} mb={'20px'} />
        </Flex>
      </BackGroundCard>
      <Navbar currentTab="Collection" />
    </AppContainer>
  );
};

export default Collection;
