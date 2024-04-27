import SelectableList from './components/TransferList/SelectableList';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState } from 'react';

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

	const [checked, setChecked] = useState([]);
	const [candidates, setCandidates] = useState(people);
	const [heroes, setHeroes] = useState([]);

	const leftChecked = checked.filter(v => candidates.indexOf(v) !== -1);
	const rightChecked = checked.filter(v => heroes.indexOf(v) !== -1);

	const handleToggle = (value) => () => {
		setChecked(curr => curr.indexOf(value) > -1 ? curr.filter(c => c !== value) : [...curr, value])
	};

	const addToList = (setList, items) => {
		setList(c => [...c, ...items]);
	}

	const filterFromList = (setList, items) => {
		setList(c => c.filter(v => items.indexOf(v) === -1));
	}

	const handleAllRight = () => {
		addToList(setHeroes, candidates);
		setCandidates(c => []);
		setChecked(c => []);
	};

	const handleCheckedRight = () => {
		addToList(setHeroes, leftChecked);
		filterFromList(setCandidates, leftChecked);
		setChecked(c => []);
	};

	const handleCheckedLeft = () => {
		addToList(setCandidates, rightChecked)
		filterFromList(setHeroes, rightChecked);
		setChecked(c => []);
	};

	const handleAllLeft = () => {
		addToList(setCandidates, heroes)
		setHeroes(c => []);
		setChecked(c => []);
	};

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			<Grid item>
				<SelectableList list={candidates} header="Candidates" handleToggle={handleToggle} checked={checked}/>
			</Grid>

			<Grid item>
				<Grid container direction="column" alignItems="center">
					<Button
						sx={{ my: 0.5 }}
						variant="outlined"
						size="small"
						onClick={handleAllRight}
						disabled={candidates.length === 0}
						aria-label="move all right">
						≫
					</Button>
					<Button
						sx={{ my: 0.5 }}
						variant="outlined"
						size="small"
						onClick={handleCheckedRight}
						disabled={leftChecked.length === 0}
						aria-label="move selected right">
						&gt;
					</Button>
					<Button
						sx={{ my: 0.5 }}
						variant="outlined"
						size="small"
						onClick={handleCheckedLeft}
						disabled={rightChecked.length === 0}
						aria-label="move selected left">
						&lt;
					</Button>
					<Button
						sx={{ my: 0.5 }}
						variant="outlined"
						size="small"
						onClick={handleAllLeft}
						disabled={heroes.length === 0}
						aria-label="move all left">
						≪
					</Button>
				</Grid>
			</Grid>

			<Grid item>
				<SelectableList list={heroes} header="Heroes" handleToggle={handleToggle} checked={checked}/>
			</Grid>
		</Grid>
	)
}
