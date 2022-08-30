import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { query, orderBy, collection, onSnapshot } from "firebase/firestore";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = async () => {
      const q = query(collection(db, collect), orderBy("createdAt", "desc"));
      onSnapshot(q, (querySnapshot) => {
        let documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        // console.log(documents);
        setDocs(documents);
      });
    };
    // when we do not want to listen to the images when we unmount. This is a cleanup function.
    unsub();
  }, [collect]);
  return { docs };
};

export default useFirestore;
