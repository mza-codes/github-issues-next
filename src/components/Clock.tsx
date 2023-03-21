"use client";

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(Date.now());

    // const id = useRef<NodeJS.Timer>();
    // useEffect(() => {
    //     id.current = setInterval(() => setTime(Date.now), 10);
    //     console.count("inside useEffect");
    //     return () => {
    //         console.count("Inside useEffect RETURN;");
    //         clearInterval(id.current);
    //     };
    // }, [time]);

    useEffect(() => {
        console.count("inside useEffectV2");
        setInterval(() => setTime(Date.now), 10);
    }, []);

    return (
        <div className="p-4">
            <span className="font-black">{new Date(time).toLocaleString()}</span>
        </div>
    );
}
