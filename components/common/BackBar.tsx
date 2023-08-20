import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
type BackBarProps = {
  title: string;
};
const BackBar: React.FC<BackBarProps> = ({ title }) => {
  const goBack = () => {
    window.history.back(); // 뒤로가기-
  };
  return (
    <Flex
      flexDir={'row'}
      alignItems={'center'}
      fontStyle={'headline2'}
      h={'60px'}
      w={'100%'}
      textStyle={'headline2'}
      gap={'100px'}
    >
      <button onClick={goBack}>
        <ChevronLeftIcon />
      </button>

      {title}
    </Flex>
  );
};

export default BackBar;
