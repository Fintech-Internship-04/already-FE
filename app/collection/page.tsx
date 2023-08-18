'use client';

import { Box } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import Header from '@/components/home/Header';
import BackBar from '@/components/common/BackBar';
import BackGroundCard from '@/components/common/BackGroundCard';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Divider from '@/components/common/Divider';
import AlertCard from '@/components/common/AlertCard';
const Collection = () => {
  return (
    <AppContainer>
      <BackBar title={'활동내역'} />
      <BackGroundCard>
        <Flex flexDir="column">
          <Text textStyle={'headlin1'} mb={'15px'}>
            Today
          </Text>
          <AlertCard />
          <Divider mt={'20px'} mb={'20px'} />
          <Flex flexDir={'column'} gap={'20px'}>
            <AlertCard type="PaymentRequest" />
            <AlertCard type="PaymentRequest" />
            <AlertCard type="PaymentRequest" />
          </Flex>
        </Flex>
      </BackGroundCard>
      <Navbar currentTab="Collection" />
    </AppContainer>
  );
};

export default Collection;
