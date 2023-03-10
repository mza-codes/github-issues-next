"use client";

export default function ThemeController() {
    const handleTheme = () => {
        document?.body?.classList?.toggle("theme");
    };
    return (
        <>
            <button type="button" onClick={handleTheme}>
                Change Theme
            </button>
        </>
    );
}
