$(document).ready(
    function(){
        $("ul.gnb").mouseenter(
            function(){
                $("ul.gnb .bg").remove();
                $("ul.gnb").prepend("<div class='bg'></div>");
                $("ul.gnb ul.sub").show();
            }
        );    
        $("#title").mouseenter(
            function(){
                $("ul.gnb .bg").remove();
                $("ul.gnb ul.sub").hide();
            }
        );    
    }
);