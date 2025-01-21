/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * in.orbit
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
export type GetUserExperienceAndLevel200Profile = {
  experience: number;
  level: number;
  experienceToNextLevel: number;
};

export type GetUserExperienceAndLevel200 = {
  profile: GetUserExperienceAndLevel200Profile;
};

export type GetProfile200Profile = {
  id: string;
  /** @nullable */
  name: string | null;
  /** @nullable */
  email: string | null;
  avatarUrl: string;
};

export type GetProfile200 = {
  profile: GetProfile200Profile;
};

export type AuthenticateFromGithub201 = {
  token: string;
};

export type AuthenticateFromGithubBody = {
  code: string;
};

export type GetWeekSummary200SummaryGoalsPerDayItem = {
  id: string;
  title: string;
  completedAt: string;
};

export type GetWeekSummary200SummaryGoalsPerDay = {[key: string]: GetWeekSummary200SummaryGoalsPerDayItem[]};

export type GetWeekSummary200Summary = {
  completed: number;
  total: number;
  goalsPerDay: GetWeekSummary200SummaryGoalsPerDay;
};

export type GetWeekSummary200 = {
  summary: GetWeekSummary200Summary;
};

export type GetWeekSummaryParams = {
weekStartsAt?: string;
};

export type GetPendingGoals200PendingGoalsItem = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
};

export type GetPendingGoals200 = {
  pendingGoals: GetPendingGoals200PendingGoalsItem[];
};

/**
 * @nullable
 */
export type CreateCompletion201 = typeof CreateCompletion201[keyof typeof CreateCompletion201] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateCompletion201 = {
  null: 'null',
} as const;

export type CreateCompletionBody = {
  goalId: string;
};

/**
 * @nullable
 */
export type CreateGoal201 = typeof CreateGoal201[keyof typeof CreateGoal201] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateGoal201 = {
  null: 'null',
} as const;

export type CreateGoalBody = {
  title: string;
  /**
   * @minimum 1
   * @maximum 7
   */
  desiredWeeklyFrequency: number;
};





/**
 * Create a goal
 */
export type createGoalResponse = {
  data: CreateGoal201;
  status: number;
  headers: Headers;
}

export const getCreateGoalUrl = () => {


  return `http://localhost:3000/goals`
}

export const createGoal = async (createGoalBody: CreateGoalBody, options?: RequestInit): Promise<createGoalResponse> => {
  
  const res = await fetch(getCreateGoalUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createGoalBody,)
  }
)

  const data:CreateGoal201 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getCreateGoalMutationOptions = <TData = Awaited<ReturnType<typeof createGoal>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: CreateGoalBody}, TContext>, fetch?: RequestInit}
) => {
const mutationKey = ['createGoal'];
const {mutation: mutationOptions, fetch: fetchOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, fetch: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createGoal>>, {data: CreateGoalBody}> = (props) => {
          const {data} = props ?? {};

          return  createGoal(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{data: CreateGoalBody}, TContext>}

    export type CreateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof createGoal>>>
    export type CreateGoalMutationBody = CreateGoalBody
    export type CreateGoalMutationError = unknown

    export const useCreateGoal = <TData = Awaited<ReturnType<typeof createGoal>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: CreateGoalBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        TData,
        TError,
        {data: CreateGoalBody},
        TContext
      > => {

      const mutationOptions = getCreateGoalMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * Complete a goal
 */
export type createCompletionResponse = {
  data: CreateCompletion201;
  status: number;
  headers: Headers;
}

export const getCreateCompletionUrl = () => {


  return `http://localhost:3000/completions`
}

export const createCompletion = async (createCompletionBody: CreateCompletionBody, options?: RequestInit): Promise<createCompletionResponse> => {
  
  const res = await fetch(getCreateCompletionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCompletionBody,)
  }
)

  const data:CreateCompletion201 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getCreateCompletionMutationOptions = <TData = Awaited<ReturnType<typeof createCompletion>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: CreateCompletionBody}, TContext>, fetch?: RequestInit}
) => {
const mutationKey = ['createCompletion'];
const {mutation: mutationOptions, fetch: fetchOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, fetch: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createCompletion>>, {data: CreateCompletionBody}> = (props) => {
          const {data} = props ?? {};

          return  createCompletion(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{data: CreateCompletionBody}, TContext>}

    export type CreateCompletionMutationResult = NonNullable<Awaited<ReturnType<typeof createCompletion>>>
    export type CreateCompletionMutationBody = CreateCompletionBody
    export type CreateCompletionMutationError = unknown

    export const useCreateCompletion = <TData = Awaited<ReturnType<typeof createCompletion>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: CreateCompletionBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        TData,
        TError,
        {data: CreateCompletionBody},
        TContext
      > => {

      const mutationOptions = getCreateCompletionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * Get pending goals for the current week
 */
export type getPendingGoalsResponse = {
  data: GetPendingGoals200;
  status: number;
  headers: Headers;
}

export const getGetPendingGoalsUrl = () => {


  return `http://localhost:3000/pending-goals`
}

export const getPendingGoals = async ( options?: RequestInit): Promise<getPendingGoalsResponse> => {
  
  const res = await fetch(getGetPendingGoalsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const data:GetPendingGoals200 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetPendingGoalsQueryKey = () => {
    return [`http://localhost:3000/pending-goals`] as const;
    }

    
export const getGetPendingGoalsQueryOptions = <TData = Awaited<ReturnType<typeof getPendingGoals>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPendingGoalsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPendingGoals>>> = ({ signal }) => getPendingGoals({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetPendingGoalsQueryResult = NonNullable<Awaited<ReturnType<typeof getPendingGoals>>>
export type GetPendingGoalsQueryError = unknown


export function useGetPendingGoals<TData = Awaited<ReturnType<typeof getPendingGoals>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPendingGoals>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetPendingGoals<TData = Awaited<ReturnType<typeof getPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPendingGoals>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetPendingGoals<TData = Awaited<ReturnType<typeof getPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetPendingGoals<TData = Awaited<ReturnType<typeof getPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPendingGoals>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetPendingGoalsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Get week summary
 */
export type getWeekSummaryResponse = {
  data: GetWeekSummary200;
  status: number;
  headers: Headers;
}

export const getGetWeekSummaryUrl = (params?: GetWeekSummaryParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `http://localhost:3000/summary?${normalizedParams.toString()}` : `http://localhost:3000/summary`
}

export const getWeekSummary = async (params?: GetWeekSummaryParams, options?: RequestInit): Promise<getWeekSummaryResponse> => {
  
  const res = await fetch(getGetWeekSummaryUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const data:GetWeekSummary200 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetWeekSummaryQueryKey = (params?: GetWeekSummaryParams,) => {
    return [`http://localhost:3000/summary`, ...(params ? [params]: [])] as const;
    }

    
export const getGetWeekSummaryQueryOptions = <TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetWeekSummaryQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getWeekSummary>>> = ({ signal }) => getWeekSummary(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetWeekSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getWeekSummary>>>
export type GetWeekSummaryQueryError = unknown


export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params: undefined |  GetWeekSummaryParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekSummary>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekSummary>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetWeekSummaryQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Authenticate user from Github
 */
export type authenticateFromGithubResponse = {
  data: AuthenticateFromGithub201;
  status: number;
  headers: Headers;
}

export const getAuthenticateFromGithubUrl = () => {


  return `http://localhost:3000/auth/github`
}

export const authenticateFromGithub = async (authenticateFromGithubBody: AuthenticateFromGithubBody, options?: RequestInit): Promise<authenticateFromGithubResponse> => {
  
  const res = await fetch(getAuthenticateFromGithubUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      authenticateFromGithubBody,)
  }
)

  const data:AuthenticateFromGithub201 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getAuthenticateFromGithubMutationOptions = <TData = Awaited<ReturnType<typeof authenticateFromGithub>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: AuthenticateFromGithubBody}, TContext>, fetch?: RequestInit}
) => {
const mutationKey = ['authenticateFromGithub'];
const {mutation: mutationOptions, fetch: fetchOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, fetch: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authenticateFromGithub>>, {data: AuthenticateFromGithubBody}> = (props) => {
          const {data} = props ?? {};

          return  authenticateFromGithub(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{data: AuthenticateFromGithubBody}, TContext>}

    export type AuthenticateFromGithubMutationResult = NonNullable<Awaited<ReturnType<typeof authenticateFromGithub>>>
    export type AuthenticateFromGithubMutationBody = AuthenticateFromGithubBody
    export type AuthenticateFromGithubMutationError = unknown

    export const useAuthenticateFromGithub = <TData = Awaited<ReturnType<typeof authenticateFromGithub>>, TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: AuthenticateFromGithubBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        TData,
        TError,
        {data: AuthenticateFromGithubBody},
        TContext
      > => {

      const mutationOptions = getAuthenticateFromGithubMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * get authenticated user profile
 */
export type getProfileResponse = {
  data: GetProfile200;
  status: number;
  headers: Headers;
}

export const getGetProfileUrl = () => {


  return `http://localhost:3000/profile`
}

export const getProfile = async ( options?: RequestInit): Promise<getProfileResponse> => {
  
  const res = await fetch(getGetProfileUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const data:GetProfile200 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetProfileQueryKey = () => {
    return [`http://localhost:3000/profile`] as const;
    }

    
export const getGetProfileQueryOptions = <TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProfileQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) => getProfile({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileQueryError = unknown


export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfile>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfile>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetProfileQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * get user experience and level
 */
export type getUserExperienceAndLevelResponse = {
  data: GetUserExperienceAndLevel200;
  status: number;
  headers: Headers;
}

export const getGetUserExperienceAndLevelUrl = () => {


  return `http://localhost:3000/profile/gamification`
}

export const getUserExperienceAndLevel = async ( options?: RequestInit): Promise<getUserExperienceAndLevelResponse> => {
  
  const res = await fetch(getGetUserExperienceAndLevelUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const data:GetUserExperienceAndLevel200 = ([204, 205, 304].includes(res.status) || !res.body) ? {} : await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetUserExperienceAndLevelQueryKey = () => {
    return [`http://localhost:3000/profile/gamification`] as const;
    }

    
export const getGetUserExperienceAndLevelQueryOptions = <TData = Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserExperienceAndLevelQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserExperienceAndLevel>>> = ({ signal }) => getUserExperienceAndLevel({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetUserExperienceAndLevelQueryResult = NonNullable<Awaited<ReturnType<typeof getUserExperienceAndLevel>>>
export type GetUserExperienceAndLevelQueryError = unknown


export function useGetUserExperienceAndLevel<TData = Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserExperienceAndLevel>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetUserExperienceAndLevel<TData = Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserExperienceAndLevel>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetUserExperienceAndLevel<TData = Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetUserExperienceAndLevel<TData = Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserExperienceAndLevel>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetUserExperienceAndLevelQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




