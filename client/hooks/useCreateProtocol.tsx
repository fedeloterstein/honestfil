import React from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useCreateProtocol = ({ name, category, urlLogo, addressVault, urlWebsite }: any) => {
    const { config } = usePrepareContractWrite({
        address: '0x968f1a4e48E2Db564f461EEb99a38bA95b83a4c6',
        abi: contractAbi.abi,
        functionName: 'registerProtocol',
        args: [name, category, urlLogo, addressVault, urlWebsite],
    })

    const { write } = useContractWrite(config)
    return {write}
}
