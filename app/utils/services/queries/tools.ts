import { gql } from "@apollo/client";

export const GET_LOCAL_LISTING_DATA = gql`
  query Query($locale: I18NLocaleCode) {
    localListing(locale: $locale) {
      data {
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
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

export const GET_LOCAL_LISTING_SEO = gql`
  query LocalListing($locale: I18NLocaleCode) {
    localListing(locale: $locale) {
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

export const GET_BACKLINK_CHECKER_DATA = gql`
  query Query($locale: I18NLocaleCode) {
    backlinkChecker(locale: $locale) {
      data {
        attributes {
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
`;

export const GET_BACKLINK_CHECKER_SEO = gql`
  query BacklinkChecker($locale: I18NLocaleCode) {
    backlinkChecker(locale: $locale) {
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

export const GET_KEYWORD_SEARCH_DATA = gql`
  query KeywordSearch($locale: I18NLocaleCode) {
    keywordSearch(locale: $locale) {
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

export const GET_KEYWORD_SEARCH_SEO = gql`
  query KeywordSearch {
    keywordSearch {
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

export const GET_RECCURING_GOOGLE_BUSINESS_POST_DATA = gql`
  query ReccuringGoogleBusinessPost($locale: I18NLocaleCode) {
    recurringGoogleBusinessPost(locale: $locale) {
      data {
        attributes {
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
`;

export const GET_RECCURING_GOOGLE_BUSINESS_POST_SEO = gql`
  query ReccuringGoogleBusinessPost($locale: I18NLocaleCode) {
    recurringGoogleBusinessPost(locale: $locale) {
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

export const GET_SENTIMENT_ANALYSIS_DATA = gql`
  query SentimentAnalysis($locale: I18NLocaleCode) {
    sentimentAnalysis(locale: $locale) {
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

export const GET_SENTIMENT_ANALYSIS_SEO = gql`
  query SentimentAnalysis {
    sentimentAnalysis {
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

export const GET_REVIEW_MANAGEMENT_DATA = gql`
  query ReviewManagement($locale: I18NLocaleCode) {
    reviewManagement(locale: $locale) {
      data {
        attributes {
          title
          description
          lotties_animation
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

export const GET_REVIEW_MANAGEMENT_SEO = gql`
  query ReviewManagement($locale: I18NLocaleCode) {
    reviewManagement(locale: $locale) {
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

export const GET_REVIEW_WIDGET_DATA = gql`
  query ReviewWidget($locale: I18NLocaleCode) {
    reviewWidget(locale: $locale) {
      data {
        attributes {
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
`;

export const GET_REVIEW_WIDGET_SEO = gql`
  query ReviewWidget($locale: I18NLocaleCode) {
    reviewWidget(locale: $locale) {
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

export const GET_LOCAL_PAGE_DATA = gql`
  query LocalPage($locale: I18NLocaleCode) {
    localPage(locale: $locale) {
      data {
        attributes {
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
`;

export const GET_LOCAL_PAGE_SEO = gql`
  query Seo($locale: I18NLocaleCode) {
    localPage(locale: $locale) {
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

export const GET_SCAN_YOUR_WEBSITE_DATA = gql`
  query ScanYourWebsite($locale: I18NLocaleCode) {
    scanYourWebsite(locale: $locale) {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`;

export const GET_SCAN_YOUR_WEBSITE_SEO = gql`
  query ScanYourWebsite($locale: I18NLocaleCode) {
    scanYourWebsite(locale: $locale) {
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

export const GET_AI_POWERED_RESPOND_DATA = gql`
  query AiPoweredAutoReviewRespond($locale: I18NLocaleCode) {
    aiPoweredAutoReviewRespond(locale: $locale) {
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

export const GET_AI_POWERED_RESPOND_SEO = gql`
  query AiPoweredAutoReviewRespond($locale: I18NLocaleCode) {
    aiPoweredAutoReviewRespond(locale: $locale) {
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

export const GET_AUTOMATICALLY_POWERED_RESPOND_DATA = gql`
  query AutomaticallyRespondToPastReview($locale: I18NLocaleCode) {
    automaticallyRespondToPastReview(locale: $locale) {
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

export const GET_AUTOMATICALLY_POWERED_RESPOND_SEO = gql`
  query AutomaticallyRespondToPastReview($locale: I18NLocaleCode) {
    automaticallyRespondToPastReview(locale: $locale) {
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

export const GET_AUTOMATE_RESPOND_TASK_CREATION_DATA = gql`
  query AutomateReviewTaskCreation($locale: I18NLocaleCode) {
    automateReviewTaskCreation(locale: $locale) {
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

export const GET_AUTOMATE_RESPOND_TASK_CREATION_SEO = gql`
  query AutomateReviewTaskCreation($locale: I18NLocaleCode) {
    automateReviewTaskCreation(locale: $locale) {
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
