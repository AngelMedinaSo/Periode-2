let snacks = [];
const input = document.getElementById("snackInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const snackList = document.getElementById("snackList");
const total = document.getElementById("total");

function updateList() {
    snackList.innerHTML = "";

    for (let snack of snacks) {
        const li = document.createElement("li");
        li.innerText = snack;
        snackList.appendChild(li);
    }

    total.innerText = `Totaal aantal snacks: ${snacks.length}`;
}

addBtn.addEventListener("click", function() {
    const snack = input.value.trim();
    if (snack !== "") {
        snacks.push(snack);
        updateList();
        input.value = "";
        input.focus();
    }
});

removeBtn.addEventListener("click", function() {
    snacks.pop();
    updateList();
});