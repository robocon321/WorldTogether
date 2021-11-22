/* eslint-disable default-case */
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

export const setAuthToken = (token) => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

// firebase

export const uploadFirebase = (file) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCC1o6ESeXcLdgGlAm6-2moYnoiVQJqGBY",
    authDomain: "worldtogether-d72ac.firebaseapp.com",
    projectId: "worldtogether-d72ac",
    storageBucket: "worldtogether-d72ac.appspot.com",
    messagingSenderId: "85839421507",
    appId: "1:85839421507:web:069b992970b2b2bcd2f4f6",
    measurementId: "G-ETTQ4HYHGN"
  };
  
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const storageRef = ref(storage, `images/${new Date().getTime()}${file.name}`);

  return uploadBytesResumable(storageRef, file);
}

export const loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body')[0].appendChild(tag);
};

