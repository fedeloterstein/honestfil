import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { AlertsSections, BalanceCard, CreateAlertSection, Header, SubmitNewPoRSection, TrendingTable } from '../ui'


export const Dashboard = () => {
  return (
    <>
      <Header />
      <HStack p={5}>
        <Stack>
          <HStack>
            <BalanceCard />
            <BalanceCard />
          </HStack>
          <TrendingTable />
          <AlertsSections />
        </Stack>
        <Stack>
          <CreateAlertSection />
          <SubmitNewPoRSection />
        </Stack>
      </HStack>

    </>
  )
}
