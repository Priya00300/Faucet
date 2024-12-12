import { useConnection, useWallet } from "@solana/wallet-adapter-react";
export function Airdrop(){
    //hooks in react 
    const wallet =useWallet();
    const { connection }=useConnection();

    async function sendAirdropToUser()
    {  const amount = document.getElementById("publicKey").value
       await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
       alert ("airdroped sol")
    }
     return <div>
        
        <input type="text" placeholder="Amount to be airdroped"></input>
         <button  onClick={sendAirdropToUser}>Request Airdrop</button>
          
     </div>
}