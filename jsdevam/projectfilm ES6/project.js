const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//tüm iventleri yükleme
eventListener();

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMassage("tüm alanaları doldur..", "danger");
    }
    else {
        //film oluşturmaca
        const newFilm = new Film(title, director, url);
        //arayüze film ekleme
        UI.addFilmToUI(newFilm);

        Storage.addFilmToStorage(newFilm); // film ekleme
        UI.displayMassage("başarıyla eklendi", "success");

    }

    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previusElementSibling.previusElementSibling.textContent);

        UI.displayMassage("silme falan", "success");
    }
}
function clearAllFilms() {

    if (confirm("emin misin")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }

}