output = document.getElementById("output")


// creat functoin display

function display(number) {
    output.value += number;
}

//creat functoin clear

function Clear(){
    output.value ="";
}

// creat functoin delete 

function del() {
    output.value = output.value.slice(0,-1);
}


function equal() {
    try {
        output.value = eval(output.value)
    }
    catch (error) {
        output.value = "error";
    } 
}   


