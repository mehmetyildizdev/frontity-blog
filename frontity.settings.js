const settings = {
  name: "frontity-blog",
  state: {
    frontity: {
      url: "https://blog.mehmetyildiz.dev",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "teknikmuhakkik",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org/",
          postTypes: [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "destinations",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
