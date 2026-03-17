function goAdd(){
    window.location.href = "add-restaurant.html";
}

function addRestaurant(){

    const restaurant = {
        name: document.getElementById("name").value,
        mall: document.getElementById("mall").value,
        floor: document.getElementById("floor").value,
        category: document.getElementById("category").value,
        latitude: parseFloat(document.getElementById("latitude").value),
        longitude: parseFloat(document.getElementById("longitude").value)
    };

    console.log("Sending:", restaurant);

    fetch("/restaurants",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(restaurant)
    })
    .then(res => {
        console.log("Status:", res.status);
        if(!res.ok){
            throw new Error("Error " + res.status);
        }
        return res.json();
    })
    .then(data => {
        console.log("Added:", data);
        alert("Restaurant added!");
        window.location.href = "admin.html";
    })
    .catch(err => {
        console.error(err);
        alert("Add failed!");
    });

}

window.onload = function(){
    if(document.getElementById("restaurantList")){
        loadRestaurants();
    }
}

function loadRestaurants(){

    const table = document.getElementById("restaurantList");
    if(!table) return;

    fetch("/restaurants")
    .then(res => res.json())
    .then(data => {

        table.innerHTML = "";

        data.forEach(r => {
            table.innerHTML += `
            <div class="restaurant-card">

                <div class="restaurant-name">${r.name}</div>
                <div class="restaurant-mall">${r.mall}</div>
                <div class="restaurant-floor">Floor ${r.floor}</div>
                <div class="restaurant-status">Open</div>

            </div>
            `;
        });

    })
    .catch(err => console.error(err));
}
