import React, {useState} from 'react';
import IconArrow from '../images/icon-arrow.svg';

export default function Header({ handleLocation }) {
    const [currentIp, setCurrentIp] = useState('');
    return (
        <header className='header'>
            <h1 className='header__title'>IP Address Tracker</h1>

            <div className='header-search-content'>
                <input onChange={e => setCurrentIp(e.target.value)} className='header__input' type="text" placeholder='Search for any IP address or domain' />
                <button onClick={()=>handleLocation(currentIp)} className='header__button'>
                    <img src={IconArrow} alt="Icon Arrow" />
                </button>
            </div>
        </header>
    )
}
