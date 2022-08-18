const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI BAşlatma

const ui = new UI();

//storage üretmece
const storage = new Storage();

//tüm iventleri yükleme

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // hata mesajı 
        ui.displayMassage("tüm alanaları doldur..", "danger");
    }
    else {
        //film oluşturmaca
        const newFilm = new Film(title, director, url);
        //arayüze film ekleme
        ui.addFilmToUI(newFilm);

        storage.addFilmToStorage(newFilm); // film ekleme
        ui.displayMassage("başarıyla eklendi", "success");

    }

    ui.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previusElementSibling.previusElementSibling.textContent);

        ui.displayMassage("silme falan", "success");
    }
}
function clearAllFilms() {

    if (confirm("emin misin")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

}