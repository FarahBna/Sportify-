import { db } from './firebase-config.js';
import { doc, getDoc ,getDocs,collection} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

export async function fetchAllBreakfasts() {
    console.log("Fetching all breakfast documents...");
    try {
        const querySnapshot = await getDocs(collection(db, "Breakfast"));
        let items = [];

        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        console.log("Fetched items:", items);
        return items; 
    } catch (error) {
        console.error("Error fetching collection:", error);
        return [];
    }
}


function generateItemHTML(item) {
    return `
       <div class="menu-item", id="item-grid">
                <img src="images/${item.image}" alt="Overnight Oats">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="calcook">
                <p class="calories">${item.kcal}</p>
                <button>HOW TO COOK</button>
                </div>
            </div>
    `;
  }
export async function renderItemGrid(items){
    // let items = await fetchAllBreakfasts()
    // console.log('items in render',items)
    const itemGrid = document.getElementById("menu-container");
    items.forEach(item => {
      itemGrid.innerHTML += generateItemHTML(item);
    });
}
  

// If you're calling this in a module, you might want to use .then()
// fetchBreakfasts()
//     .then(data => {
//         if (data) {
//             // Handle the retrieved data
//             console.log("Retrieved data:", data);
//         }
//     })
//     .catch(error => {
//         console.error("Error in main execution:", error);
//     });