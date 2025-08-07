import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import HashTableWrapper from './components/HashTableWrapper';

function App() {
	const [entries, setEntries] = useState([
		{ key: 'key1', value: 'val1', hash: '0378' }, // ASCII sum: 731
		{ key: 'phone', value: '555-123-4567', hash: '0538' }, // ASCII sum: 1037
		{ key: 'age', value: '30', hash: '0301' },        // ASCII sum: 297
		{ key: 'city', value: 'New York', hash: '0441' }, // ASCII sum: 759
	]);

	const groupedEntries = entries.reduce((acc, entry) => {
		if (!acc[entry.hash]) {
			acc[entry.hash] = [];
		}
		acc[entry.hash].push(entry);
		return acc;
	}, {});

	return (
		<div className="App">
			<div className='container'>
				<Controls onAdd={(key, value, hashFunction) => {
					let hash;
					if (hashFunction === "Division Method") {
						// Division method: sum ASCII values of characters, then use modulo
						const sum = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
						hash = sum % 10000; // Ensure it's a 4-digit number (0-9999)
						// Pad with leading zeros if needed to make it 4 digits
						hash = hash.toString().padStart(4, '0');
					} else {
						// Default hash (length mod 10)
						hash = key.length % 10;
					}
					const newEntry = { key, value, hash };
					setEntries([...entries, newEntry]);
				}} onRemove={(key, hashFunction) => {
					let hash;
					if (hashFunction === "Division Method") {
						// Use same hash function as in onAdd
						const sum = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
						hash = sum % 10000;
						hash = hash.toString().padStart(4, '0');
					} else {
						hash = key.length % 10;
					}
					setEntries(entries.filter(entry => entry.key !== key || entry.hash !== hash));
				}}/>
				<HashTableWrapper entries={entries} groupedEntries={groupedEntries}/>
			</div>
		</div>
	);
}

export default App;
