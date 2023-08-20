import { ReactNode } from 'react';

import { Flex, Text } from '@chakra-ui/react';

import LogoSmall from '../icons/LogoSmall';
type AlarmProps = {
  content: ReactNode;
};
const AlarmCard: React.FC<AlarmProps> = ({ content }) => {
  return (
    <Flex p={4} h={'150px'} bg={'white'} flexDir={'column'} borderRadius={'36px'} align={'center'}>
      <Text textStyle={'headline2'} fontWeight={700}>
        알림
      </Text>
      <Text mt={9} mb={4} textStyle={'subtitle2'}>
        {content}
      </Text>
      <LogoSmall />
    </Flex>
  );
};

export default AlarmCard;
