// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC89dGWdM9aX4Fb_XxcPGklXNSswY02VXw',
	authDomain: 'react-portfolio-63217.firebaseapp.com',
	projectId: 'react-portfolio-63217',
	storageBucket: 'react-portfolio-63217.appspot.com',
	messagingSenderId: '954508266491',
	appId: '1:954508266491:web:866f4efcc9b188bed0195e',
	measurementId: 'G-ELNVPEC80P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
