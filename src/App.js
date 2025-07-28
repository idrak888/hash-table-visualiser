import './App.css';
import Controls from './components/Controls';
import HashTableWrapper from './components/HashTableWrapper';

function App() {
	return (
		<div className="App">
			<div className='container'>
				<Controls/>
				<HashTableWrapper/>
			</div>
		</div>
	);
}

export default App;
