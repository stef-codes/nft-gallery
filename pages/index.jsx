import { useState } from 'react'

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFT, setNFTs] = useState([])
 
  const fetchNFTs = asyc() => {
    let nfts; 
    console.log("fetching nfts"); 
    const api_key = "owZbZwB9hD1wDTBhsp74i5xpaXIzTBMb"
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/owZbZwB9hD1wDTBhsp74i5xpaXIzTBMb`;
    var requestOptions = {
        method = GET
    };
  
    if (!collection.length) {
      const fetchURL = `${baseURL}?owner=${wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    }

  }

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input type={"text"} placeholder="Add your wallet address"></input>
        <input type={"text"} placeholder="Add collection address"></input>
        <label className="text-grey-600 "><input type={"checkbox"} className="mr-2"></input>Fetch for Collection</label>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} onClick={
          () => {
          }
        }>Let's Go! </button>
      </div>
    </div>
  )
}

export default Home