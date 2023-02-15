import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Section from './components/Section'
import Product from './components/Product'

// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

function App() {
  const [provider, setProvider] = useState(null)
  const [dappazon, setDappazon] = useState(null)

  const [account, setAccount] = useState(null)

  const [searchQuery, setSearchQuery] = useState("")

  const [items, setItems] = useState([])

  const [item, setItem] = useState({})
  const [toggle, setToggle] = useState(false)

  const togglePop = (item) => {
    setItem(item)
    toggle ? setToggle(false) : setToggle(true)
  }

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const dappazon = new ethers.Contract(config[network.chainId].dappazon.address, Dappazon, provider)
    setDappazon(dappazon)

    const items = []

    for (var i = 0; i < 9; i++) {
      const item = await dappazon.items(i + 1)
      items.push(item)
    }

    setItems(items);
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  const filteredItems = items.filter(
    item => {
      return (
        item
        .name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) || 
        item
        .category
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      );
    }
  );

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2>Dappazon Best Sellers</h2>

      {items && (
        <>
          {
            <Section 
              items={filteredItems} 
              togglePop={togglePop} />
          }
        </>
      )}

      {toggle && (
        <Product item={item} provider={provider} account={account} dappazon={dappazon} togglePop={togglePop} />
      )}
    </div>
  );
}

export default App;