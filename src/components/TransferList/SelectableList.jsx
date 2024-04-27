import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Card, CardHeader, Divider } from "@mui/material";

export default function SelectableList({ list, header, handleToggle, checked }) {
	return (
		<Card>
			<CardHeader sx={{ px: 2, py: 1}} title={header} titleTypographyProps={{align: "center", paddingY: "0.5rem"}}/>
			<Divider/>
			<List dense component="div" role="list" sx={{ width: 200, height: 420, overflow: "auto", bgcolor: "background.paper"}}>
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
}