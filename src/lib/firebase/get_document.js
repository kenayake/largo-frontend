import firebaseInstance from "@/lib/firebase/firebase";
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  orderBy,
  limit,
} from "firebase/firestore";

export async function getProducts({ productId = null } = {}) {
  const firestoreInstance = getFirestore(firebaseInstance);

  const productsCollection = collection(firestoreInstance, "products");

  if (productId) {
    const productReference = doc(productsCollection, productId);

    const productSnapshot = await getDoc(productReference);

    return [productSnapshot.data(), productSnapshot.exists()];
  } else {
    const productsSnapshot = await getDocs(productsCollection);

    return [
      productsSnapshot.docs.map((product) => product.data()),
      !productsSnapshot.empty,
    ];
  }
}

export async function getNews({ newsId = null } = {}) {
  const currentTimestamp = Timestamp.fromDate(new Date());
  console.log(currentTimestamp);

  const firestoreInstance = getFirestore(firebaseInstance);

  const newsCollection = collection(firestoreInstance, "news").orderBy(
    "uploadDate"
  );

  if (newsId) {
    const newsReference = doc(newsCollection, newsId);

    const newsSnapshot = await getDoc(newsReference);

    return [newsSnapshot.data(), newsSnapshot.exists()];
  } else {
    const allNewsSnapshot = await getDocs(newsCollection);

    // console.log(allNewsSnapshot.docs);

    return [
      allNewsSnapshot.docs.map((news) => news.data()),
      !allNewsSnapshot.empty,
    ];
  }
}
