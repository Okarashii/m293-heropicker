import SelectableList from './components/TransferList/SelectableList';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { useState } from 'react';

function not(a, b) {
	return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
	return a.filter((value) => b.indexOf(value) !== -1);
}

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
	const [left, setLeft] = useState(people);
	const [right, setRight] = useState([]);

	const leftChecked = intersection(checked, left);
	const rightChecked = intersection(checked, right);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const handleAllRight = () => {
		setRight(right.concat(left));
		setLeft([]);
	};

	const handleCheckedRight = () => {
		setRight(right.concat(leftChecked));
		setLeft(not(left, leftChecked));
		setChecked(not(checked, leftChecked));
	};

	const handleCheckedLeft = () => {
		setLeft(left.concat(rightChecked));
		setRight(not(right, rightChecked));
		setChecked(not(checked, rightChecked));
	};

	const handleAllLeft = () => {
		setLeft(left.concat(right));
		setRight([]);
	};

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			<Grid item>
				<SelectableList list={left} header="Candidates" handleToggle={handleToggle} checked={checked}/>
			</Grid>

			<Grid item>
				<Grid container direction="column" alignItems="center">
					<Button
						sx={{ my: 0.5 }}
						variant="outlined"
						size="small"
						onClick={handleAllRight}
						disabled={left.length === 0}
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
						disabled={right.length === 0}
						aria-label="move all left">
						≪
					</Button>
				</Grid>
			</Grid>

			<Grid item>
				<SelectableList list={right} header="Heroes" handleToggle={handleToggle} checked={checked}/>
			</Grid>
		</Grid>
	)
}
