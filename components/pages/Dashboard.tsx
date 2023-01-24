import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { AlertsSections, BalanceCard, CreateAlertSection, FileCoinCard, Header, SubmitNewPoRSection, TrendingTable } from '../ui'


export const Dashboard = () => {
  return (
    <>
      <Header />
      <HStack p={5}>
        <Stack>
          <HStack>
            <BalanceCard />
            <FileCoinCard />
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
