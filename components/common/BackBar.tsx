import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

const BackBar = ({ title }) => {
  return (
    <Flex
      flexDir={'row'}
      alignItems={'center'}
      fontStyle={'headline2'}
      h={'60px'}
      w={'100%'}
      textStyle={'headline2'}
      gap={'100px'}
    >
      <ChevronLeftIcon />
      {title}
    </Flex>
  );
};

export default BackBar;
