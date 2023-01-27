import React from 'react'
import { useContractRead } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const useGetProtocols = () => {

    const { data, isError, isLoading }: any = useContractRead({
        address: '0xDdA45f2CEC52B1a1f2c4AC987530b2734381fA19',
        abi: contractAbi.abi,
        functionName: 'getProtocols',
      })

      return {data, isError, isLoading}
}
