/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Flex, Box, Text, Circle } from '@chakra-ui/react';

type BlueToothType = {
  isOn?: boolean;
  handleClick: any;
};

const BlueTooth: React.FC<BlueToothType> = ({ isOn = false, handleClick }) => {
  return (
    <Flex
      borderRadius={'20px'}
      w={'full'}
      p={'18px 18px'}
      justify={'space-between'}
      backgroundColor={isOn ? 'rgba(146, 163, 253, 0.2)' : 'rgba(253, 139, 123, 0.2)'}
    >
      <Box mt={'10px'}>
        <Text letterSpacing={'-1.5px'} textStyle={'headline2'} opacity={'1'}>
          가까이 있는 친구 찾기
        </Text>
        <Text letterSpacing={'-1.5px'} color={'grey.500'} mt={'11px'} textStyle={'caption1'}>
          주변의 친구와 모임을 만들어
          <br /> 쉽고 빠르게 정산하세요!
        </Text>
      </Box>
      <Circle onClick={handleClick} size="99px" bg="rgba(255, 255, 255, 1)" color="white">
        <Text fontSize={'36px'} fontWeight={'700'} color={isOn ? 'primary.400' : 'orange'}>
          {isOn ? 'on' : 'off'}
        </Text>
      </Circle>
    </Flex>
  );
};

export default BlueTooth;
