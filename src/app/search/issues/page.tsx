import axios from "axios";
import ErrorBox from "../../../components/Error";
import FullScreen from "../../../components/FullScreen";
import Issues from "../../../components/Issues";

export default async ({ searchParams }: any) => {
    const { user, repo } = searchParams;

    try {
        if (!user || !repo) throw new Error("Invalid User/Repo");
        const { data } = await axios.get(
            `https://api.github.com/repos/${user}/${repo}/issues`
        );

        if (data?.length <= 0)
            throw new Error(`There are no issues associated with ${repo}!`);

        return (
            <FullScreen>
                <section className="gradient-bg col center gap-2">
                    <h2 className="h3 my-6">Issues with {repo}</h2>
                    <Issues data={data} />
                </section>
            </FullScreen>
        );
    } catch (err: any) {
        console.error("Error in FETCH:", err);
        return <ErrorBox message={err?.message ?? "Error Fetching Data"} />;
    }
};

/**
 * @param { ?page=2 }
 * @param { q=is%3Aissue+is%3Aopen }
 * @param { %3A === : }
 * @see is:open view opened issues
 */
