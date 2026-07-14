// Copyright (C) 2017-2023 Smart code 203358507

const formatClockTime = (date: Date = new Date()): string => {
    // hour12 is omitted so Intl picks the 12h/24h convention of the user's locale
    return new Intl.DateTimeFormat(navigator.language, { hour: 'numeric', minute: '2-digit' }).format(date);
};

export { formatClockTime };
