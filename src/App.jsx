import ReactDOM from 'react-dom';
import { useState } from 'react';
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import {Airdrop} from "./airdrop.jsx"
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'; // Optional, depending on your project setup

function App() {
  const [count, setCount] = useState(0);
//airdrop
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/ZU_U6iLit0IxLlqi2VUZ6j74f5D60wOR"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
        <div className="card" >
      <p> <b>Welcome to the SOLANA faucet</b></p>
    
          <WalletMultiButton>
          </WalletMultiButton>

    <Airdrop>

    </Airdrop>
    
    <WalletDisconnectButton></WalletDisconnectButton>
    </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
   
  );
}

// This is the key part that renders the React app into the #app div
ReactDOM.render(<App />, document.getElementById('app'));