import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Select, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useAccount, useContractEvent, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { PlusWhiteIcon } from '../icons'
import contractAbi from '../../contract/abi.json'
import { useCreateProtocol } from '@/hooks/useCreateProtocol'
import { useSendNotification } from '@/hooks/useSendNotification'


export const SubmitNewPoRSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setname] = useState('Protocolo Test')
    const [category, setcategory] = useState('protocol')
    const [urlLogo, seturlLogo] = useState('https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579')
    const [addressVault, setaddressVault] = useState('0x57d08d9426570A17b0d754A780Fb6Eac7A056E4b')
    const [urlWebsite, seturlWebsite] = useState('www.testprotocol1.com')

    const {write} = useCreateProtocol({name, category, urlLogo, addressVault, urlWebsite})
    const {SendPushNotification} = useSendNotification()
    const {address} = useAccount()

    useContractEvent({
        address: '0x968f1a4e48E2Db564f461EEb99a38bA95b83a4c6',
        abi: contractAbi.abi,
        eventName: 'NewProtocol',
        listener(_id, _name, _owner) {
            SendPushNotification(address, `🤖 ${name} was registered in Honestfil`, `Successful registration ${name} ✅`)
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
                            <Image src={'/por.png'} alt={'algo'} width="155" height="155" />
                            <Text fontWeight={700} fontSize={'20px'} lineHeight={'25px'} bgClip='text' bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'>New Proof of reserve Add</Text>
                            <Text align={'center'} fontWeight={400} fontSize={'12px'} lineHeight={'15px'}>Thank you for helping us build a more honest and
                                transparent ecosystem in Filecoin.</Text>
                        </Stack>
                    </ModalBody>
                    <ModalFooter justifyContent={'center'}>
                        <Button onClick={onClose} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'7px 20px'} color={'white'}>Go to Dashboard</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Stack width={'387px'} minHeight={'382px'} align={'center'} borderRadius={'20px'} padding={'18px 20px'} justify={'space-around'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} gap={'14px'}>
                <Text fontWeight={600} fontSize={'16px'} lineHeight={'24px'} bgClip='text' bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'>Submit New Proof of Reserve</Text>
                <Input onChange={(e) => setname(e.target.value)} height={'48px'} borderRadius={'50px'} placeholder='Name Protocol or Dapp*' />
                <Select onChange={(e) => setcategory(e.target.value)} height={'48px'} borderRadius={'50px'} placeholder='Category*'>
                    <option value='dex'>Dex</option>
                    <option value='cex'>Cex</option>
                    <option value='dapp'>Dapp</option>
                    <option value='protocol'>Protocol</option>
                </Select>
                <Input onChange={(e) => seturlLogo(e.target.value)} height={'48px'} borderRadius={'50px'} placeholder='Url Logo*' />
                <Input onChange={(e) => setaddressVault(e.target.value)} height={'48px'} borderRadius={'50px'} placeholder='Address Vault*' />
                <Input onChange={(e) => seturlWebsite(e.target.value)} height={'48px'} borderRadius={'50px'} placeholder='Website*' />
                <Button onClick={() => write?.()} leftIcon={<PlusWhiteIcon />} bgGradient={'linear(to-r, #127FC9, #12C99D)'} width={'100%'} borderRadius={'50px'} p={'0px 20px'} color={'white'}>Submit Proof Reserve</Button>
            </Stack>
        </>
    )
}
