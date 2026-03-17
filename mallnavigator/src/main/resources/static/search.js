function searchRestaurant(){

    const keyword = document.getElementById("searchInput").value;
    
    fetch(`/restaurants/search?name=${keyword}`)
    .then(res => res.json())
    .then(data => {
    
    const container = document.getElementById("results");
    container.innerHTML = "";
    
    if(data.length === 0){
    
    container.innerHTML =
    `<div class="no-result">
    No restaurant match
    </div>`;
    
    return;
    }
    
    data.forEach(r => {
    
    container.innerHTML += `
    <div class="search-card" onclick="goRestaurant(${r.id})">
    
    <h3>${r.name}</h3>
    
    <p>${r.mall.name}</p>
    
    <p>Floor ${r.floor}</p>
    
    </div>
    `;
    
    });
    
    });
    
    }
    
    function goRestaurant(id){
    
    window.location.href = `restaurant.html?id=${id}`;
    
    }