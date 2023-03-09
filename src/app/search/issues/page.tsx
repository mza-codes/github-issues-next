import axios from "axios";
import Link from "next/link";
import ErrorBox from "../../../components/Error";

import Issues from "../../../components/Issues";

export default async ({ searchParams }: any) => {
    let page = 1;
    console.log("PARAMS: ", searchParams);
    const { user, repo, page: qPage } = searchParams;

    try {
        page = qPage ? parseInt(qPage) : 1;

        if (!user || !repo) throw new Error("Invalid User/Repo");
        const { data } = await axios.get(
            `https://api.github.com/repos/${user}/${repo}/issues?page=${page}`
        );

        if (data?.length <= 0)
            throw new Error(
                `There are no more issues associated with ${repo}!`
            );

        const pages = [...Array(page + 4)];
        console.log("Pages Array: ", pages);
        return (
            <>
                <section className="col center gap-2">
                    <h2 className="h3 my-6">Issues with {repo}</h2>
                    <Issues data={data} />
                </section>
                <section className="fixed bottom-0 py-2 bg-white w-full row gap-1 center">
                    {pages.map((_, i) => (
                        <Link
                            href={`/search/issues/?user=${user}&repo=${repo}&page=${
                                i + 1
                            }`}
                            className="p-2 border-r-2 border-2 border-green-600"
                            key={i}>
                            {i + 1}
                        </Link>
                    ))}
                </section>
            </>
        );
    } catch (err: any) {
        console.log("Error fetching page: ", page);
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
