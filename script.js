console.log("Script is loaded!");
        var fareMatrix = {
            "Antipolo": { "Marikina-Pasig": 13, "Santolan": 14, "Katipunan": 15, "Anonas": 16, "Cubao": 17, "Betty Go": 18, "Gilmore": 19, "J. Ruiz": 20, "V. Mapa": 22, "Pureza": 23, "Legarda": 25, "Recto": 28 },
            "Marikina-Pasig": { "Antipolo": 13, "Santolan": 13, "Katipunan": 14, "Anonas": 15, "Cubao": 16, "Betty Go": 17, "Gilmore": 18, "J. Ruiz": 19, "V. Mapa": 21, "Pureza": 22, "Legarda": 24, "Recto": 27 },
            "Santolan": { "Antipolo": 14, "Marikina-Pasig": 13, "Katipunan": 13, "Anonas": 14, "Cubao": 15, "Betty Go": 16, "Gilmore": 17, "J. Ruiz": 18, "V. Mapa": 19, "Pureza": 20, "Legarda": 22, "Recto": 25 },
            "Katipunan": { "Antipolo": 15, "Marikina-Pasig": 14, "Santolan": 13, "Anonas": 13, "Cubao": 14, "Betty Go": 15, "Gilmore": 16, "J. Ruiz": 17, "V. Mapa": 18, "Pureza": 19, "Legarda": 21, "Recto": 24 },
            "Anonas": { "Antipolo": 16, "Marikina-Pasig": 15, "Santolan": 14, "Katipunan": 13, "Cubao": 13, "Betty Go": 14, "Gilmore": 15, "J. Ruiz": 16, "V. Mapa": 17, "Pureza": 18, "Legarda": 20, "Recto": 23 },
            "Cubao": { "Antipolo": 17, "Marikina-Pasig": 16, "Santolan": 15, "Katipunan": 14, "Anonas": 13, "Betty Go": 13, "Gilmore": 14, "J. Ruiz": 15, "V. Mapa": 16, "Pureza": 17, "Legarda": 18, "Recto": 20 }
         };
        
        var stations = Object.keys(fareMatrix);
        var fromSelect = document.getElementById("from");
        var toSelect = document.getElementById("to");

        fromSelect.innerHTML = "";
        toSelect.innerHTML = "";
        
        var stations = Object.keys(fareMatrix);
        stations.forEach(station => {
            var option1 = new Option(station, station);
            var option2 = new Option(station, station);
            fromSelect.add(option1);
            toSelect.add(option2);
        });

        
        function calculateFare(isDiscounted) {
            var from = fromSelect.value;
            var to = toSelect.value;
            if (from === to) {
                alert("Please select different stations.");
                document.getElementById("fare-result").innerText = "Please select different stations.";
                return;
            }
            
            var fare = fareMatrix[from]?.[to] || fareMatrix[to]?.[from] || "N/A";
            
            if (fare === "N/A") {
                alert("Fare not available for this route.");
                document.getElementById("fare-result").innerText = "Fare not available for this route.";
                return;
            }
            
            if (isDiscounted) {
                fare = fare - (fare * 0.20);
            }
            
            alert(`Ticket Price: Php ${fare}`);
            document.getElementById("fare-result").innerText = `Ticket Price: Php ${fare}`;
        }
