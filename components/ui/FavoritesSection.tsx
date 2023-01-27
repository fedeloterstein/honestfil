import { useGetAlerts } from '@/hooks/useGetAlerts'
import { Avatar, Button, Grid, Heading, HStack, IconButton, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AlertIcon, PlusIcon } from '../icons'

export const FavotitesSection = () => {

  const { data } = useGetAlerts()
  console.log('ff', data.filter((fav: any) => fav.isFavorite === false));

  return (
    <Stack display={'flex'} pt={'29px'}>
      <Heading fontWeight={600} fontSize={'22px'} lineHeight={'33px'} mb={'23px'}>❤️ Favorites</Heading>
      <SimpleGrid columns={2} spacing={'5'}>
        <NewFavoriteCardButton />
        {data && data
          .filter((fav: any) => fav.isFavorite === true)
          .map((alert: any) => (<NewFavoriteCard key={alert.id.toNumber()} alert={alert}/>))}
      </SimpleGrid>
    </Stack>
  )
}

const NewFavoriteCardButton = () => {
  return (
    <Stack width={'269px'} height={'158px'} border={'1px'} borderColor='#12C99D' borderRadius={'20px'} justify={'center'} align={'center'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
      <PlusIcon />
      <Text fontWeight={500} fontSize={'16px'} lineHeight={'21px'} color={'#5E5E75'}>New Favorite</Text>
    </Stack>
  )
}

const NewFavoriteCard = ({alert}: any) => {
  console.log(alert);
  
  return (
    <Stack p={'11px 24px'} bgGradient={'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'} width={'270px'} height={'158px'} borderRadius={'20px'} padding={'20px'} justify={'space-between'} align={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
      <HStack justify={'space-between'} width={'100%'}>
        <HStack>
          <Avatar size={'xs'} color={'#5ACBD0'} />
          <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'} color={'#5ACBD0'}>{alert.protocolName}</Text>
        </HStack>
        <Text>❤️</Text>
      </HStack>
      <Text fontWeight={600} fontSize={'16px'} lineHeight={'23px'} color={'#FFFFFF'}>Total Reserves $12,041.263</Text>
      <HStack>
        <AlertIcon />
        <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#FFD83D'} >Risk Level 84%</Text>
      </HStack>
      <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'#FFFFFF'}>Limit Alert $ {alert.minReserve.toNumber()}</Text>
    </Stack>
  )
}
