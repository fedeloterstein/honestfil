import { Avatar, Heading, HStack, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ArrowDownIcon, BoxIcon, ExpandDownIcon, ExpandIcon } from '../icons'

export const TrendingTable = () => {
    const [protocolSelect, setprotocolSelect] = useState(undefined)

    return (
        <Stack width={'736px'}>
            <HStack mb={'26px'}>
                <Heading fontWeight={600} fontSize={'22px'} lineHeight={'33px'} color={'#5E5E75'} mr='32px'>🔥 Trending</Heading>
                <Select placeholder='All types' width={'130px'} border={'1px'} borderColor='#12C99D' >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </HStack>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th fontWeight={400} fontSize={'12px'} lineHeight={'20px'} color={'#A9A9A9'}>Protocol</Th>
                            <Th fontWeight={400} fontSize={'12px'} lineHeight={'20px'} color={'#A9A9A9'}>FIL Total Reserves</Th>
                            <Th fontWeight={400} fontSize={'12px'} lineHeight={'20px'} color={'#A9A9A9'}>24H Change</Th>
                            <Th fontWeight={400} fontSize={'12px'} lineHeight={'20px'} color={'#A9A9A9'}>Vaults Audits</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    {protocolSelect == undefined ? (
                        <Tbody>
                            <RowTable setprotocolSelect={setprotocolSelect} protocolSelect={protocolSelect} />
                            <RowTable setprotocolSelect={setprotocolSelect}  protocolSelect={protocolSelect} />
                            <RowTable setprotocolSelect={setprotocolSelect}  protocolSelect={protocolSelect} />
                            <RowTable setprotocolSelect={setprotocolSelect}  protocolSelect={protocolSelect} />
                            <RowTable setprotocolSelect={setprotocolSelect}  protocolSelect={protocolSelect} />
                        </Tbody>
                    ) : (
                        <Tbody>
                            <RowTable setprotocolSelect={setprotocolSelect}  protocolSelect={protocolSelect} />
                            <RowDetail />
                            <RowDetail />
                            <RowDetail />
                            <RowDetail />
                        </Tbody>
                    )}

                </Table>
            </TableContainer>
        </Stack>
    )
}

const RowTable = ({ setprotocolSelect, protocolSelect }: any) => {
    return (
        <Tr>
            <Td>
                <HStack>
                    <Avatar size={'24px'} src='https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579' />
                    <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>BNB</Text>
                </HStack>
            </Td>
            <Td>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>$41.263,00</Text>
            </Td>
            <Td>
                <HStack>
                    <ArrowDownIcon />
                    <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#F46565'}>+35,74%</Text>
                </HStack>
            </Td>
            <Td>4</Td>
            <Td>
                <>
                {protocolSelect === undefined ? (   <ExpandIcon onClick={() => setprotocolSelect('btc')} />) : (  <ExpandDownIcon onClick={() => setprotocolSelect(undefined)} />)}
                </>
               
                </Td>
                
        </Tr>
    )
}

const RowDetail = () => {
    return (
        <Tr>
            <Td fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Vault #1</Td>
            <Td fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>
                $41.263,00
            </Td>
            <Td fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#53D258'}>
            0xd6d9e702c8...
            </Td>
            <Td><BoxIcon /></Td>
        </Tr>
    )
}