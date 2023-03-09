import { RepoIssue } from "../@types";

export default function IssueCard({ item }: IssueCardProps) {
    return (
        <div className="w-full bg-slate-200 min-h-[180px] col text-start gap-2 p-3 ">
            <h1 className="h5">{item.title}</h1>
            <article className="prose lg:prose-xl">
                {item.body?.length > 400
                    ? item.body.slice(0, 420) + "..."
                    : item.body}
            </article>
        </div>
    );
}

type IssueCardProps = {
    item: RepoIssue;
};
