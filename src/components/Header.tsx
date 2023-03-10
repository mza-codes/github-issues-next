import Link from "next/link";
import Search from "./Search";
import ThemeController from "./ThemeControl";

export default function Header() {
    return (
        <header className="w-full fixed top-0 header z-50 min-h-[80px] py-3 row flex-wrap gap-2 justify-between shadow-lg">
            <div className="col justify-center text-left mx-2 gap-2">
                <span className="ml-1">Search Issues in Entire Github</span>
                <Search row={true} repo={true} />
            </div>
            <div className="col justify-center text-left mx-2">
                <Link href="/" className="h6">
                    Github Issues Tracker
                </Link>
                <ThemeController />
            </div>
            <div className="col justify-center text-left mx-2 gap-2">
                <span className="ml-1">Search Issues in Particular Repo</span>
                <Search row={true} repo={false} />
            </div>
        </header>
    );
}
