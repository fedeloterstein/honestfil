import { useCoingeckoApi } from '@/hooks/useCoingeckoApi'
import { HStack, Skeleton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowUp, FilIcon, VectorIcon } from '../icons'

export const FileCoinCard = () => {

    const {response, loading, error } = useCoingeckoApi()
    if (!loading && error) return <Text>Error</Text>
    if (loading && !error) return <Skeleton bgGradient={'linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 86, 180, 0.8))'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'}  boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'} />
    console.log(response);
    
    return (
        <Stack bgGradient={'linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 86, 180, 0.8))'} width={'270px'} minHeight={'158px'} borderRadius={'20px'} padding={'20px'} justify={'space-between'} align={'start'} boxShadow={'0px 4px 20px 0px rgba(189, 236, 241, 0.5)'}>
            <HStack w={'100%'} justify='space-between'>
                <HStack>
                    <FilIcon />
                    <Text fontWeight={600} fontSize={'14px'} color={'white'}>Filecoin FIL</Text>
                </HStack>
                <VectorIcon />
            </HStack>
            <Text fontWeight={600} fontSize={'18px'} lineHeight={'26px'} color={'white'}>Price {response?.usd} US$</Text>
            <HStack>
                <ArrowUp />
                <Text fontWeight={600} fontSize={'12px'} lineHeight={'20px'} color={'#53D258'}>+{response?.usd_24h_change}%</Text>
            </HStack>
            <Text fontWeight={600} fontSize={'12px'} lineHeight={'17px'} color={'white'}>Cap. market {response?.usd_market_cap} US$</Text>
        </Stack>
    )
}
