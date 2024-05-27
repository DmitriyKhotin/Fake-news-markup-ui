import React, {ChangeEvent, ChangeEventHandler, ReactEventHandler, useState} from "react";
import styles from './TextField.scss'

interface IProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextField: React.FC<IProps> = ({value, onChange}) => {
    return (
        <div className={styles.textField}>
            <textarea value={value} maxLength={1000} className={styles.textFieldInput} onChange={onChange} placeholder={'Write or paste a news'}/>
            <span className={styles.textSize}>{value.length}/1000</span>
        </div>
    )
}
