import TransferList from './components/TransferList/TransferList';

export default function App() {
	const people = [
		"Spiderman",
		"Wolverine",
		"Dad",
		"Mom",
		"Doctor",
		"Politician",
		"Pastor",
		"Teacher",
	];
	return(
		<TransferList list={people}/>
	)
}
