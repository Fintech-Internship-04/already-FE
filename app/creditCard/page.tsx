'use client';

import { Box, Flex } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import Header from '@/components/home/Header';
import BackBar from '@/components/common/BackBar';
import { Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const CreditCard = () => {
  return (
    <AppContainer>
      <BackBar title={'결제내역'} />
      <Flex flexDir={'column'} justify={'space-evenly'} alignItems={'center'}>
        <Flex
          w={'342px'}
          h={'55px'}
          borderRadius={'16px'}
          background={
            'linear-gradient(317deg, rgba(146, 163, 253, 0.2) 0%, rgba(157, 206, 255, 0.2) 100%)'
          }
          flexDir={'row'}
          alignItems={'center'}
          justify={'space-between'}
          pl={'30px'}
          pr={'30px'}
          mt={'30px'}
          mb={'30px'}
        >
          <Text textStyle={'subtitle1'}>날짜순</Text>
          <Text textStyle={'subtitle1'} ml={'40px'}>
            23/08/10
          </Text>
          <CalendarIcon boxSize={6} />
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>날짜</Th>
                <Th>결제처</Th>
                <Th isNumeric>결제금액</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>08/10</Td>
                <Td>냠냠막창</Td>
                <Td isNumeric>58,000</Td>
              </Tr>
              <Tr>
                <Td>08/05</Td>
                <Td>마라탕</Td>
                <Td isNumeric>69,000</Td>
              </Tr>
              <Tr>
                <Td>08/15</Td>
                <Td>두끼</Td>
                <Td isNumeric>46,000</Td>
              </Tr>
              <Tr>
                <Td>08/10</Td>
                <Td>엽떡</Td>
                <Td isNumeric>46,000</Td>
              </Tr>
              <Tr>
                <Td>08/10</Td>
                <Td>배고파</Td>
                <Td isNumeric>80,000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Navbar currentTab="CreditCard" />
    </AppContainer>
  );
};

export default CreditCard;
