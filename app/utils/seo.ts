import { Metadata } from "next";

export const convertSeo = (seoData: any): Metadata => {
  return {
    title: seoData?.metaTitle || "AI Powered Digital Marketing Solutions for Online Visibility",
    description:
      seoData?.metaDescription ||
      "We provide AI-powered digital marketing solutions to increase local businesses' online visibility and automate online duties with unsupervised workflow.",
    publisher: "https://obenan.com/",
    keywords: seoData?.keywords,
    robots: "index, follow, max-image-preview:large",
    viewport: " width=device-width, initial-scale=1.0",
    authors: [
      {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${seoData?.metaImage?.data?.attributes?.url}`,
      },
    ],
    alternates: {
      canonical: seoData?.canonicalURL || "https://obenan.com/",
    },
    openGraph: {
      type: "website",
      title: seoData?.metaTitle || "AI Powered Digital Marketing Solutions for Online Visibility",
      description:
        seoData?.metaDescription ||
        "We provide AI-powered digital marketing solutions to increase local businesses' online visibility and automate online duties with unsupervised workflow.",
      images: [`${process.env.NEXT_PUBLIC_BACKEND_URL}${seoData?.metaImage?.data?.attributes?.url}`],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description:
        seoData?.metaDescription ||
        "We provide AI-powered digital marketing solutions to increase local businesses' online visibility and automate online duties with unsupervised workflow.",
      title: seoData?.metaTitle || "AI Powered Digital Marketing Solutions for Online Visibility",
      domain: "https://obenan.com/",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${seoData?.metaImage?.data?.attributes?.url}`,
          alt: "Obenan metaImage",
          secureUrl: "",
          type: "image",
        },
      ],
    },
  };
};
