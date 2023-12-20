export const buttonList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Technology",
  "Motivation",
  "Web",
  "App",
  "Velentine",
];

export const GOOGLE_API_KEY = "AIzaSyB0molmQVN9rX_vLKHG74FVDEC3MMKSmHQ";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_DETAIL_API =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet,statistics&id=";

export const nestedComments = [
  {
    name: "Jaymin Gajera",
    text: "Hello jee",
    replies: [
      {
        name: "Jaymin Gajera",
        text: "Hello jee",
        replies: [
          {
            name: "Jaymin Gajera",
            text: "Hello jee",
            replies: [
              {
                name: "Jaymin Gajera",
                text: "Hello jee",
                replies: [],
              },
            ],
          },
          {
            name: "Jaymin Gajera",
            text: "Hello jee",
            replies: [],
          },
        ],
      },
      {
        name: "Jaymin Gajera",
        text: "Hello jee",
        replies: [],
      },
    ],
  },
  {
    name: "Jaymin Gajera",
    text: "Hello jee",
    replies: [
      {
        name: "Jaymin Gajera",
        text: "Hello jee",
        replies: [],
      },
      {
        name: "Jaymin Gajera",
        text: "Hello jee",
        replies: [],
      },
    ],
  },
  {
    name: "Jaymin Gajera",
    text: "Hello jee",
    replies: [],
  },
  {
    name: "Jaymin Gajera",
    text: "Hello jee",
    replies: [],
  },
];
