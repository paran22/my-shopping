import { getDatabase, get, ref } from 'firebase/database';
import { app } from '../firebaseConfig';

const db = getDatabase(app);

export async function getAdminList() {
  const key = 'admins';
  const adminList = await get(ref(db, key));
  return adminList.val();
}