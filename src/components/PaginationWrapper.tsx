export default function PaginationWrapper({ children }: any) {
    return (
        <section className="sticky bottom-0 shadow-[35px_35px_70px_45px_rgba(0,0,0,0.3)] py-2 header w-full row gap-2 center">
            {children}
        </section>
    );
}
