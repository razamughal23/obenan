import dynamic from "next/dynamic";
const ScanYourLocation = dynamic(() => import("./templete/scanYourLocation"));

export async function generateMetadata() {
  return {
    title: "Check Your Business's Online Presence with Obenan's Local SEO Software",
    description:
      "Obenan's local SEO software allows you to quickly and easily check your business's online presence. Our powerful tool helps you understand how your business appears.",
    publisher: "https://obenan.com/",
    keywords: "Blogs",
    robots: "index, follow, max-image-preview:large",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    alternates: {
      canonical: "https://obenan.com/blogs/",
    },
    openGraph: {
      type: "website",
      title: "Check Your Business's Online Presence with Obenan's Local SEO Software",
      description:
        "Obenan's local SEO software allows you to quickly and easily check your business's online presence. Our powerful tool helps you understand how your business appears.",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description:
        "Obenan's local SEO software allows you to quickly and easily check your business's online presence. Our powerful tool helps you understand how your business appears.",
      title: "Check Your Business's Online Presence with Obenan's Local SEO Software",
      domain: "https://obenan.com/",
    },
  };
}

const page = () => {
  return (
    <div>
      <ScanYourLocation />
    </div>
  );
};

export default page;
