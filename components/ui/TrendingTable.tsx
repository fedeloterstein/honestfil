import { Avatar, Heading, HStack, Select, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ArrowDownIcon, BoxIcon, ExpandDownIcon, ExpandIcon } from '../icons'
import contractAbi from '../../contract/abi.json'
import { useContractRead } from 'wagmi'

export const TrendingTable = () => {
    const [protocolSelect, setprotocolSelect] = useState(undefined)

    const { data, isError, isLoading }: any = useContractRead({
        address: '0x59acAD016c5562Ac4c9478b4cccB37217478F382',
        abi: contractAbi.abi,
        functionName: 'getProtocols',
      })

      console.log('data: ', data);
      
    
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
            <TableContainer maxWidth={'736px'} minHeight='300px' boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} p='29px' borderRadius={'20px'}>
                <Table variant='simple'>
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
                            {data && data.map((d: any)=>    <RowTable key={d.id} setprotocolSelect={setprotocolSelect} protocolSelect={protocolSelect} data={d} />)}
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

const RowTable = ({ setprotocolSelect, protocolSelect, data }: any) => {
    return (
        <Tr>
            <Td>
                <HStack>
                    <Avatar size={'24px'} src={data?.[2]} width={'24px'} height={'24px'} />
                    <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>{data?.name}</Text>
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