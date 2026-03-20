//your JS code here. If required.
let form = document.querySelector("form");
        let input_value = document.querySelector("#username");
        let password_value = document.querySelector("#password");
        let checkbox_value = document.querySelector("#checkbox")

        form.addEventListener("submit",(e)=>{
            e.preventDefault();

            if(!checkbox_value.checked){
                alert("Logged in as <username>")
            }else{
               let value1 = input_value.value;
               let value2 = password_value.value;

               let obj = {
                v1:value1,
                v2:value2
               };
               let jsonData = JSON.stringify(obj);
               localStorage.setItem("key",jsonData)
               
            }
        })