import { Input } from '@chakra-ui/react';
import { InputLeftElement } from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';

interface InputBarProps {
  icon: JSX.Element; // JSX.Element 타입으로 icon을 받기
  placeholder: string;
}

const InputBar: React.FC<InputBarProps> = ({ icon, placeholder }) => {
  return (
    <InputGroup size="lg" width="315px" height="48px" backgroundColor="#F7F8F8" borderRadius="14px">
      <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
      <Input type="text" placeholder={placeholder} border="none" />
    </InputGroup>
  );
};

export default InputBar;
