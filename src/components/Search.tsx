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
] as DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>[];

export default function Search() {
    return (
        <form action="/search/issues" method="get" className="col gap-2">
            {inputs.map((field) => (
                <input
                    key={field.name}
                    required={true}
                    {...field}
                    className="input-field"
                />
            ))}
            <button type="submit" className="btn-submit btn-hover text-sm">
                Submit
            </button>
        </form>
    );
}
