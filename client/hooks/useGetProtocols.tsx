import React from 'react'
import { useContractRead } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useGetProtocols = () => {

    const { data, isError, isLoading }: any = useContractRead({
        address: '0x968f1a4e48E2Db564f461EEb99a38bA95b83a4c6',
        abi: contractAbi.abi,
        functionName: 'getProtocols',
      })

      return {data, isError, isLoading}
}
