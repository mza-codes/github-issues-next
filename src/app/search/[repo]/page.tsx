import Link from "next/link";
import { github } from "../../../api";
import ErrorBox from "../../../components/Error";
import Issues from "../../../components/Issues";
import PaginationWrapper from "../../../components/PaginationWrapper";
import { generatePages } from "../../../utils";

export default async ({ params, searchParams }: any) => {
    let { repo } = params;
    let { page = 1 } = searchParams;
    const q = repo;
    try {
        if (!q) throw new Error(`Invalid Query!`);

        const { data } = await github.get(`/search/issues?q=${q}&page=${page}`);
        if (data?.issues?.length <= 0)
            throw new Error(`There are no more issues associated with ${q}!`);

        const pages = generatePages(parseInt(page) || 2);
        return (
            <>
                <section className="col center gap-2">
                    <h2 className="h3 my-6 text-center mx-2">
                        Listing Issues with query: {q}
                    </h2>
                    <Issues data={data?.items} />
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
                                    href={`/search/${q}?page=${p}`}
                                    className="page-link">
                                    {p}
                                </Link>
                            );
                    })}
                </PaginationWrapper>
            </>
        );
    } catch (err: any) {
        const msg = `Error fetching: ${q} & page=${page}`;
        console.log(msg);
        return <ErrorBox message={err?.message ?? msg} />;
    }
};
