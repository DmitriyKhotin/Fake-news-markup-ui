import React from "react";
import styles from './SendButton.scss';

interface IProps {
    onClick: () => void;
}

export const SendButton: React.FC<IProps> = ({onClick}) => {
    return (
        <button className={styles.sendButton} onClick={onClick}>
            <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 28V2M9 2L1 9.96774M9 2L17 9.96774" stroke="#5F5F5F" strokeWidth="2"/>
            </svg>
        </button>
    )
}
