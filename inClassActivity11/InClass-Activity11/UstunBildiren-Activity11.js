$(document).ready(function() {
    // Attach a click event handler to each link in the sidebar
    $("#nav_list a").click(function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the title attribute of the clicked link to build the JSON filename
        const jsonFile = $(this).attr("title") + ".json";

        // Use AJAX to fetch the corresponding JSON file
        $.getJSON("json_files/" + jsonFile)
            .done(function(data) {
                // Clear the existing content in the main element
                $("main").empty();
                
                // Build the new content using the data from the JSON file
                const newContent = `
                    <h1>${data.speakers[0].title}</h1>
                    <img src="/${data.speakers[0].image}" alt="${data.speakers[0].speaker}">
                    <h2>${data.speakers[0].month}<br>${data.speakers[0].speaker}</h2>
                    <p>${data.speakers[0].text}</p>
                `;

                // Append the new content to the main element
                $("main").html(newContent);
            })
            .fail(function() {
                $("main").html("<p>Error: Could not load data.</p>");
            });
    });
}); // end ready
