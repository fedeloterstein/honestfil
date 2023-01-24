import { Button, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PlusIcon } from '../icons'

export const AlertsSections = () => {
  return (
    <Stack>
      <Heading fontWeight={600} fontSize={'22px'} lineHeight={'33px'} mb={'23px'}>🚨 Alerts</Heading>
      <Stack width={'269px'} height={'158px'} border={'1px'} borderColor='#12C99D'  borderRadius={'20px'} justify={'center'} align={'center'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
        <PlusIcon />
        <Text fontWeight={500} fontSize={'16px'} lineHeight={'21px'} color={'#5E5E75'}>New Favorite</Text>
      </Stack>
    </Stack>
  )
}
