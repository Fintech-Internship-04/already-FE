import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { CloseIcon, InfoOutlineIcon, ChevronRightIcon } from '@chakra-ui/icons';
import GroupIcon from '../icons/GroupIcon';
const AlertCard = ({ type = 'TeamRequest' }) => {
  //TeamRequest, PaymentRequest
  let title = '모임 요청';
  let buttonTitle = '참여';
  if (type === 'PaymentRequest') {
    title = '결제요청';
    buttonTitle = '수락';
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
      <Flex flexDir={'column'}>
        <Flex flexDir={'row'} justify={'space-between'} align={'center'}>
          <InfoOutlineIcon />
          <Text pl={'10px'}>{title}</Text>
          <ChevronRightIcon />
          <Text textStyle={'caption2'}>1시간 전</Text>
        </Flex>
        <Flex flexDir={'row'} justify={'space-between'} align={'center'}>
          <GroupIcon />
          <Text pl={'10px'} textStyle={'overline'}>
            오늘만 산다
          </Text>
          <Text textStyle={'overline'}> | </Text>
          <Text textStyle={'overline'}>정윤아님 외 6명</Text>
        </Flex>
      </Flex>

      <Button w={'60px'} h={'30px'} borderRadius={'99px'} bg={'#92A3FD'} color={'white'}>
        <Text textStyle={'caption2'}>{buttonTitle}</Text>
      </Button>
      <CloseIcon boxSize={3} mb={'20px'} />
    </Flex>
  );
};

export default AlertCard;
