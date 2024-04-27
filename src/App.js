import { useState } from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ButtonGroup } from '@mui/material';

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
		"Firefighter",
		"Police Officer",
		"Vet"
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
		<Box container sx={{display: 'flex', gap: "3rem", height: 8*50 + 82}}>
			<Grid item>
				<Grid container sx={{width: 200, height: "100%"}}>
					<SelectableList list={candidates} header="Candidates" handleToggle={handleToggle} checked={checked}/>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container direction="column" sx={{height: "100%", justifyContent: "center" }}>
					<ButtonGroup orientation='vertical' color="primary" variant="hovering">
						<Button
							variant="contained"
							size="large"
							onClick={handleAllRight}
							disabled={candidates.length === 0}
							aria-label="move all right">
							≫
						</Button>
						<Button
							variant="contained"
							size="large"
							onClick={handleCheckedRight}
							disabled={leftChecked.length === 0}
							aria-label="move selected right">
							&gt;
						</Button>
						<Button
							variant="contained"
							size="large"
							onClick={handleCheckedLeft}
							disabled={rightChecked.length === 0}
							aria-label="move selected left">
							&lt;
						</Button>
						<Button
							variant="contained"
							size="large"
							onClick={handleAllLeft}
							disabled={heroes.length === 0}
							aria-label="move all left">
							≪
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container sx={{width: 200, height: "100%"}}>
					<SelectableList list={heroes} header="Heroes" handleToggle={handleToggle} checked={checked}/>
				</Grid>
			</Grid>
		</Box>
	)
}

function SelectableList({ list, header, handleToggle, checked }) {
	return (
		<Stack variant="hovering" sx={{ width: "100%", height: "100%", borderRadius: "4px", overflow: "clip" }}>
			<Typography
				variant="heading"
				sx={{ textAlign:"center", paddingY: "0.75rem" }}>
				{header}
			</Typography>
			<List
				dense
				variant="styled"
				component="div"
				role="list"
				sx={{ height: "100%", width: "100%", overflowY: "auto", scrollbarWidth:"thin" }}>
				{list.map((value) => {
					const labelId = `transfer-list-item-${value}-label`;
					return (
						<ListItemButton
							key={value}
							role="listitem"
							onClick={handleToggle(value)}>
							<ListItemIcon>
								<Checkbox
									checked={checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{"aria-labelledby": labelId}}
									color="secondary"
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value} />
						</ListItemButton>
					);
				})}
			</List>
		</Stack>
	);
}