const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

exports.handler = function(event, context, callback) {
  const posts = [];

  base("posts")
    .select({
      maxRecords: 10,
      view: "Grid view",
      sort: [{ field: "publishedAt", direction: "desc" }]
    })
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach(record => {
          posts.push(record);
        });

        fetchNextPage();
      },
      err => {
        if (err) {
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(err)
          });
        } else {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(posts)
          });
        }
      }
    );
};
