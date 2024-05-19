import { usePathname } from "next-intl/client";
import { LinkProps } from "next/link";
import { useLocale } from "use-intl";

interface Props extends LinkProps {
  locale?: string;
  changeLanguage?: string;
  children: any;
  style?: any;
}
const defaultLanguage = "en";
const BaseLink = (props: Props) => {
  const { children, locale, href, changeLanguage = undefined } = props;
  const path = usePathname();
  const currentLanguage = useLocale();
  const changedLanguage = locale && locale != currentLanguage ? locale : currentLanguage;

  const translatedHrf = changeLanguage
    ? "/" + changeLanguage + path
    : changedLanguage == defaultLanguage
    ? href
    : "/" + changedLanguage + href;
  return (
    <a {...props} href={translatedHrf}>
      {children}
    </a>
  );
};
export default BaseLink;
