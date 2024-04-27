import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function SelectableList({ list, header, handleToggle, checked }) {

	return (
		<Stack sx={{ width: "100%", height: "100%" }}>
			<Typography
				variant="h5"
				sx={{ px: 2, py: 1, bgcolor: "list.light", textAlign:"center", paddingY: "0.5rem" }}>
					{header}
				</Typography>
			<Divider />
			<List
				dense
				component="div"
				role="list"
				sx={{ height: "100%", width: "100%", bgcolor: "list.dark", overflowY: "auto" }}>
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
		</Stack>
	);
}
