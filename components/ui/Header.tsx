import { Button, Heading, HStack, Stack, Text, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useAccount } from 'wagmi'
import { UnionIcon } from '../icons'
import { ConnectButton } from './ConnectButton'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isConnected } = useAccount()

  if (!isConnected) return (
    <HStack justifyContent={'flex-end'} p={5} w={'100%'}>
      <ConnectButton />
    </HStack>
  )
  return (
    <>
         <Modal onClose={onClose} isOpen={isOpen} isCentered >
                <ModalOverlay bg={'rgba(225, 225, 225, 0.9)'} />
                <ModalContent p={'50px'} minH={'474px'} maxWidth={'938px'} borderRadius={'20px'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
                    <ModalBody width={'100%'}>
                        <Stack align={'center'}>
                            <Image src={'/push.png'} alt={'algo'} width="762" height="200" />
                            <Text fontWeight={700} fontSize={'20px'} lineHeight={'25px'} bgClip='text' bgGradient='linear(to-r, rgba(18, 127, 201, 1), rgba(18, 201, 157, 1))'>Configure Push Protocol alerts</Text>
                            <Text align={'center'} fontWeight={400} fontSize={'12px'} lineHeight={'15px'}>1.  Connect your wallet on Push Protocol a go to <strong>Channels</strong></Text>
                            <Text align={'center'} fontWeight={400} fontSize={'12px'} lineHeight={'15px'}>2.  Search for the channel <strong>honest-test app</strong> and click on <strong>OPT_IN</strong></Text>
                            <Text align={'center'} fontWeight={400} fontSize={'12px'} lineHeight={'15px'}>3.  Done, you will receive the notifications in your <strong>Inbox</strong></Text>
                        </Stack>
                    </ModalBody>
                    <ModalFooter justifyContent={'center'}>
                        <Link href='https://staging.push.org/#/channels' isExternal onClick={onClose} bgGradient={'linear(to-r, #127FC9, #12C99D)'} borderRadius={'50px'} p={'7px 20px'} color={'white'}>Configure now</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    
    <HStack justifyContent={'space-between'} p={5} w={'100%'}>
      <Stack >
        <Heading fontWeight={700} fontSize={'30px'} lineHeight={'38px'} color={'#4C4C66'}>Dashboard FIL Reserves</Heading>
        <Text fontWeight={400} fontSize={'13px'} lineHeight={'16px'} color={'#6F6C99'} >Real-time data of the reserves of Filecoin on decentralized finance (DeFi) protocols or dapps.</Text>
      </Stack>
      <HStack>
        <Button onClick={onOpen} bgGradient={'linear(to-r, #FF409A, #C438EF)'} width={'48px'} height={'28px'} borderRadius={'50px'} boxShadow={'0px 5px 34px 0px rgba(186, 19, 88, 0.42)'}><UnionIcon /></Button>
        <ConnectButton />
      </HStack>
    </HStack>
    </>
  )
}
