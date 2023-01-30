import { useSendNotification } from '@/hooks/useSendNotification'
import { Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FavotitesSection, BalanceCard, CreateAlertSection, FileCoinCard, Header, SubmitNewPoRSection, TrendingTable } from '../ui'

const {SendPushNotification} = useSendNotification()
 
export const Dashboard = () => {
  return (
    <Stack>
      <Button onClick={() => SendPushNotification({address: '0xd5322d50306678192DfE85ca9D062d3e0D7ACAa9', title: 'Nueva Alerta',body: 'Esto es una alerta'})}>Send Notification</Button>
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
