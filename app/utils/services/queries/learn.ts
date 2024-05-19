import { gql } from "@apollo/client";

export const GET_PATNERS_DATA = gql`
  query Partners($locale: I18NLocaleCode) {
    partners(locale: $locale) {
      data {
        attributes {
          description
          link
          type
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
`;
export const GET_PATNERS_HEAD_DATA = gql`
  query Partners($locale: I18NLocaleCode) {
    partnerSeo(locale: $locale) {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`;
export const GET_PATNERS_SEO = gql`
  query Partners {
    partnerSeo {
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

export const GET_ABOUT_US_DATA = gql`
  query AboutUs($locale: I18NLocaleCode) {
    aboutUs(locale: $locale) {
      data {
        attributes {
          title
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

export const GET_ABOUT_US_SEO = gql`
  query AboutUs($locale: I18NLocaleCode) {
    aboutUs(locale: $locale) {
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

export const GET_BLOGS_CATEGORIES_DATA = gql`
  query BlogCategories($locale: I18NLocaleCode, $filters: BlogCategorieFiltersInput) {
    blogCategories(locale: $locale, filters: $filters) {
      data {
        attributes {
          title
          slug
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
          }
        }
      }
    }
  }
`;

export const GET_BLOGS_CATEGORIES_SEO = gql`
  query BlogCategories($locale: I18NLocaleCode, $filters: BlogCategorieFiltersInput) {
    blogCategories(locale: $locale, filters: $filters) {
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

export const GET_BLOGS_DATA = gql`
  query Blogs($locale: I18NLocaleCode, $filters: BlogFiltersInput, $pagination: PaginationArg) {
    blogs(locale: $locale, filters: $filters, pagination: $pagination) {
      data {
        attributes {
          slug
          title
          description
          publisher_date
          keywords
          image {
            data {
              attributes {
                url
              }
            }
          }
          blogs_categories {
            data {
              attributes {
                title
              }
            }
          }
        }
      }
      meta {
        pagination {
          pageCount
        }
      }
    }
  }
`;

export const GET_BLOGS_DETAIL_SEO = gql`
  query Blogs($locale: I18NLocaleCode, $filters: BlogFiltersInput) {
    blogs(locale: $locale, filters: $filters) {
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

export const GET_BLOG_DETAILS_DATA = gql`
  query BlogsDetails($locale: I18NLocaleCode, $filters: BlogFiltersInput) {
    blogs(locale: $locale, filters: $filters) {
      data {
        attributes {
          title
          publisher_date
          keywords
          detail
          slug
          blogs_categories {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const BLOGS_SITE_MAP = gql`
  query Blogs {
    blogs {
      data {
        attributes {
          slug
          locale
        }
      }
    }
  }
`;

export const BLOGS_CATAGORIES_SITE_MAP = gql`
  query Data {
    blogCategories {
      data {
        attributes {
          locale
          slug
        }
      }
    }
  }
`;
