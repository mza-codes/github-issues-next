"use client";

import { useEffect, useRef, useState } from "react";

let id: NodeJS.Timer;
export default function Clock() {
    const [time, setTime] = useState(Date.now());
    id = setInterval(() => setTime(Date.now), 10);

    useEffect(() => {
        return () => {
            clearInterval(id);
        };
    }, [time]);

    return (
        <div className="p-4">
            <span className="font-black">{new Date(time).toLocaleString()}</span>
        </div>
    );
}
