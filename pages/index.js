import { injected } from "../components/wallet/connector"
import { useWeb3React } from '@web3-react/core'

export default function Home() {
  const {active, account, library, connector , activate , deactivate } = useWeb3React()

async function connect(){
  try{
     await activate(injected)
  }catch(e){
    console.log(e)
  }
}

async function disconnect(){
  try{
     await deactivate()
  }catch(e){
    console.log(e)
  }

}
  return (
    <div className="flex flex-col items-end justify-end">
      <button onClick={connect} className="py-2 m-5 text-lg font-bold text-white bg-black hover:bg-slate-600 w-56 "> Connect to Metamask</button>
      {active ? <span> Connect with <b>{account}</b></span> : <span className="relative mr-20 text-left font-bold">not Connected</span>}
      <button onClick={disconnect} className="py-2 m-5 text-lg font-bold text-white bg-black hover:bg-slate-600 w-56 "> Disconnect</button>

    </div>
  )
}
