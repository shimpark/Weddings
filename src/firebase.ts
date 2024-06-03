import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyCmdQcD3Y1ECMmVQEPCcteztEuSDQQXdkM",
    authDomain: "renfirebasecloudmessaging.firebaseapp.com",
    databaseURL: "https://renfirebasecloudmessaging-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "renfirebasecloudmessaging",
    storageBucket: "renfirebasecloudmessaging.appspot.com",
    messagingSenderId: "670844048166",
    appId: "1:670844048166:web:05fc9303c43eb1dd6867e7",
    measurementId: "G-V7YD9KKCC0"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
