import Link from "next/link";
import { github } from "../../../api";
import ErrorBox from "../../../components/Error";
import Issues from "../../../components/Issues";
import PaginationWrapper from "../../../components/PaginationWrapper";
import { generatePages } from "../../../utils";

export async function generateMetadata({ searchParams }: any) {
    return { title: `Issues - ${searchParams?.user} | ${searchParams?.repo}` };
}

export default async ({ searchParams }: any) => {
    let page = 1;
    console.log("PARAMS: ", searchParams);
    const { user, repo, page: qPage } = searchParams;

    try {
        page = qPage ? parseInt(qPage) : 1;

        if (!user || !repo) throw new Error("Invalid User/Repo");
        const { data } = await github.get(`/repos/${user}/${repo}/issues?page=${page}`);

        if (data?.length <= 0)
            throw new Error(`There are no more issues associated with ${repo}!`);

        const pages = generatePages(page || 2);
        return (
            <>
                <section className="col center gap-2">
                    <h2 className="h3 my-6">Issues with {repo}</h2>
                    <Issues data={data} />
                </section>
                <PaginationWrapper>
                    {pages.map((p) => {
                        if (p === null) {
                            return (
                                <button key={p} disabled className="page-link">
                                    ...
                                </button>
                            );
                        } else
                            return (
                                <Link
                                    key={p}
                                    href={`/search/issues/?user=${user}&repo=${repo}&page=${p}`}
                                    className="page-link">
                                    {p}
                                </Link>
                            );
                    })}
                </PaginationWrapper>
            </>
        );
    } catch (err: any) {
        console.log("Error fetching page: ", page);
        console.error("Error in FETCH:", err);
        return <ErrorBox message={err?.message ?? "Error Fetching Data"} />;
    }
};

/**
 * @private { https://api.github.com/search/issues?q={query}&page={page} }
 * @param { ?page=2 }
 * @param { q=is%3Aissue+is%3Aopen }
 * @param { %3A === : }
 * @see is:open view opened issues
 */
