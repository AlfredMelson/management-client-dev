/*
 * Purpose:
 * createReactQueryHooks helper from trpc to will enable the creation of hooks that are specific to the api/server
 * import exposed AppRouter from the api/server, that has type definitions
 */
import { createReactQueryHooks } from '@trpc/react'
import { AppRouter } from '@user/api'

export const trpc = createReactQueryHooks<AppRouter>()
