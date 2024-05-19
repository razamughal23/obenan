import { gql } from "@apollo/client";

export const GET_CONTACT_US_DATA = gql`
  query ContactUs($locale: I18NLocaleCode) {
    contactUs(locale: $locale) {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`;
export const GET_CONTACT_US_SEO = gql`
  query ContactUs($locale: I18NLocaleCode) {
    contactUs(locale: $locale) {
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

export const GET_CUSTOMER_QUERY_DATA = gql`
  mutation CreateCustomerQuery($data: CustomerQueryInput!) {
    createCustomerQuery(data: $data) {
      data {
        id
        attributes {
          name
          message
          email
          company
        }
      }
    }
  }
`;
