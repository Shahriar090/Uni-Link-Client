import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  // The prepareHeaders function will send the access token with each API request to the back-end. RTK Query will include the authorization header with each API request.
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

//  Custom base query with refresh token.

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
  // Call the base query and store the result in the result variable.
  let result = await baseQuery(args, api, extraOptions);

  //If the error status is 401, the if block will execute, sending the refresh token to the back-end for a new access token.
  if (result?.error?.status === 401) {
    //Sending the refresh token
    const res = await fetch("http://localhost5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    // Extracting new data from the response, with the new token under data.
    const data = await res.json();

    //Checking if the access token is available in the data. If not, the user will be logged out because the refresh token has expired.
    if (data?.data?.accessToken) {
      // Extracting the current user from getState()
      const user = (api.getState() as RootState).auth.user;
      //Dispatching the current user with the new access token
      api.dispatch(setUser({ user, token: data?.data?.accessToken }));
      //  Retry the baseQuery here and store the result.
      //This ensures that when the user initially fails to get a successful API response due to unauthorized access, they will get a successful response after the refresh.
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
