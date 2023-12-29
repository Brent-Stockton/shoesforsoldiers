import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoes For Soldiers",
  description:
    "Empowering Our Soldiers, One Step at a Time - Join Us in Making a Difference Through Every Home Loan Closed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="description"
          content="Empowering Our Soldiers, One Step at a Time - Join Us in Making a Difference Through Every Home Loan Closed."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.shoesforsoldiers.org" />
        <meta property="og:title" content="Shoes For Soldiers" />
        <meta
          property="og:description"
          content="Empowering Our Soldiers, One Step at a Time - Join Us in Making a Difference Through Every Home Loan Closed."
        />
        <meta property="og:image" content="Your Image URL" />

        <link rel="icon" href="/images/logo.jpeg" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
