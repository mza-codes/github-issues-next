import Link from "next/link";
import { github } from "../../api";
import ErrorBox from "../../components/Error";
import Issues from "../../components/Issues";

export default async ({ searchParams }: any) => {
    let { q, page = 1 } = searchParams;
    try {
        if (!q) throw new Error(`Invalid Query!`);

        const { data } = await github.get(`/search/issues?q=${q}&page=${page}`);
        if (data?.issues?.length <= 0)
            throw new Error(`There are no more issues associated with ${q}!`);

        const pages = [...Array(data?.total_count)];
        return (
            <>
                <section className="col center gap-2">
                    <h2 className="h3 my-6">Listing Issues with query: {q}</h2>
                    <Issues data={data?.items} />
                </section>
                <section className="fixed bottom-0 py-2 bg-white w-full row gap-2 center">
                    {pages.map((_, i) => (
                        <Link
                            href={`/issues/?q=${q}&page=${i + 1}`}
                            className="page-link"
                            key={i}>
                            {i + 1}
                        </Link>
                    ))}
                </section>
            </>
        );
    } catch (err: any) {
        const msg = `Error fetching: ${q} & page=${page}`;
        console.log(msg);
        return <ErrorBox message={err?.message ?? msg} />;
    }
};

/**
 * @argument {
 *      const currentPage = parseInt(page);
 *      const pages = [...Array(currentPage + 4)];
 * }
 */
