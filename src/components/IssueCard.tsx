// import moment from "moment";
import { RepoIssue } from "../@types";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function IssueCard({ item }: IssueCardProps) {
    return (
        <div className="w-full bg-slate-200 min-h-[180px] col text-start gap-2 relative p-3 rounded-md border-2 border-black bg-opacity-40 hover:bg-opacity-80">
            <h1 className="text-sm">{item.title}</h1>
            <article className="prose lg:prose-xl text-base overflow-hidden">
                {item.body?.length > 280 ? item.body.slice(0, 280) + "..." : item.body}
            </article>
            {/* <h3 className="text-base">Last Modified: {moment(item.updated_at).calendar()}</h3> */}
            {/* <h3 className="text-base">Created: {moment(item.created_at).calendar()}</h3> */}
            <div className="absolute right-2 bottom-1 flex flex-row-reverse gap-2">
                <Link
                    title="Expand View"
                    href={`/`}
                    className="text-xl icon opacity-50 hover:opacity-100">
                    <MdOutlineOpenInNew />
                </Link>

                <a
                    title="View in Github"
                    href={item.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl icon opacity-50 hover:opacity-100">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

type IssueCardProps = {
    item: RepoIssue;
};
