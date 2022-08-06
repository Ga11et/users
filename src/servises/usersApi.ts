import { UserPropsType } from './../models/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['allUsers'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserPropsType[], {}>({
      query: () => '/allUsers',
      providesTags: result => ['allUsers']
    }),
    addUser: builder.mutation<{}, UserPropsType>({
      query: (userData) => ({
        url: '/allUsers',
        method: 'POST',
        body: userData
      }),
      invalidatesTags: ['allUsers']
    }),
    deleteUser: builder.mutation<{}, string>({
      query: (id) => ({
        url: `/allUsers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['allUsers']
    }),
    changeUser: builder.mutation<{}, UserPropsType>({
      query: (userData) => ({
        url: `/allUsers/${userData.id}`,
        method: 'PUT',
        body: userData
      }),
      invalidatesTags: ['allUsers']
    }),
    login: builder.mutation<{ accessToken: string }, { email: string, password: string }>({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        body: loginData
      })
    })
  }),
})

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useChangeUserMutation, useLoginMutation } = usersApi