import './globals.css';
import SiteNavBar from "@/components/SiteNavBar";
import SiteFooter from "@/components/SiteFooter";
import NextTopLoader from 'nextjs-toploader';

async function fetchMetaData() {
  const res = await fetch(process.env.BASE_URL + "api/MetaData");
  if (!res.ok) {
    throw new Error("MetaData Fetching Failed");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let metaData;

  try {
    metaData = await fetchMetaData();
  } catch (error) {
    console.error("Error fetching meta data:", error);

    metaData = {
      title: "Home",
      description: "This is the home page."
    };
  }

  return (
    <html lang="en">
      <head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        
      </head>
      <body>
        <NextTopLoader color="#269669" height={3} speed={200} />
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
