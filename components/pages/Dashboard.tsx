import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FavotitesSection, BalanceCard, CreateAlertSection, FileCoinCard, Header, SubmitNewPoRSection, TrendingTable } from '../ui'


export const Dashboard = () => {
  return (
    <Stack>
      <HStack p={5}>
        <Stack>
          <HStack>
            <BalanceCard />
            <FileCoinCard />
          </HStack>
          <TrendingTable />
          <FavotitesSection />
        </Stack>
        <Stack>
          <CreateAlertSection />
          <SubmitNewPoRSection />
        </Stack>
      </HStack>
    </Stack>
  )
}
