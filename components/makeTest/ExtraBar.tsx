import { Box, Flex, Text, Button } from '@chakra-ui/react';
import InputBar from '../../components/common/InputBar';

import AppContainer from '@/components/common/AppContainer';
import { SearchIcon, SmallAddIcon, EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Avatar, Tag, TagLabel } from '@chakra-ui/react';
import LogoSmall from '@/components/icons/LogoSmall';
import { Nunito } from 'next/font/google';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ExtraBar = () => {
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

      <Text textStyle={'body2'}>0 명</Text>

      <Flex flexDir={'column'} gap={1}>
        <AddIcon bg={'#9DCEFF'} p={1} color={'white'} borderRadius={5} />
        <MinusIcon bg={'#F28F8F'} p={1} color={'white'} borderRadius={5} />
      </Flex>

      <Text textStyle={'body2'}>총 0 명</Text>
    </Flex>
  );
};

export default ExtraBar;
