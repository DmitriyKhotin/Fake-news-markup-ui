import React from "react";
import styles from './ResetButton.scss';

interface IProps {
    onClick: () => void;
}

export const ResetButton: React.FC<IProps> = ({onClick}) => {
    return (
        <button className={styles.sendButton} onClick={onClick}>
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 22.5L25 1M1 1L25 22.5" stroke="#5F5F5F"/>
</svg>

        </button>
    )
}
