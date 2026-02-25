   function minmax(){
    const now = new Date();
    const datum =
      now.getFullYear() + "-" +
      (now.getMonth()+1).toString().padStart(2, '0') + "-" +
      (now.getDate()+1).toString().padStart(2, '0');

    document.querySelector("#start").min = datum
    document.querySelector("#start").value = datum
   }
   
   (function(){
      emailjs.init({
        publicKey: "E9UPzdR2DRkQTvxNk",
      });
   })();
   
   function send(){
        let nev = document.querySelector("#name").value
        let mail = document.querySelector("#email").value
        let datum = document.querySelector("#start").value
        let ido = document.querySelector("#ipont").value

        if(!nev || !mail || !datum || !ido){
          alert("Kérem töltse ki az összes mezőt!")
          return
        }
        emailjs.send("service_dnl65g8","template_xsrxvj9",{
            name: nev,
            email: mail,
            date: datum,
            time: ido,
        })
        .then(function(response) {
            alert("Sikeres küldés!");
        }, function(error) {
            alert("Hiba történt!");
            console.log(error);
        });
        
   }