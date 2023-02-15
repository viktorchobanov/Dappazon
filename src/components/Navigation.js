import { ethers } from 'ethers'

const Navigation = ({ account, setAccount, searchQuery, setSearchQuery }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    const handleChange = e => {
        setSearchQuery(e.target.value);
    };

    return (
        <nav>
            <div className='nav__brand'>
                <h1>Dappazon</h1>
            </div>

            <input
                type="text"
                className="nav__search"
                placeholder = "Search Items For Sale..." 
                value={searchQuery}
                onChange = {handleChange}
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                <li><a onClick={() => setSearchQuery("")}>All</a></li>
                <li><a onClick={() => setSearchQuery("clothing")}>Clothing & Jewelry</a></li>
                <li><a onClick={() => setSearchQuery("electronics")}>Electronics & Gadgets</a></li>
                <li><a onClick={() => setSearchQuery("toys")}>Toys & Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;