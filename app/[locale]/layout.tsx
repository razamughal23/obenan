import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Work_Sans, Poppins } from "next/font/google";
import { ApolloWrapper } from "utils/services/apollo-provider";
import "app/globals.css";
import "aos/dist/aos.css";
import MaterialThemeProvider from "utils/theme/MaterialThemeProvider";
import Header from "app/components/navbar/header/header";
import Footer from "app/components/navbar/footer/footer";
const fontWorkSans = Work_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["vietnamese"],
  variable: "--work-Sans",
});
const fontPoppins = Poppins({ weight: ["700", "600", "500", "400"], subsets: ["latin"], variable: "--poppins" });

export default async function LocaleLayout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${fontWorkSans.variable} ${fontPoppins.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ApolloWrapper>
            <MaterialThemeProvider>
              <Header locale={locale} />
              {children}
              <Footer />
            </MaterialThemeProvider>
          </ApolloWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
