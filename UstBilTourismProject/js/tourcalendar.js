$(document).ready(function() {
    $.ajax({
        url: 'tourcalendar.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var container = $('#tours-container');
            var tourHTML = '<div class="tour-container">';
            
            var monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            var mersinIndex = 0;
            var antalyaIndex = 0;
            var muglaIndex = 0;
            
            data.tours.sort(function(a, b) {
                return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
            });

            data.tours.forEach(function(tour) {
                var imgSrc = "";
                if(tour.city.includes("Mersin")) {
                    imgSrc = `image/mersin${mersinIndex ? '-' + mersinIndex : ''}.jpg`;
                    mersinIndex++;
                } else if(tour.city.includes("Antalya")) {
                    imgSrc = `image/antalya${antalyaIndex ? '-' + antalyaIndex : ''}.jpg`;
                    antalyaIndex++;
                } else if(tour.city.includes("Muğla")) {
                    imgSrc = `image/mugla${muglaIndex ? '-' + muglaIndex : ''}.jpg`;
                    muglaIndex++;
                }

                tourHTML += `
                    <div class="tour-item ${tour.city.toLowerCase().replace(/ /g, '')}">
                        <img src="${imgSrc}" alt="${tour.city}">
                        <div class="tour-details">
                            <h2>${tour.city}</h2>
                            <h3>${tour.month}</h3>
                            <p>${tour.details}</p>
                        </div>
                    </div>
                `;
            });

            tourHTML += '</div>';
            
            container.append(tourHTML);
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
});