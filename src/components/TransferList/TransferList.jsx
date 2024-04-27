import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import { Card, CardHeader, Divider } from "@mui/material";

function not(a, b) {
	return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
	return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList({ list }) {
	const [checked, setChecked] = React.useState([]);
	const [left, setLeft] = React.useState(list);
	const [right, setRight] = React.useState([]);

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

	const customList = (items, header) => (
		<Card>
			<CardHeader sx={{ px: 2, py: 1}} title={header} titleTypographyProps={{align: "center", paddingY: "0.5rem"}}/>
			<Divider/>
			<List dense component="div" role="list" sx={{ width: 200, height: 420, overflow: "auto", bgcolor: "background.paper"}}>
				{items.map((value) => {
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
									inputProps={{
										"aria-labelledby": labelId,
									}}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value} />
						</ListItemButton>
					);
				})}
			</List>
		</Card>
	);

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			<Grid item>
				{customList(left, "Candidates")}
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
				{customList(right, "Heroes")}
			</Grid>
		</Grid>
	);
}
