for (var i = 0 ; i < $("button").length; i++){
    $("button")[i].addEventListener("click", function(){
        this.style.color = "purple";
        this.style.backgroundColor = "gray";
        this.style.fontFamily = "cursive";
    })
}
$("button").on("click", function(){
    $("h1").fadeIn();
});
$("input").keydown(function(event){
    console.log(event.key);
    if (event.key === "f"){
        $("h1").slideUp(2000, function(){
            $("h1").css("backgroundColor","gray");
            $("h1").text("Boo!");
        $("h1").slideDown(1000);
        $("h1").animate({fontSize:"50px"},700);
        $("h1").animate({width:"200px"},300)
        $("h1").animate({height:"200px"},300)
        $("h1").animate({width:"100px"},300)
        $("h1").animate({height:"100px"},300)

        $("h1").fadeOut(1000);
        });
        
    }
});