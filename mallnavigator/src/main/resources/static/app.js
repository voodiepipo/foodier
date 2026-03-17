function loadMalls() {
    fetch('/malls')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('mallList');
            list.innerHTML = '';

            if (data.length === 0) {
                list.innerHTML = '<p>No malls found</p>';
                return;
            }

            data.forEach(mall => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';

                col.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${mall.name}</h5>
                            <p class="card-text">
                                Location: ${mall.location}<br>
                                Floors: ${mall.floorCount}<br>
                                Category: ${mall.category}
                            </p>

                            <button class="btn btn-warning btn-sm me-2" onclick="editMall(${mall.id}, '${mall.name}', '${mall.location}', ${mall.floorCount}, '${mall.category}')">
                                Edit
                            </button>

                            <button class="btn btn-danger btn-sm" onclick="deleteMall(${mall.id})">
                                Delete
                            </button>
                        </div>
                    </div>
                `;

                list.appendChild(col);
            });
        });
}

function addMall() {
    fetch('/malls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            floorCount: parseInt(document.getElementById('floorCount').value),
            category: document.getElementById('category').value,
            latitude: parseFloat(document.getElementById('latitude').value),
            longitude: parseFloat(document.getElementById('longitude').value)
        })
    }).then(() => loadMalls());
}

function editMall(id, name, location, floor, category) {

    const newName = prompt("Name:", name);
    const newLocation = prompt("Location:", location);
    const newFloor = prompt("Floor count:", floor);
    const newCategory = prompt("Category:", category);

    fetch('/malls/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            location: newLocation,
            floorCount: parseInt(newFloor),
            category: newCategory
        })
    }).then(() => loadMalls());
}

function deleteMall(id) {
    fetch('/malls/' + id, { method: 'DELETE' })
        .then(() => loadMalls());
}

function searchMalls() {
    const keyword = document.getElementById('searchInput').value;

    fetch('/malls/search?keyword=' + keyword)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('mallList');
            list.innerHTML = '';

            if (data.length === 0) {
                list.innerHTML = '<li>No malls found</li>';
                return;
            }

            data.forEach(mall => {
                const li = document.createElement('li');
                li.textContent =
                    mall.id + ' - ' +
                    mall.name + ' (' + mall.location + ')';

                list.appendChild(li);
            });
        });
}
function searchRestaurant(){

    let name = document.getElementById("searchInput").value;
    
    fetch("/restaurants/search?name=" + name)
    .then(res => res.json())
    .then(data => {
    
    let list = document.getElementById("mallList");
    
    list.innerHTML="";
    
    data.forEach(r => {
    
    let card = `
    <div class="card">
    
    <h3>${r.name}</h3>
    
    <p>${r.category}</p>
    
    <p>Mall: ${r.mall.name}</p>
    
    </div>
    `;
    
    list.innerHTML += card;
    
    });
    
    });
    
    }
function searchRestaurant(){

    let name = document.getElementById("searchInput").value;
        
        fetch("/restaurants/search?name=" + name)
        .then(res => res.json())
        .then(data => {
        
    let list = document.getElementById("mallList");
        
        list.innerHTML="";
        
        data.forEach(r => {
        
    let card = `
        <div class="card">
            <h3>${r.name}</h3>
            <p>
                <b>Category:</b> 
                ${r.category}
            </p>
        
        <p><b>Mall:</b> ${r.mall.name}</p>
        
        </div>
        `;
    list.innerHTML += card;
        });
    });
}
