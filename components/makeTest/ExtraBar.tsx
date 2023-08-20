/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

import LogoSmall from '@/components/icons/LogoSmall';

type ExtraBarProps = {
  headCount: number;
  setHeadCount: any;
};
const ExtraBar: React.FC<ExtraBarProps> = ({ headCount, setHeadCount }) => {
  const [extraUser, setExtraUser] = useState(0);
  return (
    <Flex
      flexDir={'row'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      w={'315px'}
      h={'60px'}
      borderRadius={99}
      bg={'#F7F8F8'}
    >
      <Box fontSize={'10px'} fontFamily={'Nunito'} fontWeight={900}>
        <span style={{ display: 'inline-block', width: '85px', height: '13px' }}>
          <LogoSmall />
        </span>
        를<br />안 쓰는 친구가 있어요
      </Box>

      <Text textStyle={'body2'}>{extraUser} 명</Text>

      <Flex flexDir={'column'} gap={1}>
        <Box
          onClick={() => {
            setExtraUser((prev) => prev + 1);
            setHeadCount((prev: number) => prev + 1);
          }}
        >
          <AddIcon bg={'#9DCEFF'} p={1} color={'white'} borderRadius={5} />
        </Box>
        <Box
          onClick={() => {
            if (extraUser && headCount) {
              setExtraUser((prev) => prev - 1);
              setHeadCount((prev: number) => prev - 1);
            }
          }}
        >
          <MinusIcon bg={'#F28F8F'} p={1} color={'white'} borderRadius={5} />
        </Box>
      </Flex>
      <Text textStyle={'body2'}>총 {headCount} 명</Text>
    </Flex>
  );
};

export default ExtraBar;
