// import moment from "moment";
import { RepoIssue } from "../@types";
import { FaGithub } from "react-icons/fa";

export default function IssueCard({ item }: IssueCardProps) {
    const arr = item.repository_url.split("/");
    const [repo, user] = [arr[arr.length - 1], arr[arr.length - 2]];

    return (
        <div className="w-full issue-card min-h-[180px] col theme-text text-start gap-2 relative p-3 rounded-md border-2 border-black">
            <h1 className="text-sm">
                <b>
                    {user}/{repo}
                </b>{" "}
                {item.title}
            </h1>
            <h2 className="text-xs font-semibold">
                {new Date(item.created_at).toLocaleString()}
            </h2>
            <article className="prose markdown-text text-base overflow-hidden">
                {item.body?.length > 280 ? item.body.slice(0, 280) + " ..." : item.body}
            </article>
            {/* <h3 className="text-base">Last Modified: {moment(item.updated_at).calendar()}</h3> */}
            {/* <h3 className="text-base">Created: {moment(item.created_at).calendar()}</h3> */}

            <span className="text-sm uppercase">
                Status: <b>{item.state}</b>
            </span>
            <div className="absolute right-2 bottom-1 flex flex-row-reverse gap-2">
                {/* <Link
                    title="Expand View"
                    href={`/issues/details?user=${user}&repo=${repo}&id=${item.number}`}
                    className="text-2xl icon opacity-50 hover:opacity-100">
                    <MdOutlineOpenInNew />
                </Link> */}

                <a
                    title="View in Github"
                    href={item.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl icon opacity-50 hover:opacity-100">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

type IssueCardProps = {
    item: RepoIssue;
};
