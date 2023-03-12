"use client";

import { IoIosCloudyNight } from "react-icons/io";

export default function ThemeController() {
    
    function handleTheme() {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <>
            <button
                type="button"
                className="fixed bottom-2 text-xl right-2 rounded-md py-2 px-4 bg-orange-400 hover:bg-orange-500"
                onClick={handleTheme}>
                <IoIosCloudyNight />
            </button>
        </>
    );
}
