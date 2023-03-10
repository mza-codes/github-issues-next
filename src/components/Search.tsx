"use client";

import { useRouter } from "next/navigation";
import { DetailedHTMLProps, FormEvent, InputHTMLAttributes } from "react";

const inputs = [
    {
        name: "user",
        minLength: 1,
        maxLength: 120,
        placeholder: "Repository Owner",
    },
    {
        name: "repo",
        minLength: 1,
        maxLength: 120,
        placeholder: "Repository Name",
    },
] as DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[];

export default function Search({ repo, row, sm }: Props) {
    const router = useRouter();

    function handleSubmitWUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        router.push(`/${formData.get("user")}/${formData.get("repo")}`);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        router.push(`/search/${formData.get("q")}?page=${formData.get("page")}`);
    }

    if (repo) {
        return (
            <form onSubmit={handleSubmit} className={`${row ? "row" : "col"} gap-2`}>
                <input
                    required={true}
                    name="q"
                    maxLength={120}
                    className={`input-field ${sm ? "py-1 px-2" : "py-2 px-4"}`}
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
            <form onSubmit={handleSubmitWUser} className={`${row ? "row" : "col"} gap-2`}>
                {inputs.map((field) => (
                    <input
                        key={field.name}
                        required={true}
                        {...field}
                        className={`input-field ${sm ? "py-1 px-2" : "py-2 px-4"}`}
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
    sm?: boolean;
};
