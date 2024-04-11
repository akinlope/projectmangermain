import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase"
import { db } from "./firebase"
import { collection, doc, getDoc, getDocs, onSnapshot, setDoc, query, where, updateDoc, deleteDoc, serverTimestamp, orderBy } from "firebase/firestore";



export const loginFunction = async (data) => {
    const { email, password } = data;
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("email", email);
        localStorage.setItem("uid", user.user.uid);
        return user
    } catch (err) {
        return 400
    }
}
export const registerationFunction = async (data) => {
    let error;

    const { email, password } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) return error = "Email address is not valid";
    if (password.trim() < 8) return error = "Password cannot be lesser than 8-characters";

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        localStorage.setItem("email", email);
        localStorage.setItem("uid", user.uid);
        return user;
    } catch (error) {
        throw error;
    }
}

export const addProjectToFirebase = async (data) => {
    try {
        const docRef = doc(collection(db, "Projects"))
        const newData = { id: docRef.id, ...data, userID: localStorage.getItem("uid"), time: serverTimestamp() };
        await setDoc(docRef, newData)
        return docRef.id;
    } catch (error) {

    }
}

export const viewProjectTitle = async () => {
    const docArr = [];
    const colRef = collection(db, "Projects");
    const q = query(colRef, orderBy("time", "desc"))
    const docsSnapshot = await getDocs(q)
    docsSnapshot.forEach(doc => {
        docArr.push(doc.data())
    });
    return docArr;
}

export const getSingleProject = async (id) => {
    try {
        const docRef = doc(db, "Projects", id)
        const docSnap = await getDoc(docRef);
        return docSnap.data()
    } catch (error) {
    }
}

export const addTaskToProject = async (data) => {
    try {
        const docRef = doc(collection(db, "Tasks"))
        const newData = { id: docRef.id, ...data, done: false };
        await setDoc(docRef, newData)
        return docRef.id;
    } catch (error) {
    }
};

export const updateTaskStatus = async ({ id, done }) => {
    try {
        const docRef = doc(db, "Tasks", id);
        await updateDoc(docRef, { done });
    } catch (error) {
    }
};


export const getExactTast = async (id) => {
    const taskArr = []
    const colRef = collection(db, "Tasks");
    const q = query(colRef, where("projectId", "==", id));
    const docSnap = await getDocs(q);
    docSnap.forEach(doc => {
        taskArr.push(doc.data())
    });
    return taskArr;
}

export const updateTask = async (data) => {
    const { id, done } = data;
    try {
        const docRef = doc(db, "Tasks", id);
        await updateDoc(docRef, { done });
    } catch (error) {
    }
};

export const listenForTaskChanges = (projectId, callback) => {
    const q = query(collection(db, "Tasks"), where("projectId", "==", projectId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const taskArr = [];
        snapshot.forEach((doc) => {
            taskArr.push({ id: doc.id, ...doc.data() });
        });
        callback(taskArr);
    });

    return unsubscribe;
};

export const deleteTask = async (id) => {
    const docRef = doc(db, "Tasks", id);
    await deleteDoc(docRef).then(() => {
    }).catch((err) => {
    })
}
export const deleteProject = async (id) => {
    const docRef = doc(db, "Projects", id);
    await deleteDoc(docRef).then(() => {
    }).catch((err) => {
    })
}

export const handleSignOut = async () => {
    try {
        await signOut(auth);
        localStorage.clear("email");
        localStorage.clear("uid")
    } catch (error) {
    }
}