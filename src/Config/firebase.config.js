import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBRdGpI3UcljY2M2jxTzXsP45Tmjy9XguI",
	authDomain: "educationa-event-management.firebaseapp.com",
	projectId: "educationa-event-management",
	storageBucket: "educationa-event-management.appspot.com",
	messagingSenderId: "839188075392",
	appId: "1:839188075392:web:94cd3283e5007062cd2765",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
