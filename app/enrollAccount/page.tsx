/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authentication';
import AppContainer from '@/components/common/AppContainer';
import InputBar from '@/components/common/InputBar';
import MyButton from '@/components/common/MyButton';
import { CreditCardIcon } from '@/components/icons';
import AvatarIcon from '@/components/icons/AvatarIcon';
import Logo from '@/components/icons/Logo';
import LogoSmall from '@/components/icons/LogoSmall';
import PhoneCallIcon from '@/components/icons/PhoneCallIcon';

const EnrollAccount = () => {
  const [inputValues, setInputValues] = useState<any>({});
  const userCode = localStorage.getItem('currentUserCode');
  console.log({
    account_num: inputValues.account_num,
    bank_name: inputValues.bank_name,
    user_code: Number(userCode),
  });
  const router = useRouter();
  const handleEnroll = async () => {
    const response = await authApis.enrollAccount({
      account_num: inputValues.account_num,
      bank_name: inputValues.bank_name,
      user_code: Number(userCode),
    });
    console.log(44, response);
    if (response.ok) {
      // localStorage.setItem('currentUser',{})
      router.push('/enrollAccount/arsCertification');
    }
  };
  const enrollInfo = [
    { icon: <AvatarIcon />, placeholder: '이름', title: 'user_name' },
    { icon: <CreditCardIcon />, placeholder: '계좌번호', title: 'account_num' },
    { icon: <CreditCardIcon />, placeholder: '은행 이름', title: 'bank_name' },
    {
      icon: <PhoneCallIcon />,
      placeholder: '전화번호',
      title: 'phone_number',
    },
  ];
  return (
    <AppContainer>
      <Stack gap={9} mt={'90px'} align={'center'}>
        <Logo />
        <Text textStyle={'headline2'}>계좌등록</Text>
        {enrollInfo.map((el) => {
          return (
            <>
              <Box mb={3} key={el.title}>
                <InputBar
                  icon={el.icon}
                  placeholder={el.placeholder}
                  handleChange={(e) =>
                    setInputValues((prev: any) => {
                      return { ...prev, [el.title]: e.target.value };
                    })
                  }
                />
              </Box>
            </>
          );
        })}
        <MyButton size="L" text="다음" onClick={handleEnroll} />
        <LogoSmall />
      </Stack>
    </AppContainer>
  );
};

export default EnrollAccount;
