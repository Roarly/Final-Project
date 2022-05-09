import { ref } from "vue";
import { collection, query, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";

const { user } = useAuth();

const products = ref([]);

const useProducts = () => {
  const productCollection = collection(db, "products");

  const productQuery = query(productCollection);

  onSnapshot(productQuery, (querySnapshot) => {
    products.value = [];
    querySnapshot.forEach((doc) => {
      products.value.push({
        id: doc.id,
        Price: doc.data().Price,
        ProductName: doc.data().ProductName,
        Stock: doc.data().Stock,
      });
    });
  });

  return {
    products,
  };
};
export default useProducts;
