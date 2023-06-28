import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export type projectType = {
  name: string;
  mainImg: string;
  shortDescription: string;
};

export const fetchProjects = async () => {
  try {
    console.log("fetchProjects");
    const querySnapshot = await getDocs(collection(db, "Projects"));
    const result: projectType[] = [];
    querySnapshot.forEach((doc) => {
      result.push({
        name: doc.data().name,
        mainImg: doc.data().mainImg,
        shortDescription: doc.data().shortDescription,
      });
    });
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export type adventureType = {
  name: string;
  mainImg: string[];
};

export const fetchAdventures = async () => {
  try {
    console.log("fetchAdventures");
    const querySnapshot = await getDocs(collection(db, "Travel"));
    const result: adventureType[] = [];
    querySnapshot.forEach((doc) => {
      result.push({
        name: doc.data().name,
        mainImg: doc.data().mainImg,
      });
    });
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
