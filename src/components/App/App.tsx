import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss'
import { About } from '@/pages/About';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Icon from '@/assets/app-image.svg';

// TREE SHAKING
function TODO() {
    TODO2();
}

function TODO2() {
   throw new Error()
}


export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prev => prev + 1);
        // test Source-map
        // TODO();
    }

    // TODO(333);
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>IS DESKTOP PLATFORM</div>
    // }
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>IS MOBILE PLATFORM</div>
    // }
    // if(__ENV__ === 'development') {
    //     return <div>IS DEVELOPMENT</div>
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <h1  data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>

            <div>
                <img width={100} height={100} src={avatarPng} alt=''/>
                <img width={100} height={100} src={avatarJpg} alt=''/>
            </div>

            <div>
                <Icon style={{color: 'green'}} width={80} height={80}/>
            </div>

            <Link to={'/About'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>

            <h1>{count}</h1>
            <button className={classes.button} onClick={increment}>
                inc
            </button>

            <About/>

        </div>
    );
};
