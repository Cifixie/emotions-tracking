// show object spread works, i.e. babel works
const obj = {
  foo: "bar"
};
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);

  const { identity, user } = context.clientContext;
  console.log("clientContext", identity, user);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!", ...obj })
  });
}
