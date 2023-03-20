"use client";

import { MouseEvent, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id === "plus") setCount((c) => c + 1);
        else setCount((c) => c - 1);
    };

    return (
        <div className="counter">
            <button id="minus" onClick={handleCount}>
                <HiMinus />
            </button>
            <span className="px-2 font-black">{count}</span>
            <button id="plus" onClick={handleCount}>
                <HiPlus />
            </button>
        </div>
    );
}
