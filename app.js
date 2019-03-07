let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
const numberInput = document.querySelector('#numberInput')

numberInput.addEventListener('input', getFacts)


function getFacts(){
    
    const number = document.querySelector('#numberInput').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://swapi.co/api/people/${number}`, true)

    xhr.onload = function(){



        if(this.status === 200 & number != ""){

            const response = JSON.parse(this.responseText);


            fact.style.display = 'block';

            // homeworld link
            
                

                let output = '';

                        output+=`
                        <li>Name: ${response.name}</li> 
                        <li>Height: ${response.height} cm</li>
                        <li>Weight: ${response.mass} kg</li>
                        <li> Gender: ${response.gender}</li>
                        <li>Hair Colour: ${response.hair_color}</li>
                        <li>Eye Colour: ${response.eye_color}</li>
                        
                         `
                    
    
                

               

                document.querySelector('#listFact').innerHTML = output;

                
               
        }



    }

    xhr.send()
}