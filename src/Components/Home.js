import React, { useState } from 'react';
import './home.css';

function Home() {
    const [length, setLength] = useState(12);
    const [inputLength, setInputLength] = useState(12);
    const [includeUpper, setUpper] = useState(false);
    const [includeLower, setLower] = useState(false);
    const [includeDigits, setDigits] = useState(false);
    const [includeSpecial, setSpecial] = useState(false);
    const [password, setPassword] = useState();
    const PasswordContent = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        number: '0123456789',
        special: '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~'
    };

    const handlePasswordGenerator = () => {
        let characters = '';
        let PasswordGenerated = '';

        if (includeUpper) {
            characters = characters + PasswordContent.upper;
        }
        if (includeLower) {
            characters = characters + PasswordContent.lower;
        }
        if (includeDigits) {
            characters = characters + PasswordContent.number;
        }
        if (includeSpecial) {
            characters = characters + PasswordContent.special;
        }

        if (characters === '') {
            setPassword(''); 
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            PasswordGenerated = PasswordGenerated + characters[randomIndex];
        }
        setPassword(PasswordGenerated);
    }

    const handleReset = () => {
        setPassword('');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(password);
    }

    const handleSetLength = () => {
        if (inputLength >= 4) {
            setLength(inputLength);
        }else{
            alert("Select Number Greater Than Or Equal To 4 (for length)")
        }
    }

    return (
        <div>
            <h1 className='head'>This Is A Random Password Generator Website</h1><br />
            {/* To get the length of the password */}
            <p>By default, the length of the password is {length}</p>
            <input
                type="number"
                onChange={(e) => setInputLength(e.target.value)}
            /><br />
            <button className="generateButton" onClick={handleSetLength}>Set</button><br /><br />

            <strong>What Are Your Requirements</strong><br />
            {/* For Upper Case */}
            <input type="checkbox" checked={includeUpper} onChange={() => {
                setUpper(!includeUpper);
            }} />
            <label htmlFor="1">Include Uppercase Letters</label><br />

            {/* For Lower Case */}
            <input type="checkbox" checked={includeLower} onChange={() => {
                setLower(!includeLower);
            }} />
            <label htmlFor="1">Include Lowercase Letters</label><br />

            {/* For Digits Case */}
            <input type="checkbox" checked={includeDigits} onChange={() => {
                setDigits(!includeDigits);
            }} />
            <label htmlFor="1">Include Digits</label><br />

            {/* For Special Characters */}
            <input type="checkbox" checked={includeSpecial} onChange={() => {
                setSpecial(!includeSpecial);
            }} />
            <label htmlFor="1">Include Special Characters</label><br />

            <div className="passwordGeneratedArea">
                <p className="password">{password}</p>
            </div>

            {/* A button that which on clicking generates passwords */}
            <button className='generateButton' onClick={handlePasswordGenerator}>Generate Password</button><span> </span>
            <button className='generateButton' onClick={handleReset}>Reset</button><span> </span>
            <button className='generateButton' onClick={handleCopy}>Copy The Password</button><span> </span>
        </div>
    );
}

export default Home;
