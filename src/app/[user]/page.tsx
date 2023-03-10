import Search from "../../components/Search";

export const metadata = {
    title: "Home",
};

export default async () => {
    return (
        <section className="col center gap-2 bg-color">
            <h2 className="h4 my-6">Search Repo Issues</h2>
            <Search />
        </section>
    );
};

/**
 * @param { ?page=2 }
 * @param { q=is%3Aissue+is%3Aopen }
 * @param { %3A === : }
 * @see is:open view opened issues */
