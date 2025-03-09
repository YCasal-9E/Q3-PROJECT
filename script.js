console.log("Script is loaded!");
        var fareMatrix = {
            "Antipolo": { "Marikina-Pasig": 13, "Santolan": 14, "Katipunan": 15, "Anonas": 16, "Araneta Center-Cubao": 17, "Betty Go-Belmonte": 18, "Gilmore": 19, "J. Ruiz": 20, "V. Mapa": 22, "Pureza": 23, "Legarda": 25, "Recto": 28 },
            "Marikina-Pasig": { "Antipolo": 13, "Santolan": 13, "Katipunan": 14, "Anonas": 15, "Araneta Center-Cubao": 16, "Betty Go-Belmonte": 17, "Gilmore": 18, "J. Ruiz": 19, "V. Mapa": 21, "Pureza": 22, "Legarda": 24, "Recto": 27 },
            "Santolan": { "Antipolo": 14, "Marikina-Pasig": 13, "Katipunan": 13, "Anonas": 14, "Araneta Center-Cubao": 15, "Betty Go-Belmonte": 16, "Gilmore": 17, "J. Ruiz": 18, "V. Mapa": 19, "Pureza": 20, "Legarda": 22, "Recto": 25 },
            "Katipunan": { "Antipolo": 15, "Marikina-Pasig": 14, "Santolan": 13, "Anonas": 13, "Araneta Center-Cubao": 14, "Betty Go-Belmonte": 15, "Gilmore": 16, "J. Ruiz": 17, "V. Mapa": 18, "Pureza": 19, "Legarda": 21, "Recto": 24 },
            "Anonas": { "Antipolo": 16, "Marikina-Pasig": 15, "Santolan": 14, "Katipunan": 13, "Araneta Center-Cubao": 13, "Betty Go-Belmonte": 14, "Gilmore": 15, "J. Ruiz": 16, "V. Mapa": 17, "Pureza": 18, "Legarda": 20, "Recto": 23 },
            "Araneta Center-Cubao": { "Antipolo": 17, "Marikina-Pasig": 16, "Santolan": 15, "Katipunan": 14, "Anonas": 13, "Betty Go-Belmonte": 13, "Gilmore": 14, "J. Ruiz": 15, "V. Mapa": 16, "Pureza": 17, "Legarda": 18, "Recto": 20 },
            "Betty Go-Belmonte": { "Antipolo": 18, "Marikina-Pasig": 17, "Santolan": 16, "Katipunan": 15, "Anonas": 14, "Araneta Center-Cubao": 13, "Gilmore": 13, "J. Ruiz": 14, "V. Mapa": 15, "Pureza": 16, "Legarda": 17, "Recto": 19 },
            "Gilmore": { "Antipolo": 19, "Marikina-Pasig": 18, "Santolan": 17, "Katipunan": 16, "Anonas": 15, "Araneta Center-Cubao": 14, "Betty Go-Belmonte": 13, "J. Ruiz": 13, "V. Mapa": 14, "Pureza": 15, "Legarda": 16, "Recto": 18 },
            "J. Ruiz": { "Antipolo": 20, "Marikina-Pasig": 19, "Santolan": 18, "Katipunan": 17, "Anonas": 16, "Araneta Center-Cubao": 15, "Betty Go-Belmonte": 14, "Gilmore": 13, "V. Mapa": 13, "Pureza": 14, "Legarda": 15, "Recto": 17 },
            "V. Mapa": { "Antipolo": 22, "Marikina-Pasig": 21, "Santolan": 19, "Katipunan": 18, "Anonas": 17, "Araneta Center-Cubao": 16, "Betty Go-Belmonte": 15, "Gilmore": 14, "J. Ruiz": 13, "Pureza": 13, "Legarda": 14, "Recto": 16 },
            "Pureza": { "Antipolo": 23, "Marikina-Pasig": 22, "Santolan": 20, "Katipunan": 19, "Anonas": 18, "Araneta Center-Cubao": 17, "Betty Go-Belmonte": 16, "Gilmore": 15, "J. Ruiz": 14, "V. Mapa": 13, "Legarda": 13, "Recto": 15 },
            "Legarda": { "Antipolo": 25, "Marikina-Pasig": 24, "Santolan": 22, "Katipunan": 21, "Anonas": 20, "Araneta Center-Cubao": 18, "Betty Go-Belmonte": 17, "Gilmore": 16, "J. Ruiz": 15, "V. Mapa": 14, "Pureza": 13, "Recto": 14 },
            "Recto": { "Antipolo": 28, "Marikina-Pasig": 27, "Santolan": 25, "Katipunan": 24, "Anonas": 23, "Araneta Center-Cubao": 20, "Betty Go-Belmonte": 19, "Gilmore": 18, "J. Ruiz": 17, "V. Mapa": 16, "Pureza": 15, "Legarda": 14 }
         };

   function calculateFare(isDiscounted) {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (from === to) {
        alert("Please select different stations.");
        document.getElementById("fare-result").innerText = "Please select different stations.";
        return;
    }

    var fare = fareMatrix[from] && fareMatrix[from][to];

    if (fare === undefined) {
        alert("Invalid route selected.");
        document.getElementById("fare-result").innerText = "Invalid route selected.";
        return;
    }

    var discountedFare = fare - (fare * 0.20);

    if (isDiscounted) {
        alert(`Discounted Ticket Price: Php ${discountedFare.toFixed(2)}`);
        document.getElementById("fare-result").innerText = `Discounted Ticket Price: Php ${discountedFare.toFixed(2)}`;
    } else {
        alert(`Regular Ticket Price: Php ${fare}`);
        document.getElementById("fare-result").innerText = `Regular Ticket Price: Php ${fare}`;
    }
}

function submitForm() {
    let name = document.getElementById("userName").value;
    if (name.trim() === "") name = "Guest"; 
    alert("This is noted, " + name + ".");
}

function capitalizeFirstLetter(id) {
        var input = document.getElementById(id); 
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    }
