import useSWR from 'swr'


export const UseFetchApi = (endoint) => {

 const fetcher = (endoint) => fetch(endoint).then(res => res.json())

 const {data,error} = useSWR(endoint,fetcher)

 return(
  {
   data : data,
   error : error,
   isLoading : !data && !error
  }
 )

}