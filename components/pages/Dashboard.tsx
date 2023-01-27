import { Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FavotitesSection, BalanceCard, CreateAlertSection, FileCoinCard, Header, SubmitNewPoRSection, TrendingTable } from '../ui'
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = process.env.NEXT_PUBLIC_PK; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendMessageAccepted = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `🤖 HONESTFIL PUSH`,
        body: `Registraste con exito tu alerta next✅`
      },
      payload: {
        title: `🤖 HONESTFIL PUSH`,
        body:  `Registraste con exito tu alerta next✅`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0xd5322d50306678192DfE85ca9D062d3e0D7ACAa9', // recipient address
      channel: 'eip155:5:0x8721FEB1e71e4FEeAfe24a0B2796f5b7E05B25C4', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const Dashboard = () => {
  return (
    <Stack>
      <Button onClick={sendMessageAccepted}>Send Notification</Button>
      <HStack pt={'38px'} align={'flex-start'}>
        <Stack>
          <HStack pb={'24px'} gap={'35px'}>
            <BalanceCard />
            <FileCoinCard />
          </HStack>
          <TrendingTable />
          <FavotitesSection />
        </Stack>
        <Stack gap={'28px'} pl={'16px'}>
          <CreateAlertSection />
          <SubmitNewPoRSection />
        </Stack>
      </HStack>
    </Stack>
  )
}
