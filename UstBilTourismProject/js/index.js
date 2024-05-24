$(document).ready(function() {
    $("#policies").click(function() {
        $("#dialog").dialog();
    });

    $("#dialog").on("dialogclose", function(event, ui) {
        $(this).dialog("destroy").html("");
    });
});
