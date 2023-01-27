import { useContractWrite } from 'wagmi'
import contractAbi from '../contract/abi.json'

export const usePausedAlert = () => {

    const { write } = useContractWrite({
        mode: 'recklesslyUnprepared',
        address: '0xBdd8100726E4649D7ef665318280dfC555b9920f',
        abi: contractAbi.abi,
        functionName: 'pauseAlert',
        args: [1],
    })

    return {write}
}
