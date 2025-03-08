console.log("Script is loaded!");
        var fareMatrix = {
            "Antipolo": { "Marikina-Pasig": 13, "Santolan": 14, "Katipunan": 16, "Anonas": 18, "Cubao": 21, "Betty Go": 23, "Gilmore": 24, "J. Ruiz": 25, "V. Mapa": 26, "Pureza": 27, "Legarda": 28, "Recto": 30 },
            "Marikina-Pasig": { "Antipolo": 13, "Santolan": 13, "Katipunan": 15, "Anonas": 17, "Cubao": 20, "Betty Go": 22, "Gilmore": 23, "J. Ruiz": 24, "V. Mapa": 25, "Pureza": 26, "Legarda": 27, "Recto": 29 },
            "Santolan": { "Antipolo": 14, "Marikina-Pasig": 13, "Katipunan": 13, "Anonas": 15, "Cubao": 18, "Betty Go": 20, "Gilmore": 21, "J. Ruiz": 22, "V. Mapa": 23, "Pureza": 24, "Legarda": 25, "Recto": 27 },
            "Katipunan": { "Antipolo": 16, "Marikina-Pasig": 15, "Santolan": 13, "Anonas": 13, "Cubao": 16, "Betty Go": 18, "Gilmore": 19, "J. Ruiz": 20, "V. Mapa": 21, "Pureza": 22, "Legarda": 23, "Recto": 25 },
            "Anonas": { "Antipolo": 18, "Marikina-Pasig": 17, "Santolan": 15, "Katipunan": 13, "Cubao": 14, "Betty Go": 16, "Gilmore": 17, "J. Ruiz": 18, "V. Mapa": 19, "Pureza": 20, "Legarda": 21, "Recto": 23 },
            "Cubao": { "Antipolo": 21, "Marikina-Pasig": 20, "Santolan": 18, "Katipunan": 16, "Anonas": 14, "Betty Go": 13, "Gilmore": 14, "J. Ruiz": 15, "V. Mapa": 16, "Pureza": 17, "Legarda": 18, "Recto": 20 }
        };
        
        var stations = Object.keys(fareMatrix);
        var fromSelect = document.getElementById("from");
        var toSelect = document.getElementById("to");
        
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
