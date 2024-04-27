import './SimpleList.css';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

function SelectableListItem({selected, children}) {
	return (
		<ListItemButton>
			<input type="checkbox" checked={selected}/>
			{children}
		</ListItemButton>
	)
}

export default function SimpleList({list, itemClickHandler, selectedItems}) {
    return (
        <List sx={{bgcolor: "#0e0f0f", borderRadius: "1rem", width: "10rem", height: "100%"}}>
            {list.map(i => <SelectableListItem key={i} onClick={() => itemClickHandler(i)} selected={selectedItems.includes(i)}>{i}</SelectableListItem>)}
            {/* {list.map(i => <ListItemButton onClick={() => itemClickHandler(i)} selected={selectedItems.includes(i)} key={i}>{i}</ListItemButton>)} */}
        </List>
    );
}