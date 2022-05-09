import { ref } from "vue";
import { collection, query, onSnapshot, where } from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";
import { async } from "@firebase/util";

const { user } = useAuth();

// const productRef = collection(db, "products");
// const Price = query(productRef, where("Price", "==", true));

const products = ref([]);

const useProducts = () => {
  const productQuery = query(collection(db, "products"));

  const unsubscribe = onSnapshot(productQuery, (querySnapshot) => {
    products.value = [];
    querySnapshot.forEach((doc) => {
      products.value.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  });

  return {
    products,
    unsubscribe,
  };
};
export default useProducts;
