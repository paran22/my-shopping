import { getDatabase, get, ref, set } from 'firebase/database';
import { app } from '../firebaseConfig';
import uuid from 'react-uuid'

const db = getDatabase(app);

export async function getAdminList() {
  const key = 'admins';
  const adminList = await get(ref(db, key));
  return adminList.val();
}

export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

  const url = process.env.REACT_APP_CLOUDINARY_URL;
  const imageUrl = await fetch(url, {
    method: "POST",
    body: data,
  }).then((res) => res.json()).then((data) => data.url);
  return imageUrl;
}

export async function saveProduct(product, imageUrl) {
  const key = 'products'
  const id = uuid();
  set(ref(db, `${key + '/' + id}`), {
    ...product, imageUrl, id, price: parseInt(product.price), options: product.options.split(','),
  });
}