import React, { useState } from 'react';
import halvorImage from '../images/halvor.jpg';
import tirilImage from '../images/tiril.jpg';
import edvardImage from '../images/edvard.PNG';
import masaImage from '../images/masa.jpg';
import Box from '@mui/material/Box';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import Halvorspin from './Halvorspin';
const Halvorshow = () => {

    const [items, setItems] = useState([
        { image: edvardImage, name: "Halvor",count: 0 },
        { image: tirilImage, name: "Halvor2",count: 0 },
        { image: masaImage, name: "Halvor3",count: 0 }
    ]);
    const [showWarning, setShowWarning] = useState(false);
    const [showSpin, setShowSpin] = useState('');

    const increaseCount = (index) => {
        const updatedItems = [...items]; // Create a copy of the items array
        updatedItems[index].count += 1; // Increment the count at the specified index
        if (Math.random() < 0.2) {
            setShowWarning(updatedItems[index].name);
        }
        setItems(updatedItems); // Update the items state
    };

    const decreaseCount = (index) => {
        const updatedItems = [...items]; // Create a copy of the items array
        updatedItems[index].count -= 1; // Decrement the count at the specified index
        setItems(updatedItems); // Update the items state
    };

    const showSpinWheel = () => {
        setShowSpin(true);
    }

    const goBack = () => {
        setShowSpin(false);
        setShowWarning('');
    }
    if (showSpin) {
        return (
            <>
                <Halvorspin />
                <h3  onClick={() => goBack()}>Take me back!</h3>
            </>
        )
    }
    return (
        <>
            <div className="App-body">
                <h1>HalvorShow</h1>
                {showWarning && (
                    <Box sx={{ backgroundColor: 'yellow', color: 'red', padding: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>
                        Ååå naaai {showWarning}, Spin the Wheel of Crime *skull emoji* <AttractionsRoundedIcon onClick={() => showSpinWheel()}/> <DoNotDisturbRoundedIcon onClick={() => goBack()}/>
                    </Box>
                )}
                <div style={{ display: 'flex' }}>
                    {items.map((item, index) => (
                        <Box key={index}>
                            <img src={item.image} className="App-logo" alt="Halvor" />
                            <p>Crimes: {item.count}</p>
                            <RemoveCircleOutlineRoundedIcon onClick={() => decreaseCount(index)} style={{ fontSize: '4rem' }}>Decrease</RemoveCircleOutlineRoundedIcon>
                            <AddCircleOutlineRoundedIcon onClick={() => increaseCount(index)} style={{ fontSize: '4rem' }}>Increase</AddCircleOutlineRoundedIcon>
                        </Box>
                    ))}
                </div>
                
                
            </div>
        </>
    );
};

export default Halvorshow;
