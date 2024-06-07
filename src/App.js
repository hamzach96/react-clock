import {useEffect, useState} from "react";
import './App.css';
import MinuteBgImage from './assets/images/minutes.png';
import HourBgImage from './assets/images/hours.png';
import HourHandImage from './assets/images/hour-hand.png';
import MinuteHandImage from './assets/images/minute-hand.png';
import SecondHandImage from './assets/images/second-hand.png';

function App() {
    const [secondDegree, setSecondDegree] = useState('-135')

    useEffect(() => {
        setInterval(() => {
            // setSecondDegree(secondDegree+12)
        }, 1000);
    }, []);

    return (
        <div className="App">
            <div className={'clockMain'}>
                <img src={MinuteBgImage} alt={''} className={'minutePoints'}/>
                <img src={HourBgImage} alt={''} className={'hourPoints'}/>

                <div className={'clockHandsMain'}>
                    <img src={HourHandImage} alt={''} className={'hourHand'}/>
                    <img src={MinuteHandImage} alt={''} className={'minuteHand'}/>
                    <img src={SecondHandImage} alt={''} className={'secondHand'} style={{rotate: secondDegree + 'deg'}}/>
                </div>

            </div>
        </div>
    );
}

export default App;
