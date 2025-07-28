import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import '../App.css';

const HashTableWrapper = () => {
    const entries = [
        { key: 'name', value: 'John Doe', hash: 1234 },
        { key: 'age', value: '30', hash: 5678 },
        { key: 'height', value: '175', hash: 5678 },
        { key: 'weight', value: '70', hash: 5678 },
        { key: 'email', value: 'john.doe@example.com', hash: 9012 },
        { key: 'phone', value: '5465122298', hash: 9012 },
    ];

    const groupedEntries = entries.reduce((acc, entry) => {
        if (!acc[entry.hash]) {
            acc[entry.hash] = [];
        }
        acc[entry.hash].push(entry);
        return acc;
    }, {});

    return (
        <div className='HashTableWrapper'>
            <div className='StringEntries'>
                {entries.map((entry, index) => (
                    <div key={index} className='entry'>
                        <span className='key'>{entry.key}</span>: <span className='value'>{entry.value}</span>
                    </div>
                ))}
            </div>
            <div className='Hashtable'>
                <div className='col Keys'>
                    <h4>Keys/Hash</h4>
                    {entries.map((entry, index) => (
                        <div key={index} id={`${entry}${index}`} className='hash-entry'>
                            {entry.key} [{entry.hash}]
                        </div>
                    ))}
                </div>
                <div className='col Buckets'>
                    <h4>Buckets</h4>
                    {Object.keys(groupedEntries).map((hash, index) => (
                        <div key={index} id={`${hash}`} className='hash-entry'>
                            {hash}
                        </div>
                    ))}
                </div>
                {entries.map((entry, index) => (
                    <Xarrow
                        start={`${entry}${index}`}
                        end={`${entry.hash}`}
                        headSize={4}
                        strokeWidth={2}
                    />
                ))}
                <div className='col Entries'>
                    <h4>Entries</h4>
                    <div className='linkedlist'>
                        {Object.keys(groupedEntries).map((hash, index) => (
                            <div key={index} id={`${hash}${index}`}> 
                                {groupedEntries[hash].map((entry, subIndex) => (
                                    <>
                                        <div key={subIndex} className='linkedlist-entry'>
                                            {entry.key}: {entry.value}
                                        </div>
                                        {subIndex < groupedEntries[hash].length - 1 && ' -> '}
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {Object.keys(groupedEntries).map((hash, index) => (
                    <Xarrow
                        start={`${hash}`}
                        end={`${hash}${index}`}
                        headSize={4}
                        strokeWidth={2}
                    />
                ))}
            </div>
        </div>
    );
};

export default HashTableWrapper;