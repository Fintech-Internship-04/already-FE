'use client';

import { Box } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import Header from '@/components/home/Header';

const Collection = () => {
  return (
    <AppContainer>
      <Header mt={7} />
      <Box h={16} />
      활동내역
      <Navbar currentTab="Collection" />
    </AppContainer>
  );
};

export default Collection;
