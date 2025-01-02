import { db } from '../firebase-config.js';
import { doc, getDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

const FALLBACK_IMAGE = 'images/default-image.jpg'; 


export async function fetchAllBreakfasts() {
    console.log("Fetching all breakfast documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "Breakfast"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched breakfast items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching breakfast collection:", error);
        return [];
    }
}


export async function fetchAllLunch() {
    console.log("Fetching all lunch documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "Lunch"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched lunch items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching lunch collection:", error);
        return [];
    }
}

export async function fetchAllDinner() {
    console.log("Fetching all dinner documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "Dinner"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched dinner items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching dinner collection:", error);
        return [];
    }
}

export async function fetchAllsnacks() {
    console.log("Fetching all snacks documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "snacks"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched snacks items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching snacks collection:", error);
        return [];
    }
}


function generateItemHTML(item) {
  return `
       <div class="menu-item">
            <img src="${item.image}" alt="${item.name || 'Food Item'}" onerror="this.src='${FALLBACK_IMAGE}'">
            <h3>${item.name || 'Unnamed Item'}</h3>
            <p>${item.description || 'No description available.'}</p>
            <div class="calcook">
                <p class="calories">${item.kcal || 'N/A'} kcal</p>
                <button onclick="window.location.href='${item.video}';">HOW TO COOK</button>
            </div>
       </div>
    `;
}


export async function renderItemGrid(items) {
    const itemGrid = document.getElementById("menu-container");
    if (!itemGrid) {
        console.error("Menu container element not found.");
        return;
    }

    console.log("Rendering items to the grid...", items);

 
    itemGrid.innerHTML = '';

   
    const html = items.map(item => generateItemHTML(item)).join('');
    itemGrid.innerHTML = html;
}



