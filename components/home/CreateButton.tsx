import { Flex, Text } from '@chakra-ui/react';

import PlusIcon from '../icons/PlusIcon';

const CreateButton = ({ ...props }) => {
  return (
    <Flex
      borderRadius={'16px'}
      p={'18px 21px'}
      backgroundColor={'rgba(146, 163, 253, 0.2)'}
      {...props}
      justify={'space-between'}
    >
      <Text mt={1} textStyle={'body3'}>
        모임 생성하기
      </Text>
      <PlusIcon />
    </Flex>
  );
};

export default CreateButton;
