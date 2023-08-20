/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useCallback, useEffect, useState } from 'react';

import { SearchIcon, SmallAddIcon, EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Button, Grid, Avatar, Tag, TagLabel, Fade } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import groupApis from '@/api/group';
import memberApis from '@/api/member';
import AppContainer from '@/components/common/AppContainer';
import BackBar from '@/components/common/BackBar';
import MyButton from '@/components/common/MyButton';
import ExtraBar from '@/components/makeTest/ExtraBar';
import debounce from '@/utils/debounce';

import InputBar from '../../components/common/InputBar';

type ProfileTagProps = {
  name: string;
  userCode: number | string;
  handleChange?: any;
};
const ProfileTag: React.FC<ProfileTagProps> = ({ name, userCode, handleChange }) => {
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
      <Box onClick={handleChange}>
        <SmallCloseIcon />
      </Box>
    </Tag>
  );
};

const MakeTeam = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [searchList, setSearchList] = useState<any>([]);
  const [groupName, setGroupName] = useState('');
  // 추가한 멤버
  const [memberList, setMemberList] = useState<any>([]);
  const [currentUser, setCurrentUser] = useState({ user_name: 'test', user_code: 77 });
  const [headCount, setHeadCount] = useState(0);
  // 전체 유저
  const [allUsers, setAllUsers] = useState<any>([]);
  const router = useRouter();
  const createGroup = async () => {
    const response = await groupApis.createGroup({
      group_name: groupName,
      owner_code: currentUser.user_code,
      headcount: headCount,
      user_list: memberList,
    });
    if (response.ok) {
      router.push('/teamInfo');
    }
    console.log(response);
  };

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.target.value);
  };
  const addMemeber = (usercode: string, username: string) => {
    setMemberList((prev: any) => [...prev, { user_code: usercode, user_name: username }]);
    setHeadCount((prev) => (prev += 1));
  };
  const searchAPI = async (keyword: string) => {
    const response = await memberApis.searchMember(keyword);
    if (response.data) {
      setSearchList(response.data.data);
    }
  };
  const debouncedSearch = useCallback(debounce(searchAPI, 700), []);
  useEffect(() => {
    if (userInput) {
      debouncedSearch(userInput);
    }
  }, [userInput, debouncedSearch]);

  useEffect(() => {
    if (displayCount < allUsers.length) {
      if (displayCount < 2) {
        const timer = setTimeout(() => {
          setDisplayCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(
          () => {
            setDisplayCount((prevCount) => prevCount + 1);
          },
          Math.floor(Math.random() * 500),
        );

        return () => clearTimeout(timer); // Clean up the timer
      }
    }
  }, [displayCount, allUsers]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await memberApis.getButtonMembers();
      console.log(33, response);
      if (response.data) {
        setAllUsers(response.data.data);
      }
    };
    fetchMembers();
  }, []);
  return (
    <AppContainer>
      <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'25px'}>
        <BackBar title={'모임 생성'} />
        <Box position={'relative'}>
          <InputBar
            icon={<SearchIcon color="gray.300" />}
            placeholder=""
            handleChange={changeHandler}
          />
          {userInput && (
            <Box
              w={'full'}
              borderRadius={'6px'}
              border={'1px solid #E2E8F0'}
              position={'absolute'}
              zIndex={99}
              bg={'white'}
              maxH={'300px'}
              overflow={'scroll'}
            >
              {searchList.map((el: any) => {
                return (
                  <Flex
                    borderBottom={'1px solid #E2E8F0'}
                    key={el.user_code}
                    align={'center'}
                    px={5}
                    justify={'space-between'}
                  >
                    <Flex align={'center'}>
                      <Text lineHeight={'46px'}>{el.user_name}</Text>
                      <Text color={'grey'} ml={3} textStyle={'body3'}>
                        {el.user_code}
                      </Text>
                    </Flex>
                    <Button
                      w={90}
                      h={25}
                      borderRadius={'8px'}
                      border={'1px solid var(--blue-500, #3182CE)'}
                      color={'var(--blue-500, #3182CE)'}
                      bg={'white'}
                      fontSize={10}
                      onClick={() => addMemeber(el.user_name, el.user_code)}
                    >
                      모임 추가
                      <SmallAddIcon />
                    </Button>
                  </Flex>
                );
              })}
            </Box>
          )}
        </Box>
        <Box
          w={330}
          h={262}
          borderRadius={'8px'}
          border={'1px solid var(--gray-200, #E2E8F0)'}
          py={6}
          px={6}
          fontStyle={'body3'}
          overflow="auto"
        >
          {allUsers.slice(0, displayCount).map((item: any, index: number) => (
            <Fade in={true} key={index} transition={{ enter: { duration: 1 } }}>
              <Flex
                key={index}
                display="flex"
                justify="space-between"
                alignItems="center"
                marginBottom="12px"
                pb={4}
                borderBottom={'1px solid #E2E8F0'}
              >
                <Flex align={'center'}>
                  <Text>{item.user_name}</Text>
                  <Text color={'grey'} ml={3} textStyle={'body3'}>
                    {item.user_code}
                  </Text>
                </Flex>
                <Button
                  w={90}
                  h={25}
                  borderRadius={'8px'}
                  border={'1px solid var(--blue-500, #3182CE)'}
                  color={'var(--blue-500, #3182CE)'}
                  bg={'white'}
                  fontSize={10}
                  onClick={() => addMemeber(item.user_name, item.user_code)}
                >
                  모임 추가
                  <SmallAddIcon />
                </Button>
              </Flex>
            </Fade>
          ))}
        </Box>
        <Flex
          flexDir={'column'}
          w={'330px'}
          borderRadius={'8px'}
          bg={'#EDF2F7'}
          p={2}
          pb={4}
          pt={4}
          mb={4}
          gap={5}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <InputBar
            icon={<EditIcon color="gray.300" />}
            placeholder="모임 이름"
            handleChange={(e) => setGroupName(e.target.value)}
          />

          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {memberList.map((item: any, index: number) => (
              <ProfileTag
                key={index}
                name={item.user_code}
                userCode={item.user_name}
                handleChange={() => setHeadCount((prev) => (prev -= 1))}
              />
            ))}
          </Grid>

          <ExtraBar headCount={headCount} setHeadCount={setHeadCount} />
          <MyButton size="L" text="모임 생성" onClick={createGroup} />
        </Flex>
      </Flex>
    </AppContainer>
  );
};
export default MakeTeam;
