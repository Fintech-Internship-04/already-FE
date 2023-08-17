import { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

const BackGroundCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box borderRadius={'10px'} bg={'#EDF2F7'} w={'full'} h={'713px'} my={'47px'} px={6} py={4}>
      {children}
    </Box>
  );
};

export default BackGroundCard;
