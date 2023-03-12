import Link from "next/link";
import Search from "./Search";

export default function Header() {
    return (
        <header className="w-full fixed top-0 header z-50 min-h-[80px] py-3 row flex-wrap gap-2 justify-between shadow-lg">
            <div className="col justify-center text-left mx-2 gap-2">
                <span className="ml-1">Search Issues in Entire Github</span>
                <Search sm={true} row={true} repo={true} />
            </div>
            <div className="col justify-center gap-3 text-left mx-2">
                <div className="hidden xl:block">
                    <Link href="/" className="h6">
                        Github Issues Tracker
                    </Link>
                </div>
                <div className="block xl:hidden">
                    <Link className="btn-submit btn-hover" href="/user">
                        Search User Repo
                    </Link>
                </div>
            </div>
            <section className="hidden xl:flex">
                <div className="col justify-center text-left mx-2 gap-2">
                    <span className="ml-1">Search Issues in Particular Repo</span>
                    <Search sm={true} row={true} repo={false} />
                </div>
            </section>
        </header>
    );
}
