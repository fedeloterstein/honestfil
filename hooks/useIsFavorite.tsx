import React from 'react'
import { useContractWrite } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useIsFavorite = (id: any) => {
    const { write } = useContractWrite({
        mode: 'recklesslyUnprepared',
        address: '0xDdA45f2CEC52B1a1f2c4AC987530b2734381fA19',
        abi: contractAbi.abi,
        functionName: 'isFavorite',
        args: [id],
    })
    
    return {write}
}
