import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = process.env.NEXT_PUBLIC_PK; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

export const useSendNotification = () => {
 const SendPushNotification = async (address: any, title: any, body: any) => {
    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
          signer,
          type: 3, // target
          identityType: 2, // direct payload
          notification: {
            title: `${title}`,
            body: `${body}`
          },
          payload: {
            title: `${title}`,
            body:  `${body}`,
            cta: '',
            img: ''
          },
          recipients: `eip155:5:${address}`, // recipient address
          channel: 'eip155:5:0x8721FEB1e71e4FEeAfe24a0B2796f5b7E05B25C4', // your channel address
          env: 'staging'
        });
        
        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
      } catch (err) {
        console.error('Error: ', err);
      }
 }

 return {SendPushNotification}
}
