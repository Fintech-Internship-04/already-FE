'use client';

import { Box } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import Header from '@/components/home/Header';

const CreditCard = () => {
  return (
    <AppContainer>
      <Header mt={7} />
      <Box h={16} />
      결제 내역
      <Navbar currentTab="CreditCard" />
    </AppContainer>
  );
};

export default CreditCard;
