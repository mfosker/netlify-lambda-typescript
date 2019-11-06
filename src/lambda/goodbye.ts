import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';

const handler = async (event: APIGatewayEvent, context:Context) => {
  return {
    statusCode: 200,
    body: "Goodbye, World"
  }
}

export {handler}