import { gql } from "@apollo/client";

export const GET_SINGLE_LOCATION_BUSINESS_DATA = gql`
  query SingleLocationBusiness($locale: I18NLocaleCode) {
    singleLocationBusiness(locale: $locale) {
      data {
        attributes {
          title
          data {
            title
            description
            image {
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
  }
`;

export const GET_SINGLE_LOCATION_BUSINESS_SEO = gql`
  query SingleLocationBusiness($locale: I18NLocaleCode) {
    singleLocationBusiness(locale: $locale) {
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

export const GET_Multi_LOCATION_BUSINESS_DATA = gql`
  query MultiLocationBusiness($locale: I18NLocaleCode) {
    multiLocationBusiness(locale: $locale) {
      data {
        attributes {
          title
          description
          data {
            title
            description
            data {
              title
              description
            }
          }
        }
      }
    }
  }
`;

export const GET_Multi_LOCATION_BUSINESS_SEO = gql`
  query MultiLocationBusiness($locale: I18NLocaleCode) {
    multiLocationBusiness(locale: $locale) {
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

export const GET_BUSINESS_AGENCIES_DATA = gql`
  query BusinessSolutionAgencie($locale: I18NLocaleCode) {
    businessSolutionAgencie(locale: $locale) {
      data {
        attributes {
          title
          header {
            title
            description
          }
          heading
          description
          data {
            title
            description
            image {
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
  }
`;

export const GET_BUSINESS_AGENCIES_SEO = gql`
  query BusinessSolutionAgencie($locale: I18NLocaleCode) {
    businessSolutionAgencie(locale: $locale) {
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
