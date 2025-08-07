import React, { useState } from 'react';
import '../App.css';

const Controls = ({ onAdd, onRemove }) => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [hashFunction, setHashFunction] = useState('Division Method');

    const handleAdd = () => {
        if (key && value) {
            onAdd(key, value, hashFunction);
            setKey('');
            setValue('');
        }
    };

    const handleRemove = () => {
        if (key) {
            onRemove(key, hashFunction);
            setKey('');
        }
    };

    return (
        <div className='Controls'>
            <div>
                <div>
                    <label>
                        Key:
                        <input
                            type="text"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder='E.g. Name'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Value:
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='E.g. Alex'
                        />
                    </label>
                </div>
                <label>
                    Hash Function:
                    <select 
                        value={hashFunction}
                        onChange={(e) => setHashFunction(e.target.value)}
                    >
                        <option value="Division Method">Division Method</option>
                        <option value="Multiplication Method">Multiplication Method</option>
                    </select>
                </label>
                <div className='ButtonWrapper'>
                    <button onClick={handleAdd}>Add</button>
                    <button disabled={true} style={{ cursor: 'not-allowed', opacity: 0.5 }} onClick={handleRemove}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Controls;