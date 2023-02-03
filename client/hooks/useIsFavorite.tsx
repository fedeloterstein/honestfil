import React from 'react'
import { useContractWrite } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useIsFavorite = (id: any) => {
    const { write } = useContractWrite({
        mode: 'recklesslyUnprepared',
        address: '0x968f1a4e48E2Db564f461EEb99a38bA95b83a4c6',
        abi: contractAbi.abi,
        functionName: 'isFavorite',
        args: [id],
    })
    
    return {write}
}
