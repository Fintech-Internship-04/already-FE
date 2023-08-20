import { CloseIcon, InfoOutlineIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

import GroupIcon from '../icons/GroupIcon';
const AlertCard = ({
  type = 'TeamRequest',
  time = 'now',
  groupName = '그룹',
  member = '대표자',
  groupNum = 'n',
}) => {
  //TeamRequest, PaymentRequest
  let title = '모임 요청';
  let buttonTitle = '완료';
  let buttonColor = '#E2E8F0';
  if (type === 'PaymentRequest') {
    title = '결제요청';
    buttonTitle = '완료';
  }
  if (type === 'PaymentFail') {
    title = '결제요청';
    buttonTitle = '수락';
    buttonColor = '#92A3FD';
  }

  return (
    <Flex
      w={'300px'}
      h={'67px'}
      p={'15px'}
      bg={'white'}
      flexDir={'row'}
      borderRadius={'20px'}
      justify={'space-between'}
      align={'center'}
    >
      <Flex flexDir={'column'} w={'160px'}>
        <Flex flexDir={'row'} justify={'space-between'} align={'center'}>
          <InfoOutlineIcon />
          <Text pl={'10px'}>{title}</Text>
          <ChevronRightIcon />
          <Text textStyle={'caption2'}>{time}</Text>
        </Flex>
        <Flex flexDir={'row'} justify={'space-between'} align={'center'}>
          <GroupIcon />
          <Text pl={'10px'} textStyle={'overline'}>
            {groupName}
          </Text>
          <Text textStyle={'overline'}> | </Text>
          <Text textStyle={'overline'}>
            {member}님 외 {groupNum}명
          </Text>
        </Flex>
      </Flex>

      <Button w={'60px'} h={'30px'} borderRadius={'99px'} bg={buttonColor} color={'white'}>
        <Text textStyle={'caption2'}>{buttonTitle}</Text>
      </Button>
      <CloseIcon boxSize={3} mb={'20px'} />
    </Flex>
  );
};

export default AlertCard;
