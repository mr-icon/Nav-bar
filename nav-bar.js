$(document).ready(function(){
    // insert code here
    var open = false
    $("button").click(function(){
        open = !open
        if(open){
            document.getElementById('code').style.display = 'none'
            document.getElementById('close').style.display = 'inline'
            document.getElementById('face').style.display = 'none'
            $("ul").toggle("slow")
        }
        else{
            document.getElementById('close').style.display = 'none'
            document.getElementById('face').style.display = 'inline'
            setTimeout(()=>{
                document.getElementById('code').style.display = 'inline'
            },500)
            
            $("ul").toggle("slow")
        }
        
    })
})