import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { IUser, IUserResponse } from 'src/models/IUser'
import { baseQueryWithReauth } from '../../axios';
import { IOrder } from 'src/models/IOrder';
// maxRetries: 5 is the default, and can be omitted. Shown for documentation purposes.
// const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/' }), {
//   maxRetries: 5,
// })
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Order', 'Post'],
  endpoints: (build) => ({
    getOrders: build.query<any,any>({
        query() {
          return {
            url: 'orders/list',
            credentials: 'include',
            // params:{
                // _limit:10
            // }
          };
        },
        providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
          : ['Post'],
    }),

    createOrder: build.mutation<any, any>({
        query(data) {
          return {
            url: 'orders/create',
            method: 'POST',
            body: data,
            credentials: 'include',
          };
        },
        invalidatesTags: ['Post'],
      }),
    // getPost: build.query<PostsResponse, string>({
    //   query: (id) => ({ url: `post/${id}` }),
    //   extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint
    // }),
  }),
})

export const { useGetOrdersQuery,useCreateOrderMutation } = ordersApi