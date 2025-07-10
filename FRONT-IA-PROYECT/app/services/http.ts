import { createApiInstance } from "./api";

export async function apiGet<T>(url: string, useToken = false): Promise<T> {
  const instance = createApiInstance(useToken);
  const response = await instance.get(url);
  return response.data;
}

export async function apiPost<T>(
  url: string,
  data: any,
  useToken = false
): Promise<T> {
  const instance = createApiInstance(useToken);
  const response = await instance.post(url, data);
  return response.data;
}

export async function apiPut<T>(
  url: string,
  data: any,
  useToken = false
): Promise<T> {
  const instance = createApiInstance(useToken);
  const response = await instance.put(url, data);
  return response.data;
}

export async function apiDelete<T>(url: string, useToken = false): Promise<T> {
  const instance = createApiInstance(useToken);
  const response = await instance.delete(url);
  return response.data;
}
