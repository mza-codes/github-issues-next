import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

const inputs = [
    {
        name: "user",
        minLength: 1,
        placeholder: "Repository Owner",
    },
    {
        name: "repo",
        minLength: 1,
        placeholder: "Repository Name",
    },
] as DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[];

export default function Search({ repo = false, row = false }: Props) {
    if (repo) {
        return (
            <form
                action="/issues"
                method="get"
                className={`${row ? "row" : "col"} gap-2`}>
                <input
                    required={true}
                    name="q"
                    className="input-field"
                    placeholder="Search Issues..."
                />
                <input type="hidden" value={1} name="page" readOnly />
                <button type="submit" className={`btn-submit btn-hover text-sm`}>
                    Search
                </button>
            </form>
        );
    } else
        return (
            <form
                action="/search/issues"
                method="get"
                className={`${row ? "row" : "col"} gap-2`}>
                {inputs.map((field) => (
                    <input
                        key={field.name}
                        required={true}
                        {...field}
                        className="input-field"
                    />
                ))}
                <button type="submit" className={`btn-submit btn-hover text-sm`}>
                    Search
                </button>
            </form>
        );
}

type Props = {
    repo?: boolean;
    row?: boolean;
};
