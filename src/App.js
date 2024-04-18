import './App.css';
import SimpleList from './components/SimpleList/SimpleList';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
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

    const [candidates, setCandidates] = useState(people);
    const [heroes, setHeroes] = useState(people);
    useEffect(() => {
        setHeroes([]);
    }, [])


    return (
        <Grid container spacing={2}>
            <Grid md={5}>
                <SimpleList list={candidates} header={"Candidates"}/>
            </Grid>
            <Grid md={2}>
                
            </Grid>
            <Grid md={5}>
                <SimpleList list={heroes} header={"Heroes"}/>
            </Grid>
        </Grid>
        // <div className="App">

        // </div>
    );
}

export default App;
