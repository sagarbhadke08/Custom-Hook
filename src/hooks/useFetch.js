import { useEffect ,useState} from "react";

export function useFetch(fetchFn){
    //? fetchFn is a function and it is getting here as a arguent and in await fetechFn we are calling it
    const[isFetching, setIsFetching] =useState();
    const [error, setError] =useState();
    const[fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setUserPlaces(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);


      return{
        isFetching,
        fetchedData,
        error
      }
}