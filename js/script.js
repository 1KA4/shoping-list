function addItem(e){
    let inputValue = $("#addItem").val();
    if(e.which === 13 && inputValue != ""){
        $("#itemList").append('<li class="item">' + inputValue + '<span class="backspace"><i class="fas fa-backspace"></i></span></li>');
    }
}
function removeItem(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
}
function hideInput() {
    $("#addItem").fadeToggle();
}

$("#itemList").on("click", ".item", function() {
    $(this).toggleClass("done");
});

$("#hideInput").on("click", hideInput);

$("#itemList").on("click","span", removeItem);

$("#addItem").on("keypress", addItem);