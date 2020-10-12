let Weapons = {
    weapon0: {
        name: "Mains nues",
        damage: 10,
        css_class: "Hands"
    },
    weapon1: {
        name: "Couteau",
        damage: 12,
        css_class: "Knife"
    },
    weapon2: {
        name: "Épée",
        damage: 14,
        css_class: "Sword"
    },
    weapon3: {
        name: "Pistolet",
        damage: 16,
        css_class: "Gun"
    },
    weapon4: {
        name: "Fatal Bazooka",
        damage: 18,
        css_class: "Bazooka"
    }
}

GenerateWeapons = function() {
    let numberOfWeapon = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < numberOfWeapon; i++) {
        let dataY = Math.round(Math.random() * (newBoard.boardSize - 1) + 1);
        let dataX = Math.round(Math.random() * (newBoard.boardSize - 1) + 1);
        let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
        if (targetSquare.getAttribute("available") == "true") {
            targetSquare.setAttribute("weapon", Weapons["weapon" + (i + 1)]["name"]);
            targetSquare.classList.add(Weapons["weapon" + (i + 1)]["css_class"])
        } else {
            i--
        }
    }
}