$(document).ready(function(){
    // insert code here
    $("button").click(function(){
        if($("button").text() == "-"){
            $("button").text("X");
        }else{
            $("button").text("-");
        }
        $("ul").toggle("slow")
    })
})