import React from 'react'
import { useContractRead } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useGetProtocols = () => {

    const { data, isError, isLoading }: any = useContractRead({
        address: '0xBdd8100726E4649D7ef665318280dfC555b9920f',
        abi: contractAbi.abi,
        functionName: 'getProtocols',
      })

      return {data, isError, isLoading}
}
