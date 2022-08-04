import { UserPropsType } from './../models/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/users' }),
  endpoints: (builder) => ({
    getUsersByName: builder.query<UserPropsType[], string>({
      query: (name) => `?fullName_like=${name}`,
    }),
    getUsers: builder.query<UserPropsType[], {}>({
      query: () => ''
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersByNameQuery, useGetUsersQuery } = usersApi