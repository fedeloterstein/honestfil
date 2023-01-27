import { Button, Divider, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Switch, Tag, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useContractEvent, useContractRead, useContractWrite } from 'wagmi'
import { DeleteIcon, EditIcon, SuccessAlertIcon, UnionIcon } from '../icons'
import contractAbi from '../../contract/abi.json'
import { usePausedAlert } from '@/hooks/usePausedAlert'
import { useGetAlerts } from '@/hooks/useGetAlerts'
import { useGetProtocols } from '@/hooks/useGetProtocols'

export const CreateAlertSection = () => {
    const [alertType, setalertType] = useState('createAlert')

    return (
        <Stack width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} gap={'14px'}>
            <HStack justify={'center'}>
                <Text onClick={() => setalertType('createAlert')} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'#A9A9A9'} bgClip={alertType === 'createAlert' ? 'text' : undefined} bgGradient={alertType === 'createAlert' ? 'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' : undefined}>Create Alert</Text>
                <Text onClick={() => setalertType('myAlerts')} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'#A9A9A9'} bgClip={alertType === 'myAlerts' ? 'text' : undefined} bgGradient={alertType === 'myAlerts' ? 'linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' : undefined}>My Alert</Text>
            </HStack>
            {alertType === 'createAlert' ? <CreateAlert /> : <MyAlerts />}
        </Stack>
    )
}

const CreateAlert = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [protocolName, setprotocolName] = useState('Protocolo Test')
    const [protocolMinReserve, setprotocolMinReserve] = useState(1000000)

    const {data: listProtocols} = useGetProtocols()

    const { write } = useContractWrite({
        mode: 'recklesslyUnprepared',
        address: '0xBdd8100726E4649D7ef665318280dfC555b9920f',
        abi: contractAbi.abi,
        functionName: 'createAlert',
        args: [protocolName, protocolMinReserve],
    })


    useContractEvent({
        address: '0xBdd8100726E4649D7ef665318280dfC555b9920f',
        abi: contractAbi.abi,
        eventName: 'AlertCreated',
        listener(_id, _protocolName, _minReserve, _owner) {
            onOpen()
        },
    })

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay bg={'rgba(225, 225, 225, 0.9)'} />
                <ModalContent maxH={'321px'} maxWidth={'509px'} borderRadius={'20px'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
                    <ModalBody width={'100%'}>
                        <Stack align={'center'}>
                            <Image src={'/successAlert.png'} alt={'algo'} width="155" height="155" />
                            <Text fontWeight={700} fontSize={'20px'} lineHeight={'25px'} bgClip='text' bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'>Alert Created on Push Protocol</Text>
                            <Text align={'center'} fontWeight={400} fontSize={'12px'} lineHeight={'15px'}>Remember that you can turn off this alert at any time to test your chosen protocol or dapp for retrieval.</Text>
                        </Stack>
                    </ModalBody>
                    <ModalFooter justifyContent={'center'}>
                        <Button onClick={onClose} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'7px 20px'} color={'white'}>See you Alerts</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Stack>
                <Text fontWeight={400} fontSize={'14px'} color={'#A9A9A9'}>Filecoin Reserve</Text>
                <Text fontWeight={600} fontSize={'18px'} color={'#000000'}>$13,119,031</Text>
            </Stack>
            <Select height={'48px'} borderRadius={'50px'} placeholder='Add Protocol or Dapp' onChange={(e) => setprotocolName(e.target.value)}>
                {listProtocols && listProtocols.map((lp: any) =>  <option value={lp.name}>{lp.name}</option>
                )}
               
            </Select>
            <HStack justify={'start'} width='100%'>
                <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>CrossFi</Tag>
                <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>CrossFi</Tag>
            </HStack>
            <HStack width={'100%'} height={'48px'} border='2px' borderRadius={'50px'} borderColor='rgba(18, 201, 157, 1)' justify={'space-between'} padding={'13px 19px'}>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>FIL Reserve Min</Text>
                <Input onChange={(e) => setprotocolMinReserve(Number(e.target.value))} border={'none'} placeholder='$10,000,00' width={'40%'} />
            </HStack>
            <Button onClick={() => write?.()} leftIcon={<UnionIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} width={'100%'} borderRadius={'50px'} p={'0px 20px'} color={'white'}>Create Alert</Button>
        </>
    )
}




const MyAlerts = () => {


    const { data } = useGetAlerts()
    const { write: pausedAlert } = usePausedAlert();


    return (
        <>
            {data && data.map((alert: any) => (
                <HStack width={'100%'} justify={'space-between'}>
                    <Tag height={'43px'} color='white' borderRadius={'50px'} minWidth={'106px'} p={'0px 20px'} bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))' justifyContent={'center'}>{alert.protocolName}</Tag>
                    <HStack gap={1}>
                        <EditIcon />
                        <DeleteIcon />
                        <Switch onChange={() => pausedAlert?.(alert.id)} size='md' defaultChecked={alert.isActive} />
                    </HStack>
                </HStack>
            ))}
        </>


    )
}