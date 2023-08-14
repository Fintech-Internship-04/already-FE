import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { CollectionIcon, CreditCardIcon, HomeIcon, MyInfoIcon } from '@/components/icons';

const Divider = () => {
  return <Box borderRadius={4} w={'57px'} h={1} backgroundColor={'primary.300'} mt={'2px'}></Box>;
};

export default function Navbar({ currentTab = 'Home' }) {
  const router = useRouter();
  return (
    <Flex
      bg="#FFFFFF"
      border={'1px solid #ECECEF'}
      backdropFilter={'blur(20px)'}
      borderRadius={'24px 24px 0px 0px'}
      justify={'space-around'}
      alignItems="flex-start"
      p="8px 0px 4px 0px"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={99}
      textStyle={'body2'}
    >
      <Flex w={'57px'} direction={'column'} align={'center'} onClick={() => router.push('/')}>
        <HomeIcon />
        <Text textAlign={'center'}>홈</Text>
        {currentTab === 'Home' ? <Divider /> : ''}
      </Flex>
      <Flex
        w={'57px'}
        onClick={() => router.push('/creditCard')}
        direction={'column'}
        align={'center'}
      >
        <CreditCardIcon />
        <Text textAlign={'center'}>결제내역</Text>
        {currentTab === 'CreditCard' ? <Divider /> : ''}
      </Flex>
      <Flex
        w={'57px'}
        onClick={() => router.push('/collection')}
        direction={'column'}
        align={'center'}
      >
        <CollectionIcon />
        <Text textAlign={'center'}>활동내역</Text>
        {currentTab === 'Collection' ? <Divider /> : ''}
      </Flex>

      <Flex w={'57px'} onClick={() => router.push('/myPage')} direction={'column'} align={'center'}>
        <MyInfoIcon />
        <Text textAlign={'center'}>내정보</Text>
        {currentTab === 'MyInfo' ? <Divider /> : ''}
      </Flex>
    </Flex>
  );
}
