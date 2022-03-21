import { useQuery } from "react-query";

const fetchProducts = async (nameProduct = "sane") => {
  let url = "http://localhost:4000/paddles";

  if (nameProduct) {
    url = `http://localhost:4000/paddles?mark=${nameProduct}`;
  }

  return await fetch(url).then((res) => res.json());
};

export const useProduct = (onSuccess: any, onError: any, nameProduct: string) => {
  return useQuery("paddles", () => fetchProducts(nameProduct), {
    /* cacheTime: 5000, */
    /* staleTime: 30000, */
    /* refetchOnMount: "always", */
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
