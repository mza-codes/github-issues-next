import axios from "axios";
import ErrorBox from "../../../components/Error";
import Issues from "../../../components/Issues";

export default async ({ searchParams, params }: any) => {
    console.log("PARAM: ", { params, searchParams });
    const { user, repo } = params;

    try {
        if (!user || !repo) throw new Error("Invalid User/Repo");
        const { data } = await axios.get(
            `https://api.github.com/repos/${user}/${repo}/issues`
        );

        return (
            <section className="col center gap-2">
                <h2 className="h3 my-6">Issues with {repo}</h2>
                <Issues data={data} />
            </section>
        );
    } catch (err: any) {
        console.error("Error in FETCH:", err);
        return <ErrorBox message={err?.message ?? "Error in Fetching"} />;
    }
};

/**
 * @param { ?page=2 }
 * @param { q=is%3Aissue+is%3Aopen }
 * @param { %3A === : }
 * @see is:open view opened issues
 */
