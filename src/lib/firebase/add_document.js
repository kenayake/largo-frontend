import { doc, getFirestore, setDoc } from "firebase/firestore";
import { uploadImage } from "./upload_image";
import firebaseInstance from "./firebase";

async function addDocument(path, docName, data) {
  const db = getFirestore(firebaseInstance);

  const docRef = doc(db, path, docName);

  await setDoc(docRef, data);
}

export async function addEbike(data) {
  const image = data.image[0];

  const imageUrl = await uploadImage(
    `product_images/${data.name}/${image.name}`,
    image
  );

  data = { ...data, image: imageUrl };

  for (let index = 0; index < data.additionalImages.length; index++) {
    const additionalImage = data.additionalImages[index].value[0];

    const additionalImageUrl = await uploadImage(
      `product_images/${data.name}/additionalImages/${additionalImage.name}`,
      additionalImage
    );

    data.additionalImages[index] = additionalImageUrl;
  }

  data = {
    ...data,
    specification: data.specification.map((val) => val.value),
    colorOptions: data.colorOptions.map((val) => val.value),
  };

  await addDocument("products", data.name, data);
}

export async function addNews(data) {
  const image = data.image[0];

  const imageUrl = await uploadImage(
    `news_images/${data.title}/${image.name}`,
    image
  );

  data = { ...data, image: imageUrl, uploadDate: new Date };

  await addDocument("news", data.title, data)
}
