import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FavotitesSection, BalanceCard, CreateAlertSection, FileCoinCard, SubmitNewPoRSection, TrendingTable } from '../ui'


export const Dashboard = () => {
  return (
    <Stack>
      <HStack pt={'38px'} align={'flex-start'} flexDirection={['column-reverse','column-reverse', 'row']}>
        <Stack>
          <HStack pb={'24px'} gap={'35px'} >
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
