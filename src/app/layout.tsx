import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Github - Issues</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Header />
                <main className="min-h-[100dvh] col center pt-24">{children}</main>
            </body>
        </html>
    );
}
