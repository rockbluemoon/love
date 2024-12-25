function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_hc2eja1";
    const templateID = "template_2i1uehg";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }