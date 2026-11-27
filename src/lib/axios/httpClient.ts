import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!baseUrl) {
  throw new Error("baseUrl is not defined in env");
}

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};

interface ApiRequestOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const httpGet = async (endPoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await axiosInstance().get(endPoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`get to ${endPoint} failed`, error);
    throw error;
  }
};

const httpPost = async (
  endPoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().post(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`post to ${endPoint} failed`, error);
    throw error;
  }
};

const httpPut = async (
  endPoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().put(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`put to ${endPoint} failed`, error);
    throw error;
  }
};

const httpPatch = async (
  endPoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().patch(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`patch to ${endPoint} failed`, error);
    throw error;
  }
};

const httpDelete = async (endPoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await axiosInstance().delete(endPoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`delete to ${endPoint} failed`, error);
    throw error;
  }
};

export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  delete: httpDelete,
};
