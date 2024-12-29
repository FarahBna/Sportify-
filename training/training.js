import { db } from '../firebase-config.js';
import { doc, getDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

const FALLBACK_IMAGE = 'images/default-image.jpg'; // Replace with a default image path

// Fetch all breakfast documents
export async function fetchAllShoulderExercices() {
    console.log("Fetching all breakfast documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "shoulders"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched breakfast items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching breakfast collection:", error);
        return [];
    }
}

// Fetch all lunch documents
export async function fetchAllChestExercices() {
    console.log("Fetching all lunch documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "chest"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched lunch items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching lunch collection:", error);
        return [];
    }
}
// Fetch all dinner documents
export async function fetchAllBackExercices() {
    console.log("Fetching all dinner documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "back"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched dinner items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching dinner collection:", error);
        return [];
    }
}
// Fetch all snacks documents
export async function fetchAllArmsExercices() {
    console.log("Fetching all snacks documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "arms"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched snacks items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching snacks collection:", error);
        return [];
    }
}

// Generate item HTML structure
function generateItemHTML(item) {
    //const imageUrl = item.image ? item.image : FALLBACK_IMAGE;
    return `
       <div class="menu-item">
            <img src="${item.image}" alt="${item.name || 'Food Item'}" onerror="this.src='${FALLBACK_IMAGE}'">
            <h3>${item.name || 'Unnamed Item'}</h3>
            <p>${item.description || 'No description available.'}</p>
            <div class="calcook">
                <p class="calories">${item.duration || 'N/A'} min</p>
                <button>Watch Tutorial</button>
            </div>
       </div>
    `;
}

// Render the items in the grid container
export async function renderItemGrid(items) {
    const itemGrid = document.getElementById("menu-container");
    if (!itemGrid) {
        console.error("Menu container element not found.");
        return;
    }

    console.log("Rendering items to the grid...", items);

    // Clear previous content
    itemGrid.innerHTML = '';

    // Accumulate all HTML before rendering
    const html = items.map(item => generateItemHTML(item)).join('');
    itemGrid.innerHTML = html;
}

// Example usage: Uncomment these for testing
// fetchAllBreakfasts().then(renderItemGrid);
// fetchAllLunch().then(renderItemGrid);
