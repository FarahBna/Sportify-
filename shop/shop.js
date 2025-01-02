import { db } from '../firebase-config.js';
import { doc, getDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

const FALLBACK_IMAGE = 'images/default-image.jpg'; // Replace with a default image path

// Fetch all protein documents
export async function fetchAllprotein() {
    console.log("Fetching all protein documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "protein"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched protein items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching protein collection:", error);
        return [];
    }
}


export async function fetchAllequipments() {
    console.log("Fetching all protein documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "equipments"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched equiments items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching protein collection:", error);
        return [];
    }
}


export async function fetchAllAccesories() {
    console.log("Fetching all protein documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "accesories"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched equiments items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching protein collection:", error);
        return [];
    }
}
export async function fetchAllWear() {
    console.log("Fetching all protein documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "wear"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched equiments items:", items);
        return items;
    } catch (error) {
        console.error("Error fetching protein collection:", error);
        return [];
    }
}




// Generate item HTML structure
function generateItemHTML(item) {
    const imageUrl = item.image ? `${item.image}` : FALLBACK_IMAGE;
    return `
    <div class="shop-item">
    <img src="${imageUrl}" alt="${item.name || 'Shop Item'}" onerror="this.src='${FALLBACK_IMAGE}'">
    <h3>${item.name || 'Unnamed Item'}</h3>
    <p>${item.description || 'No description available.'}</p>
    <div class="prix">${item.prix || 'N/A'} DT</div>
    <a href="#" class="add-to-cart">buy now</a>
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