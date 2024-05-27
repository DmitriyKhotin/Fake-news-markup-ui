import React, {useEffect} from 'react';
import {render} from 'react-dom';
import './/reset.scss';
import styles from 'src/index.scss';
import {SideBar} from "src/SideBar/SideBar";
import {Main} from "src/Main/Main";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import {worker} from "../mocks/setupWorker";

const Entry = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SideBar />
                <Main />
            </div>
        </div>
    )
}

dayjs.extend(isToday)
dayjs.extend(isYesterday)
// worker.start().then(() => render(<Entry />, document.getElementById('app')))
render(<Entry />, document.getElementById('app'));
