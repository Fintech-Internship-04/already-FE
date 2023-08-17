import { Box, BoxProps } from '@chakra-ui/react';

const Divider: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} h={'2px'} w={'full'} bg={'rgba(0, 0, 0, 0.30)'} />;
};

export default Divider;
