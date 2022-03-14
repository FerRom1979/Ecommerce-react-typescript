import { useQuery } from "react-query";

const fetchProducts = () => {
  return fetch("http://localhost:4000/paddles").then((res) => res.json());
};

export const useProduct = (onSuccess: any, onError: any) => {
  return useQuery("paddles", fetchProducts, {
    /* cacheTime: 5000, */
    /* staleTime: 30000, */
    /* refetchOnMount: true, */
    /* refetchOnWindowFocus: true, */
    /* refetchInterval: 5000, */
    /* refetchIntervalInBackground: true, */
    /* enabled: false, */
    onSuccess: onSuccess,
    onError: onError,
    // select: (data) => {
    //  const superHeroName = data.data.map((hero) => hero.name)
    // return superHeroName
    //  },
  });
};
