// import moment from "moment";
import { RepoIssue } from "../@types";
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";

export default function IssueCard({ item }: IssueCardProps) {
    
    return (
        <div className="w-full bg-slate-200 min-h-[180px] col text-start gap-2 relative p-3 rounded-md border-2 border-black bg-opacity-40 hover:bg-opacity-80">
            <h1 className="text-sm">{item.title}</h1>
            <article className="prose lg:prose-xl text-base">
                {item.body?.length > 280
                    ? item.body.slice(0, 280) + "..."
                    : item.body}
            </article>
            {/* <h3 className="text-base">Last Modified: {moment(item.updated_at).calendar()}</h3> */}
            {/* <h3 className="text-base">Created: {moment(item.created_at).calendar()}</h3> */}
            <Link
                title="Expand View"
                href={`/`}
                className="absolute right-1 bottom-1 text-xl icon opacity-50 hover:opacity-100">
                <MdOutlineOpenInNew />
            </Link>
        </div>
    );
}

type IssueCardProps = {
    item: RepoIssue;
};
