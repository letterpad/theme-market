import { handleBuild } from "./handleBuild";

exports.handler = function (event, context, callback) {
  const { repo, themeName } = JSON.parse(event.body);

  handleBuild({ repo, themeName })
    .then((result) => {
      callback(null, {
        statusCode: 200,
        body: result,
      });
    })
    .catch((e) => {
      console.log("e :>> ", e);
    });
};
