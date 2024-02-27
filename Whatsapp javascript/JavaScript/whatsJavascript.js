
        function whatssap()
        {
                
        var name = document.getElementById("name").value;
        var number = document.getElementById("number").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var whatssapurl ="http://wa.me/7030642433?text="
        +"Name:         "+name+"%0a"
        +"Mobile No.:   "+number+"%0a"
        +"Email Id:     "+email+"%0a"
        +"Message:      "+message;

         window.open(whatssapurl,"_blank").focus();

        }