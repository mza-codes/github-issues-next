export default function FullScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className="min-h-[100dvh] col center">{children}</main>;
}
