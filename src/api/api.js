import { getDatabase, get, ref, set, remove } from 'firebase/database';
import { app } from '../firebaseConfig';
import uuid from 'react-uuid'

const db = getDatabase(app);
const productsDbKey = 'products'
const adminsDbKey = 'admins';
const cartsDbKey = 'carts';

export async function getAdmins() {
  const admins = await get(ref(db, adminsDbKey));
  return admins.val();
}

export async function getProducts() {
  const products = await get(ref(db, productsDbKey));
  return Object.values(products.val());
}

export async function addAndUpdateCarts(product, selectedOption, userId, count) {
  return set(ref(db, `${cartsDbKey}/${userId}//${product.id}`), {
    ...product,
    selectedOption,
    count,
  }).then(() => true).catch(() => false);
}

export async function getCarts(userId) {
  const carts = await get(ref(db, `${cartsDbKey}/${userId}`));
  return Object.values(carts.val());
}

export async function removeFromCart(productId, userId) {
  return remove(remove(ref(db, `${cartsDbKey}/${userId}//${productId}`))).then(() => true).catch(() => false);;
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
  const id = uuid();
  return set(ref(db, `${productsDbKey + '/' + id}`), {
    ...product, imageUrl, id, price: parseInt(product.price), options: product.options.split(','),
  }).then(() => true).catch(() => false);
}