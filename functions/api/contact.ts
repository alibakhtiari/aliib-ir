import { handleContact, type Env } from '../../src/worker';

export interface PagesContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  return handleContact(context.request, context.env);
};
