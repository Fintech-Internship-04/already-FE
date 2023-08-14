import { Flex, Box } from '@chakra-ui/react';

import { AlarmIcon } from '../icons';
import Logo from '../icons/Logo';

const Header = ({ ...props }) => {
  return (
    <Flex {...props} justify={'space-between'}>
      <Logo />
      <Box>
        <Box mt={4} />
        <AlarmIcon />
      </Box>
    </Flex>
  );
};

export default Header;
