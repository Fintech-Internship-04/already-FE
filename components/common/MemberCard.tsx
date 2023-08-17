import { Box, Flex, Text, FlexProps } from '@chakra-ui/react';

import AvatarIcon from '../icons/AvatarIcon';
type MemberCardProps = {
  icon?: React.ReactNode | undefined;
  userCode?: string;
};
const MemeberCard: React.FC<MemberCardProps & FlexProps> = ({
  icon = '',
  userCode = '',
  ...props
}) => {
  return (
    <Flex
      borderRadius={'10px'}
      align={'center'}
      w={icon ? '260px' : '130px'}
      px={icon ? 2 : 5}
      py={3}
      bg={'#FFF'}
      {...props}
    >
      <AvatarIcon />
      <Box ml={3}>
        <Text textStyle={'subtitle2'}>name1</Text>
        {userCode && (
          <Text color={'#ADA4A5'} textStyle={'caption1'}>
            {userCode}
          </Text>
        )}
        {icon && icon}
      </Box>
    </Flex>
  );
};

export default MemeberCard;
