fetch("https://covid.mathdro.id/api/daily/3-13-2020")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let hasil = "";
        data.forEach((confirm) => {
            hasil += `
            <div class="col-md mt-3">
                <div class="text-white card mb-4 bg-dark " style="width: 20rem;">
                    <div class="row no-gutters">
                        <div class="col-md-6 text-center"
                            <p class="card-text mb-1 mt-1">Negara</p>
                            <h5 class="text-center card-title mb-1 mt-1">${confirm.countryRegion}</h5>
                        <hr>
                            <p class="card-text mb-1 mt-1">Latitude</p>
                            <h5 class="text-center card-title mb-1 mt-1">${confirm.latitude}</h5>
                        <hr>
                            <p class="card-text mb-1 mt-1">Longitude</p>
                            <h5 class="text-center card-title mb-1 mt-1">${confirm.longitude}</h5>
                        </div>
                        
                        <div class="text-dark col-md-6 text-center bg-light"
                            <div class="card-body">
                                <p class="card-text mb-1 mt-1">Terkonfirmasi</p>
                                <h5 class="text-center card-title mb-1 mt-1">${confirm.confirmed}</h5>
                            <hr>
                                <p class="card-text mb-1 mt-1">Meninggal</p>
                                <h5 class="text-center card-title mb-1 mt-1">${confirm.deaths}</h5>
                            <hr>
                                <p class="card-text mb-1 mt-1">Sembuh</p>
                                <h5 class="text-center card-title mb-1 mt-1">${confirm.recovered}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        document.getElementById("hasil").innerHTML = hasil;
    });