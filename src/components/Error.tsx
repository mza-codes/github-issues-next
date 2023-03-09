import Link from "next/link";
import FullScreen from "./FullScreen";

export default function ErrorBox({ message }: Props) {
    return (
        <FullScreen>
            <main className="p-3 text-slate-800 m-auto col center gap-3">
                <h2 className="h6">Error!</h2>
                <span className="h7">
                    {message ?? "An Error Occured while rendering this page!"}
                </span>
                <Link
                    href="/"
                    className="py-2 px-4 font-normal bg-green-600 hover:bg-green-700 text-white btn-hover">
                    Home
                </Link>
            </main>
        </FullScreen>
    );
}

type Props = {
    message?: string;
};
