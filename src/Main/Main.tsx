import React, {ChangeEvent, useCallback, useState} from "react";
import {TextLogo} from "src/Main/TextLogo";
import {TextField} from "src/TextField/TextField";
import styles from 'src/Main/Main.scss';
import {SendButton} from "src/SendButton/SendButton";
import {ICheckNews, IFakeItem} from "src/Store/Models";
import {Comment} from 'react-loader-spinner';
import TextHighlighter from './HiglightingText'
import { ResetButton } from "../ResetButton/ResetButton";


export const Main = () => {
    const [text, setText] = useState('');
    const [features, setFeatures] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (text.length <= 1000) {
            setText(event.target.value);
        }
    }

    const sendNews = () => {
        if (text.length > 0) {
            setIsLoading(true);
            fetch('http://127.0.0.1:5000/', {
                 method: 'POST',
                 body: text
            }).then((response) => response.json()).then((result: ICheckNews) => {
                const featuresMap = result.features.reduce((acc, f) => {
                    acc[f[0].toLowerCase()] = f[1];
                    return acc;
                }, {})
                setFeatures(featuresMap)
            }).finally(() => setIsLoading(false));
        }
    }

    // let markedText;
    // if (fragments) {
    //     const yellowRegex = getTruthRegexp(fragments);
    //     const redRegex = getFalsyRegexp(fragments);
    //     const fragmentsToTruthHighlight = fragments.filter((fragment) => fragment.fakeProbability < 0).map((fragment) => fragment.text);
    //     const fragmentsToFalsyHighlight = fragments.filter((fragment) => fragment.fakeProbability > 0).map((fragment) => fragment.text);

    //     markedText = text.split(new RegExp(`(${yellowRegex.source}|${redRegex.source})`, 'gi')).map((part, index) => {
    //         if (fragmentsToTruthHighlight.includes(part.toLowerCase())) {
    //             return <span key={index} style={{ color: 'blue' }}>{part}</span>;
    //         } else if (fragmentsToFalsyHighlight.includes(part.toLowerCase())) {
    //             return <span key={index} style={{ color: 'red' }}>{part}</span>;;
    //         } else {
    //             return part;
    //         }
    //     });
    // }

    return (
        <div className={styles.main}>
            <div>
                <TextLogo/>
            </div>
            <>
                {isLoading 
                ? (
                    <div className={styles.center} style={{width: 80}} >

                    <Comment
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="comment-loading"
                        color="#fff"
                        backgroundColor="#F4442E"
                    />
                    </div>
                ) 
                : !features && (
                    <div className={styles.textField + ' ' + styles.center} >

                        <TextField value={text} onChange={handleChange}/>
                        <SendButton onClick={sendNews}/>
                        </div>
                )}
                {features !== null && (
                    <div className={styles.textField + ' ' + styles.center} >
                    <p className={styles.centerText}>
                        <TextHighlighter text={text} features={features}/>
                    </p>
                    
                        <ResetButton onClick={() => {
                            setFeatures(null);
                            setText('');
                        }}
                        />
                    
                    </div>
                    
                )}
            </>
        </div>
    )
}
