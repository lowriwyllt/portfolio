import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export type projectType = {
  name: string;
  mainImg: string;
  shortDescription: string;
  enw: string;
  disgrifiadByr: string;
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
        enw: doc.data().enw,
        disgrifiadByr: doc.data().disgrifiadByr,
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
  enw: string;
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
        enw: doc.data().enw,
      });
    });
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export type experienceType = {
  role: string;
  rol: string;
  company: string;
  cwmni: string;
  shortDescription: string;
  disgrifiadByr: string;
  startDate: string;
  endDate: string;
  companyImg: string;
};

export const fetchExperience = async () => {
  try {
    console.log("fetchExperience");
    const querySnapshot = await getDocs(collection(db, "Experience"));
    const result: experienceType[] = [];
    querySnapshot.forEach((doc) => {
      result.push({
        role: doc.data().role,
        rol: doc.data().rol,
        company: doc.data().company,
        cwmni: doc.data().cwmni,
        shortDescription: doc.data().shortDescription,
        disgrifiadByr: doc.data().disgrifiadByr,
        startDate: doc.data().start_date,
        endDate: doc.data().end_date,
        companyImg: doc.data().companyImg,
      });
    });
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
