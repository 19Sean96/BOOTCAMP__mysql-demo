$(function() {
    $(".link").click(function(e) {
        e.preventDefault();
        const id = $(this).data('link');
        const item = $(`#item${id}`).data('name');
        console.log(item);
        const burgerObj = {
            burger_name: item,
            devoured: true
        }

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: burgerObj,
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".btn").click(function(e) {
        e.preventDefault();
        const burger = $("#burgerInput").val();
        const burgerObj = {
            burger_name: burger,
            devoured: false
        };

        // Send the PUT request.
        if (burger !== '') {
            $.ajax("/api/burgers", {
                type: "POST",
                data: burgerObj
            }).then(() => {
                // Reload the page to get the updated list
                location.reload();
            });
        } else {
            alert("You need to place an order!");
        }
    });

    // $('#burgerInput').keyup(function (e) {
    //     e.preventDefault();
    //     console.log($('#burgerInput').val());
    //     if ($('#burgerInput').val() !== '') {
    //         $('label[for="burger"]').css('transform', 'translateY(-6.25rem)');
    //     }
    // });
});
