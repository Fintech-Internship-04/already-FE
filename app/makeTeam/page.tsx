'use client';

import { Box, Flex, Text, Button } from '@chakra-ui/react';
import InputBar from '../../components/common/InputBar';

import AppContainer from '@/components/common/AppContainer';
import { SearchIcon, SmallAddIcon, EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Avatar, Tag, TagLabel } from '@chakra-ui/react';
import LogoSmall from '@/components/icons/LogoSmall';
import ExtraBar from '@/components/makeTest/ExtraBar';

const ProfileTag = ({ name, userCode }) => {
  return (
    <Tag
      size="lg"
      colorScheme="black"
      borderRadius="full"
      w={137}
      h={34}
      bg="#D9D9D9"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <Avatar size="xs" />
      <Flex flexDirection="column">
        <TagLabel fontSize={13} color="black">
          {name}
        </TagLabel>
        <TagLabel fontSize={8} color="black">
          {userCode}
        </TagLabel>
      </Flex>
      <SmallCloseIcon />
    </Tag>
  );
};

const MakeTeam = () => {
  const dummyList = [
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '이은비', userCode: 'abcdefgh' },
  ];

  const dummyList2 = [
    { name: '이은비', userCode: 'abcdefgh' },
    { name: '김철수', userCode: 'ijklmnop' },
    { name: '박영희', userCode: 'qrstuvwx' },
  ];

  return (
    <AppContainer>
      <InputBar icon={<SearchIcon color="gray.300" />} placeholder="친구 찾기" />
      <Box
        w={330}
        h={262}
        borderRadius={'8px'}
        border={'1px solid var(--gray-200, #E2E8F0)'}
        pt={7}
        pb={7}
        pl={10}
        pr={10}
      >
        {dummyList.map((item, index) => (
          <Flex
            key={index}
            display="flex"
            justify="space-between"
            alignItems="center"
            marginBottom="12px"
          >
            <Text>{item.name}</Text>
            <Button
              w={90}
              h={25}
              borderRadius={'8px'}
              border={'1px solid var(--blue-500, #3182CE)'}
              color={'var(--blue-500, #3182CE)'}
              bg={'white'}
              fontSize={10}
            >
              모임 추가
              <SmallAddIcon />
            </Button>
          </Flex>
        ))}
      </Box>
      <Box w={330} h={262} borderRadius={'8px'} bg={'#EDF2F7'} p={2}>
        <InputBar icon={<EditIcon color="gray.300" />} placeholder="모임 이름 입력" />
        {dummyList2.map((item, index) => (
          <ProfileTag key={index} name={item.name} userCode={item.userCode} />
        ))}
        <ExtraBar />
      </Box>
    </AppContainer>
  );
};
export default MakeTeam;
