import firebaseInstance from "@/lib/firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function uploadImage(path, data) {
  const storage = getStorage(firebaseInstance);
  const imageRef = ref(storage, path);
  const uploadImage = await uploadBytes(imageRef, data).then((res)=>getDownloadURL(res.ref));
  return uploadImage
}
