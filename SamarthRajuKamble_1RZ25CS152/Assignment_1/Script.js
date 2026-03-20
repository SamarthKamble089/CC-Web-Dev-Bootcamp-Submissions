const Tasks = document.getElementById('Inputt');
const Sub = document.getElementById('SubBut');
const DisArea = document.getElementById('Diss');

Sub.addEventListener('click', (event) => {

    event.preventDefault()

    const TaskText = Tasks.value;

    if(TaskText.trim() !== "")
    {
        const Para = document.createElement('li');
        const checkboxx = document.createElement('input');
        Para.textContent = TaskText;
        checkboxx.type = 'checkbox';

        //Para.appendChild(Para);
        Para.append(" ");
        Para.appendChild(checkboxx);

        DisArea.appendChild(Para);

        //Tasks.value = "";
    }
    else{
        alert("Please enter some text!");
    }
});
