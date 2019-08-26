$(function() {
    $(".link").click(function(e) {
        e.preventDefault();
        alert("clicked");
    });

    $(".btn").click(function(e) {
        e.preventDefault();
        const burger = $("#burgerInput").val();
        const burgerObj = {
            burger_name: burger,
            devoured: false
        };

        // Send the PUT request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerObj
        }).then(function() {
            console.log("Data", burgerObj);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // $('#burgerInput').keyup(function (e) {
    //     e.preventDefault();
    //     console.log($('#burgerInput').val());
    //     if ($('#burgerInput').val() !== '') {
    //         $('label[for="burger"]').css('transform', 'translateY(-6.25rem)');
    //     }
    // });
});
