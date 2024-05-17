$(document).ready(function() {
    $("#nav_list a").on("click", function(event) {
        event.preventDefault(); 
        const jsonFileName = $(this).attr("title") + ".json";

        $.ajax({
            url: "json_files/" + jsonFileName,
            dataType: "json",
            success: function(data) {
                $("main").empty();
                const content = `
                    <h1>${data.speakers[0].title}</h1>
                    <img src="/${data.speakers[0].image}" alt="${data.speakers[0].speaker}">
                    <h2>${data.speakers[0].month}<br>${data.speakers[0].speaker}</h2>
                    <p>${data.speakers[0].text}</p>
                `;

                $("main").html(content);
            },
            error: function() {
                $("main").html("<p>Error: Could not load data.</p>");
            }
        });
    });
});
