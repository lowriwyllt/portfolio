import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchProjects = async () => {
  console.log("fetchProjects");
  const querySnapshot = await getDocs(collection(db, "Projects"));
  const result: any[] = [];
  querySnapshot.forEach((doc) => {
    result.push({
      name: doc.data().name,
      mainImg: doc.data().mainImg,
      shortDescription: doc.data().shortDescription,
    });
  });
  return result;
};

export const fetchAdventures = async () => {
  console.log("fetchAdventures");
  const querySnapshot = await getDocs(collection(db, "Travel"));
  const result: any[] = [];
  querySnapshot.forEach((doc) => {
    result.push({
      name: doc.data().name,
      mainImg: doc.data().mainImg,
    });
  });
  return result;
};
