const name = "mustafa oha naber";

const deartment = "bilişim";

const salary = 4000;


//const a = "isim: " + name + "\n" + "department: " + deartment;


//const a = `isim: ${name} \ndepartman: ${deartment}\n maaş: ${salary}`;


function a() {
    return "merhaba";
}

const html = `
            <ul>
                <li>${name}<li>
                <li>${deartment}<li>
                <li>${salary}<li>
                <li>${10 / 4}<li>
                <li>${a()}<li>
            <ul>
`
document.body.innerHTML = html;

console.log(a);

