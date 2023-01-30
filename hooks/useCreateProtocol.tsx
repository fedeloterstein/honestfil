import React from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useCreateProtocol = ({ name, category, urlLogo, addressVault, urlWebsite }: any) => {
    const { config } = usePrepareContractWrite({
        address: '0xDdA45f2CEC52B1a1f2c4AC987530b2734381fA19',
        abi: contractAbi.abi,
        functionName: 'registerProtocol',
        args: [name, category, urlLogo, addressVault, urlWebsite],
    })

    const { write } = useContractWrite(config)
    return {write}
}
