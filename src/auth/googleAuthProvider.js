import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import '../firebaseConfig'

const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function loginByGoogle() {
  const user = await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    }).catch((err) => {
      console.error(err);
      return null;
    });
  return user;
}

export async function logoutByGoogle() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => callback(user));
}