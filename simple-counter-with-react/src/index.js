import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SimpleCounter from './components/SimpleCounter';

let cont = 0;
setInterval(() => {
    const six = Math.floor(cont / 100000);// ?
    const five = Math.floor(cont / 10000);// ?
    const four = Math.floor(cont / 1000);// ?
    const three = Math.floor(cont / 100);// para la hora
    const two = Math.floor(cont / 10);// minutos
    const one = Math.floor(cont % 10);// segundos

    cont++;

    ReactDOM.render(
        <React.StrictMode>
            <SimpleCounter dSix={six} dFive={five} dFour={four} dThree={three} dTwo={two} dOne={one} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);

// ReactDOM.render(
//     <React.StrictMode>
//         <SimpleCounter dFour={four} />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
