import { Flex, Text } from '@chakra-ui/react';

import GroupIcon from '../icons/GroupIcon';

type GroupCardType = {
  groupName: string;
  groupInfo: string;
};
const GroupCard: React.FC<GroupCardType> = ({ groupName, groupInfo }) => {
  return (
    <Flex
      direction={'column'}
      borderRadius={'16px'}
      p={'18px 21px'}
      backgroundColor={'#E2E9F3'}
      justify={'space-between'}
    >
      <Flex>
        <GroupIcon />
        <Text ml={1} fontSize={'14px'} fontWeight={'500'}>
          {groupName}
        </Text>
      </Flex>
      <Text mt={9} fontSize={'12px'} fontWeight={'500'}>
        {groupInfo}
      </Text>
    </Flex>
  );
};

export default GroupCard;
