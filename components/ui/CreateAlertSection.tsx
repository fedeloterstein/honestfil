import { Button, Divider, HStack, Input, Select, Stack, Switch, Tag, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon, EditIcon, UnionIcon } from '../icons'

export const CreateAlertSection = () => {
    const [alertType, setalertType] = useState('createAlert')

    return (
        <Stack width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} gap={'14px'}>
            <HStack justify={'center'}>
                <Text onClick={() => setalertType('createAlert')} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'#A9A9A9'}  bgClip={alertType === 'createAlert' ? 'text' : undefined} bgGradient={alertType === 'createAlert' ? 'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' : undefined}>Create Alert</Text>
                <Text onClick={() => setalertType('myAlerts')} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'#A9A9A9'} bgClip={alertType === 'myAlerts' ? 'text' : undefined} bgGradient={alertType === 'myAlerts' ? 'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' : undefined}>My Alert</Text>
            </HStack>
            {alertType === 'createAlert' ? <CreateAlert /> : <MyAlerts />}
        </Stack>
    )
}

const CreateAlert = () => {
    return (
        <>
            <Stack>
                <Text fontWeight={400} fontSize={'14px'} color={'#A9A9A9'}>Filecoin Reserve</Text>
                <Text fontWeight={600} fontSize={'18px'} color={'#000000'}>$13,119,031</Text>
            </Stack>
            <Select height={'48px'} borderRadius={'50px'} placeholder='Add Protocol or Dapp'></Select>
            <HStack justify={'start'} width='100%'>
                <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>CrossFi</Tag>
                <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>CrossFi</Tag>
            </HStack>
            <HStack width={'100%'} height={'48px'} border='2px' borderRadius={'50px'} borderColor='rgba(18, 201, 157, 1)' justify={'space-between'} padding={'13px 19px'}>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>FIL Reserve Min</Text>
                <Input border={'none'} placeholder='$10,000,00' width={'40%'} />
            </HStack>
            <Button leftIcon={<UnionIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} width={'100%'} borderRadius={'50px'} p={'0px 20px'} color={'white'}>Create Alert</Button>
        </>
    )
}

const MyAlerts = () => {
    return (
        <>
            <HStack width={'100%'} justify={'space-between'} p={4}>
                <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>CrossFi</Tag>
                <HStack gap={1}>
                <EditIcon />
                <DeleteIcon />
                <Switch size='md' />
                </HStack>
            </HStack>
        </>


    )
}