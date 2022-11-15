type GqlRequestParamsType = {
  query: string;
  variables?: Record<string, any>;
  headers?: Record<string, any>;
  resultField?: string;
  swallowError?: boolean;
}
