import './App.css';
import SimpleList from './components/SimpleList/SimpleList';
// import Grid from '@mui/material/Unstable_Grid2';
import { ButtonGroup, Button, Box, Grid, Stack } from '@mui/material';
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
    const [heroes, setHeroes] = useState([""]);
    const [selectedPeople, setSelectedPeople] = useState("")
    useEffect(() => {
        setHeroes([]);
    }, [])

    const itemClickHandler = (item) => {
        if (selectedPeople.includes(item)) {
            setSelectedPeople(selectedPeople.filter((i) => i !== item));
        }
        else {
            setSelectedPeople([item, ...selectedPeople]);
        }
    }

    const moveClickHandler = (dir) => {
        if (dir === "left") {
            setCandidates([...candidates, ...selectedPeople.filter((p) => !candidates.includes(p))]);
            setHeroes(heroes.filter((h) => !selectedPeople.includes(h)));
        }
        else {
            setHeroes([...heroes, ...selectedPeople.filter(p => !heroes.includes(p))]);
            setCandidates(candidates.filter(c => !selectedPeople.includes(c)));
        }

        setSelectedPeople([]);
    }

    return (
        <Box p={15}>
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <SimpleList itemClickHandler={itemClickHandler} list={candidates} selectedItems={selectedPeople}/>
                </Grid>
                <Grid item md={2}>
                    <ButtonGroup orientation='vertical'>
                        <Button onClick={() => moveClickHandler("left")}>{"<"}</Button>
                        <Button onClick={() => moveClickHandler("right")}>{">"}</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item md={5}>
                    <SimpleList itemClickHandler={itemClickHandler} list={heroes} selectedItems={selectedPeople}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
