import { Button, HStack, Input, Select, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

export const CreateAlertSection = () => {
    return (
        <Stack bg={'gray.100'} width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'space-around'}>
            <HStack justify={'center'}>
                <Text>Create Alert</Text>
                <Text>My Alert</Text>
            </HStack>
            <Stack>
                <Text fontWeight={400} fontSize={'14px'} color={'#A9A9A9'}>Filecoin Reserve</Text>
                <Text fontWeight={600} fontSize={'18px'} color={'#000000'}>$13,119,031</Text>
            </Stack>
            <Select placeholder='Add Protocol or Dapp'></Select>
            <Tag>CrossFi</Tag>
            <HStack>
                <Text>FIL Reserve Min</Text>
                <Input placeholder='$10,000,00' />
            </HStack>
            <Button>Create Alert</Button>
        </Stack>
    )
}
