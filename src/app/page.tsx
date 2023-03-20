import Counter from "../components/Counter";
import Search from "../components/Search";

export const metadata = {
    title: "Home",
};

const isDev = process.env.NODE_ENV === "development";

export default async () => {
    return (
        <section className="col center gap-2 bg-color">
            <h2 className="h4 my-6">Search Repo Issues</h2>
            <Search repo={true} />
            {isDev && (
                <div className="row center gap-3">
                    {[...Array(1)].map((v, i) => (
                        <Counter key={i} />
                    ))}
                </div>
            )}
        </section>
    );
};

/**
 * @param { ?page=2 }
 * @param { q=is%3Aissue+is%3Aopen }
 * @param { %3A === : }
 * @see is:open view opened issues */
