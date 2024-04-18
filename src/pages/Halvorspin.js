import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const HalvorSpin = () => {
    const data = [
        { option: '+1 crime', style: { backgroundColor: 'green' } },
        { option: 'Shotski', style: { backgroundColor: 'grey' } },
        { option: '-1 crime', style: { backgroundColor: 'red' } },
        { option: '1 pizza and 4 beers challenge (or -1 crime)', style: { backgroundColor: 'orange' } },
        { option: '+2 crime', style: { backgroundColor: 'green' } },
        { option: 'Take a shot', style: { backgroundColor: 'grey' } },
        { option: '-2 crime', style: { backgroundColor: 'red' } },
        { option: 'Send snap til Håvard (BAE)', style: { backgroundColor: 'orange' } },
        { option: '+1 crime', style: { backgroundColor: 'green' } },
        { option: 'Shotski', style: { backgroundColor: 'grey' } },
        { option: '-1 crime', style: { backgroundColor: 'red' } },
        { option: 'Send a snap to Halvor and force him to take a shot', style: { backgroundColor: 'orange' } },
        { option: '+3 crime', style: { backgroundColor: 'green' } },
        { option: 'Give a shot', style: { backgroundColor: 'grey' } },
        { option: '-5 crime', style: { backgroundColor: 'red' } },
        { option: 'Send snap to nr3', style: { backgroundColor: 'orange' } },
     
        
    ]

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [rouletteData, setRouletteData] = useState(data);
    const [showPrize, setShowPrize] = useState(false);

    const handleSpin = () => {
        const randomPrize = Math.floor(Math.random() * data.length);
        setPrizeNumber(randomPrize);
        setMustSpin(true);
        setShowPrize(false);
        setTimeout(() => {
            setMustSpin(false);
            setShowPrize(true);
        }, 5000); // Change the duration as per your requirement
    };

    const prizeDisplayStyle = {
        height: '50px', // Set this to the height of your prize display
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: showPrize ? 'visible' : 'hidden', // Hide the content but reserve the space
        fontSize: '40px',
        color: 'white',
        border: '2px solid white',
        borderRadius: '10px',
        margin: '0 auto',
        width: '50%',            
        backgroundColor: showPrize ? rouletteData[prizeNumber].style.backgroundColor : 'transparent',
    };

    // Add media query for phones
    

    return (
        <div className="App-body">
            <h1>HalvorSpin</h1>
            <button onClick={handleSpin} style={{ fontSize: '20px', padding: '10px 20px' }}>Spin</button>

                <div className="wheel-container">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        spinDuration={[0.4]}
                        prizeNumber={prizeNumber}
                        data={rouletteData}
                        outerBorderColor={["black"]}
                        outerBorderWidth={[9]}
                        innerBorderColor={["Baige"]}
                        radiusLineColor={["pink"]}
                        radiusLineWidth={[1]}
                        textColors={["white"]}
                        textDistance={50}
                        fontSize={[15]}
                        innerRadius={5}
                        renderChild={(option, index, changeSegment) => (
                            <div style={{ textAlign: 'center', fontSize: '16px', color: 'white', backgroundColor: option.style.backgroundColor }}>
                                <div>{option.option}</div>
                                <div style={{ marginTop: '10px' }}>{index}</div>
                            </div>
                        )}
                        onStopSpinning={() => {
                            console.log("finish spinning");
                        }}
                    />
                    {showPrize && (
                    <div className="prize-display" style={prizeDisplayStyle}>
                    <p>{rouletteData[prizeNumber].option}</p>
                    </div>
                    )}
                </div>
        </div>
    );
};

export default HalvorSpin;