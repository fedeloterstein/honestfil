import { Button, Input, Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const SubmitNewPoRSection = () => {
  return (
    <Stack bg={'gray.100'} width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'space-around'}>
        <Text fontWeight={600} fontSize={'16px'}>Submit New Proof of Reserve</Text>
        <Input placeholder='Name Protocol or Dapp*'/>
        <Select placeholder='Category*'/>
        <Input placeholder='Url Logo*'/>
        <Input placeholder='Address Vault*'/>
        <Input placeholder='Website*'/>
        <Button>+ Submit Proof Reserve</Button>
    </Stack>
  )
}
