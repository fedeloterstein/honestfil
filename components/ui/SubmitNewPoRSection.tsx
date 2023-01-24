import { Button, Input, Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PlusWhiteIcon } from '../icons'

export const SubmitNewPoRSection = () => {
  return (
    <Stack width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'space-around'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} gap={'14px'}>
        <Text fontWeight={600} fontSize={'16px'} lineHeight={'24px'}   bgClip='text' bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'>Submit New Proof of Reserve</Text>
        <Input height={'48px'} borderRadius={'50px'} placeholder='Name Protocol or Dapp*'/>
        <Select height={'48px'} borderRadius={'50px'}  placeholder='Category*'/>
        <Input height={'48px'} borderRadius={'50px'}  placeholder='Url Logo*'/>
        <Input height={'48px'} borderRadius={'50px'}  placeholder='Address Vault*'/>
        <Input  height={'48px'} borderRadius={'50px'} placeholder='Website*'/>
        <Button leftIcon={<PlusWhiteIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} width={'100%'} borderRadius={'50px'} p={'0px 20px'} color={'white'}>Submit Proof Reserve</Button>
    </Stack>
  )
}
