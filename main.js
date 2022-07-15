// const formElement=document.querySelector(".add-student-form")
// const studentListElement=document.querySelector(".students-list")

// formElement.addEventListener("submit", event=>{
//     event.preventDefault()
//     const nameInputElement=document.querySelector("#nameInput")
//     const lastNameInputElement=document.querySelector("#lastNameInput")
//     const selectElement=document.querySelector("#interest")
//     console.log(nameInputElement.value,lastNameInputElement.value,selectElement.value);

//     const newLiElement=document.createElement("li")
//     const cardElement=document.createElement("div")
//     const cardBodyElement=document.createElement("div")
//     const wrapperDivElement=document.createElement("div")
//     const subWrapperElement=document.createElement("div")
//     const namePElement=document.createElement("p")
//     const interestPElement=document.createElement("p")
//     const deleteButtonElement=document.createElement("button")
    
//     newLiElement.classList.add('mb-3')
//     cardElement.classList.add('card')
//     cardBodyElement.classList.add('card-body')
//     wrapperDivElement.classList.add('d-flex')
//     wrapperDivElement.classList.add('justify-content-between')
//     namePElement.classList.add('h2')
//     interestPElement.classList.add('h4')
//     deleteButtonElement.classList.add('btn')
//     deleteButtonElement.classList.add('btn-danger')

//     deleteButtonElement.textContent='Delete'
//     deleteButtonElement.addEventListener('click',event=>{
//         newLiElement.remove()
//     })

//     namePElement.textContent=nameInputElement.value+""+lastNameInputElement.value
//     interestPElement.textContent=selectElement.value

//     subWrapperElement.appendChild(namePElement)
//     subWrapperElement.appendChild(interestPElement)

//     wrapperDivElement.appendChild(subWrapperElement)
//     wrapperDivElement.appendChild(deleteButtonElement )

//     cardBodyElement.appendChild(wrapperDivElement)
//     cardElement.appendChild(cardBodyElement)
//     newLiElement.appendChild(cardElement)

//     studentListElement.prepend(newLiElement)

//     formElement.reset()
// }) 


    document.querySelector('.button').onclick = function(){
        if(document.querySelector('.form input').value.length == 0){
            alert("Please write a letter")
        }
    
        else{
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('.form input').value}
                    </span>
                    <button class="delete">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `;
    
            const current_tasks = document.querySelectorAll(".delete");
            for(const i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        }
    }

      const  FormElement = document.querySelector(".form")

        FormElement.addEventListener('submit', event =>{
           console.log(event);
           event.preventDefault()
           FormElement.reset()
        })
    