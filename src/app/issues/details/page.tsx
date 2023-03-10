import { DeatailedIssue } from "../../../@types";
import { github } from "../../../api";
import ErrorBox from "../../../components/Error";

export default async ({ searchParams }: any) => {
    const { user, repo, id } = searchParams;
    try {
        if (!user || !repo || !id) throw new Error("Invalid Query Parameters!");
        const { data }: { data: DeatailedIssue[] } = await github.get(
            `/repos/${user}/${repo}/issues/${id}/timeline`
        );
        
        if (data?.length <= 0) throw new Error("No Timeline previews for this Issue!");

        return (
            <section className="col center gap-2">
                <span
                    style={{
                        overflowX: "scroll",
                        maxWidth: "90vw",
                        whiteSpace: "nowrap",
                    }}>
                    {JSON.stringify(data)}
                </span>
            </section>
        );
    } catch (err: any) {
        const msg = `Error Fetching ${user}/${repo}/${id}`;
        console.log(msg, err);
        return <ErrorBox message={err?.message ?? msg} />;
    }
};

/** @param { https://api.github.com/repos/pmndrs/zustand/issues/1678/timeline } */
