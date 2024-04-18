import './SimpleList.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function SimpleList({list, header}) {
    return (
        <div className='sl-wrapper'>
            <h2>{header}</h2>
            <List sx={{bgcolor: "#0e0f0f", borderRadius: "1rem"}}>
                {list.map(i => <ListItem key={i}>{i}</ListItem>)}
            </List>
        </div>
    );
}