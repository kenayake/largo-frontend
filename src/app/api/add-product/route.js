import firebaseInstance from "@/lib/firebase/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export async function POST(request) {
    const formData = await request.formData()
    const image = formData.get("image")
    const data = JSON.parse(formData.get("data"))
    console.log(image)
    
    const storage = getStorage(firebaseInstance)
    const imageRef = ref(storage, `product_images/${data.name}/${data.image}`)
    const uploadImage = await uploadBytes(imageRef,image.buffer)
    console.log(uploadImage.metadata.fullPath)
    if (data.type==="ebike") {
        const additionalImages = formData.get("additionalImages")
    }

}