import React, {Fragment, useEffect, useMemo, useState} from "react";
import {Logo} from "src/SideBar/logo";
import styles from './SideBar.scss';
import {data} from "../../mocks/loadConversations/loadConversations";
import {IConversationItem} from "src/Store/Models";
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

const enum Periods {
    TODAY,
    YESTERDAY,
    DAYS_7,
    DAYS_30,
}

const periodsText = {
    [Periods.TODAY]: 'Today',
    [Periods.YESTERDAY]: 'Yesterday',
    [Periods.DAYS_7]: '7 days ago',
    [Periods.DAYS_30]: '30 days ago',
}

const sortConversations = (conversations: IConversationItem[]): [Periods, IConversationItem[]][] => {
    const conversationsTuple: [Periods, IConversationItem[]][] = [
        [Periods.TODAY, []],
        [Periods.YESTERDAY, []],
        [Periods.DAYS_7, []],
        [Periods.DAYS_30, []],
    ]
    conversations.sort((a, b) => dayjs(a.createTime).isAfter(dayjs(b.createTime)) ? 1 : -1).forEach((item) => {
        const dayJsDate = dayjs(item.createTime);
        if (dayJsDate.year() !== dayjs().year()) {
            return;
        }

        if (dayJsDate.isToday()) {
            return conversationsTuple[0][1].push(item);
        }

        if (dayJsDate.isYesterday()) {
            return conversationsTuple[1][1].push(item);
        }

        const dayDiff = dayjs().diff(item.createTime, 'day')
        if (dayDiff > 1 && dayDiff <= 7) {
            return conversationsTuple[2][1].push(item);
        }

        if (dayDiff > 7 && dayDiff <= 30) {
            return conversationsTuple[3][1].push(item);
        }
    })
    return conversationsTuple;
}

export const SideBar = () => {
    const [conversations, setConversations] = useState<IConversationItem[]>([]);

    useEffect(() => {
        fetch('http://localhost:9000/api/conversations').then((response) => response.json()).then((result: IConversationItem[]) => setConversations(result));
    }, []);

    const sortConversationsMemo = useMemo(() => {
        return sortConversations(conversations);
    }, [conversations]);

    return (
        <aside className={styles.sideBar}>
            <div className={styles.sideBarLogo}>
                <Logo />
                <span className={styles.logoText}>Check news</span>
            </div>
            {sortConversationsMemo.map(([period, sortedConversations]) => sortedConversations.length > 0 && (
                <Fragment key={period}>
                    <p className={styles.period}>
                        {periodsText[period]}
                    </p>
                    {sortedConversations.map((item) => <p className={styles.conversation} key={item.id}>{item.title}</p>)}
                </Fragment>
            ))}
        </aside>
    )
}
