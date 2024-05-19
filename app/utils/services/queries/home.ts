import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      data {
        attributes {
          data {
            lotties_animation
            description
            title
          }
          short_description
          title
          long_description
          lotties_animation
          footerTitle
          footerDescription
          footerMedia {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOME_SEO = gql`
  query Seo($locale: I18NLocaleCode) {
    home(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            canonicalURL
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }

            keywords

            metaSocial {
              socialNetwork
              title
              description
            }
          }
        }
      }
    }
  }
`;

export const GET_CLIENTS_DATA = gql`
  query Clients($locale: I18NLocaleCode) {
    clients(locale: $locale) {
      data {
        attributes {
          name
          description
          media {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_LANGUAGES = gql`
  query I18NLocales {
    i18NLocales {
      data {
        attributes {
          name
          code
        }
      }
    }
  }
`;

export const GET_IMPRESSUM_SEO = gql`
  query Impressum {
    impressum {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            canonicalURL
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }

            keywords

            metaSocial {
              socialNetwork
              title
              description
            }
          }
        }
      }
    }
  }
`;
export const GET_IMPRESSUM_DATA = gql`
  query Impressum($locale: I18NLocaleCode) {
    impressum(locale: $locale) {
      data {
        attributes {
          description
        }
      }
    }
  }
`;

export const GET_Datenschutz_SEO = gql`
  query Datenschutz {
    datenschutz {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            canonicalURL
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }

            keywords

            metaSocial {
              socialNetwork
              title
              description
            }
          }
        }
      }
    }
  }
`;

export const GET_Datenschutz_DATA = gql`
  query Datenschutz($locale: I18NLocaleCode) {
    datenschutz(locale: $locale) {
      data {
        attributes {
          description
        }
      }
    }
  }
`;
