import { RepoIssue } from "../@types";
import IssueCard from "./IssueCard";

export default function Issues({ data }: Props) {
    return (
        <section className="col gap-2 center px-3">
            {data.map((issue) => (
                <IssueCard key={issue.id} item={issue} />
            ))}
        </section>
    );
}

type Props = {
    data: RepoIssue[];
};
