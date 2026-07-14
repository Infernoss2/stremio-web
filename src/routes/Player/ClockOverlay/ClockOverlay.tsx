// Copyright (C) 2017-2023 Smart code 203358507

import React, { useEffect, useState } from 'react';
import { formatClockTime } from './helpers';
import styles from './ClockOverlay.less';

type Props = {
    className?: string,
};

const ClockOverlay = ({ className }: Props) => {
    const [time, setTime] = useState(() => formatClockTime());

    useEffect(() => {
        const interval = window.setInterval(() => {
            setTime(formatClockTime());
        }, 1000);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className={className}>
            <span className={styles['clock']}>{time}</span>
        </div>
    );
};

export default ClockOverlay;
