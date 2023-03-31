import React from 'react'
import Section from './Section';
import Product from './Product';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import NavFilter from './NavFilter';
// ABIs
import Dappazon from '../abis/Dappazon.json'

// Config
import config from '../config.json'
import Productstyle from './Productstyle';

const Products = () => {
    const [provider, setProvider] = useState(null)
    const [dappazon, setDappazon] = useState(null)

    const [account, setAccount] = useState(null)

    const [electronics, setElectronics] = useState(null)
    const [clothing, setClothing] = useState(null)
    const [toys, setToys] = useState(null)

    const [item, setItem] = useState({})
    const [toggle, setToggle] = useState(false)

    const togglePop = (item) => {
        setItem(item)
        toggle ? setToggle(false) : setToggle(true)
    }

    const loadBlockchainData = async () => {

        // connect to blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)

        // fecth network ID
        const network = await provider.getNetwork()

        // Connect to smart contract (Create JS Versions)
        const dappazon = new ethers.Contract(config[network.chainId].dappazon.address, Dappazon, provider)
        setDappazon(dappazon)

        // Load Products
        const items = []

        for (var i = 0; i < 9; i++) {
            const item = await dappazon.items(i + 1)
            items.push(item)
        }

        const electronics = items.filter((item) => item.category === 'electronics')
        const clothing = items.filter((item) => item.category === 'clothing')
        const toys = items.filter((item) => item.category === 'toys')

        setElectronics(electronics)
        setClothing(clothing)
        setToys(toys)
    }

    useEffect(() => {
        loadBlockchainData()
    }, [])

    return (
        <>
            <NavFilter account={account} setAccount={setAccount} />
            <Productstyle />
            <h2 className='best_seller_heading'>Products</h2>

            {electronics && clothing && toys && (
                <>
                    <Section title={"Clothing & Jewelry"} items={clothing} togglePop={togglePop} />
                    <Section title={"Electronics & Gadgets"} items={electronics} togglePop={togglePop} />
                    <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop} />
                </>
            )}

            {/* Check for toggle */}
            {toggle && (
                <Product item={item} provider={provider} account={account} dappazon={dappazon} togglePop={togglePop} />
            )}
        </>
    )
}

export default Products;