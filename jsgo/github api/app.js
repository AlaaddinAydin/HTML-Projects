// element seçimi 
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const github = new Github();

const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {

    let username = nameInput.value.trim();

    if (username === "") {
        alert("lütfen geçerli bir kullanıcı adı girin");
    }

    else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    //hata mesajı
                    ui.showError("Kullanıcı bulunamadı");
                }
                else {

                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);

                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);

                    
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput(); // ınput temizleme
    e.preventDefault();
}

function clearAllSearched() {
    // tüm arananları sil
    if (confirm("emin misiniz ? ")) {
        // silme işlemleri
        Storage.clearAllSearchedUsersFromStorage(); // storage temizleme
        ui.clearAllSearchedFromUI();
    }


}

function getAllSearched() {
    // arananları storageden al uia ekle

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";

    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });

    lastUsers.innerHTML = result;
}