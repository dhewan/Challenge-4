var AllCar = null

const getAllCar = () => {
    fetch('/getcars')
        .then((response) => response.json())
        .then((hasil) => {
            const body = document.getElementById('card-car')
            for (let i = 0; i < hasil.length; i++) {
                const Car = document.createElement('div')
                Car.className = "car"
                Car.innerHTML = `
                <img src="${hasil[i].image}" >
                <p>${hasil[i].manufacture} ${hasil[i].model}</p>
                <h5>Rp. ${hasil[i].rentPerDay} / hari</h5>
                <h6 class="desc">${hasil[i].description} </h6>
                <div>
                <h6><i class="fa fa-user-o" aria-hidden="true"></i>${hasil[i].capacity} orang</h6>
                <h6><i class="fa fa-cogs" aria-hidden="true"></i>${hasil[i].transmission}</h6>
                <h6><i class="fa fa-calendar-o" aria-hidden="true"></i>${hasil[i].year}</h6>
                <button>Pilih Mobil</button>
                </div>
                `
                body.appendChild(Car)
                
            }
            AllCar = hasil
        })
}

getAllCar()

const filterCar = (avail,date,time,person) => {
    
    let newCar = AllCar.filter(car => 
        car.available.toString().includes(avail) &&
        new Date(car.availableAt) < new Date(date)&&
        new Date(car.availableAt).getHours() > new Date(time) ||
        car.capacity.toString().includes(person)
    );
    const body = document.getElementById('card-car')
    body.innerHTML = ''
            newCar.forEach((element) => {
                const Car = document.createElement('div')
                Car.className = "car"
                Car.innerHTML = `
                <img src="${element.image}" >
                <p>${element.manufacture} ${element.model}</p>
                <h5>Rp. ${element.rentPerDay} / hari</h5>
                <h6 class="desc">${element.description} </h6>
                <div>
                <h6><i class="fa fa-user-o" aria-hidden="true"></i>${element.capacity} orang</h6>
                <h6><i class="fa fa-cogs" aria-hidden="true"></i>${element.transmission}</h6>
                <h6><i class="fa fa-calendar-o" aria-hidden="true"></i>${element.year}</h6>
                <button>Pilih Mobil</button>
                </div>
                `
                body.appendChild(Car)
            });
}