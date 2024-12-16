
let data=[{FullName:"Ashwitha",Email:"ashwi26@gmail.com.",Password:"Ashwi$26",Phone:9787654321},
                  {FullName:"YAshas",Email:"yashas6@gmail.com.",Password:"Yashas&26",Phone:8876795437},
                  {FullName:"Chethan",Email:"chetan26@gmail.com.",Password:"cheta!26",Phone:7756665522},
                  {FullName:"Dhana",Email:"dhanu26@gmail.com.",Password:"Dhana#26",Phone:6347880321},
         ];

        //  let data=[{FullName:"Ashwitha",Email:"ashwi26@gmail.com.",city:"Ashwi$26",Phone:9787654321},
        //           {FullName:"Yashas",Email:"yashas6@gmail.com.",city:"Yashas&26",Phone:8876795437},
        //           {FullName:"Chethan",Email:"chetan26@gmail.com.",city:"cheta!26",Phone:7756665522},
        //           {FullName:"Dhana",Email:"dhanu26@gmail.com.",city:"Dhana#26",Phone:6347880321},
        //  ];

        let info = "";
         for(let i = 0; i <= data.length-1; i++)
         {
            info += `<tr>
                         <td>${data[i].FullName}</td>
                         <td>${data[i].Email}</td>
                         <td>${data[i].Password}</td>
                         <td>${data[i].Phone}</td>
                     </tr>`
         };

         document.querySelector("tbody").innerHTML=info;
         ///////////////////////////////////////////////////////////////////////////////////////
        
        
        const register_page = document.getElementById("form_page");

        const database = document.getElementById("storage");
        
        const table_fields = document.getElementById("table_data");
        const table_btn = document.getElementById("visible_table");
        // console.log(table_btn);

      
        
         
        register_page.addEventListener("submit", function(event)
        {
            event.preventDefault();


            const name = document.getElementById("name-value").value
            const email = document.getElementById("email-value").value 
            // const city = document.getElementById("city-value").value 
            const password = document.getElementById("pwd-value").value 
            const phone = document.getElementById("phone-value").value 

            const row= document.createElement('tr');

            const nameCell = document.createElement('td')
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td')
            emailCell.textContent = email
            row.appendChild(emailCell);

            // const cityCell = document.createElement('td')
            // emailCell.textContent = city
            // row.appendChild(cityCell);


            // const passwordCell = document.createElement('td')
            // passwordCell.textContent = password
            // row.appendChild(passwordCell);

            const passwordCell = document.createElement('td')
            passwordCell.textContent = password
            row.appendChild(passwordCell);


            const phoneCell = document.createElement('td')
            phoneCell.textContent = phone
            row.appendChild(phoneCell);

            table_fields.appendChild(row);
            register_page.reset();


        });

        table_btn.addEventListener("click",function(){

            if (storage.style.display === "block")
            {
                storage.style.display = "none";
                table_btn.textContent = "show Table"
              } 
              else {
                storage.style.display = "block";
                table_btn.textContent = "hide Table"
              }
            });

    


    



