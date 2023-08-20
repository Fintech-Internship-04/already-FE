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
            23/08/20
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
              {/* case3 */}
              <Tr>
                <Td>8/20 13:03</Td>
                <Td>맥도날드</Td>
                <Td isNumeric>350,000</Td>
              </Tr>
              {/* case2 */}
              <Tr>
                <Td>8/20 13:02</Td>
                <Td>엽기떡볶이</Td>
                <Td isNumeric>350,000</Td>
              </Tr>
              {/* case1 */}
              <Tr>
                <Td>8/20 13:01</Td>
                <Td>두끼</Td>
                <Td isNumeric>10,000</Td>
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
