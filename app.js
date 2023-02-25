var ans="";
const textarea = document.getElementById("hidd");
document.getElementById('sub').addEventListener('click',()=>{  
    if(document.getElementById("in").value.length==0){
        alert('Please Enter the Word');
    }
    
    else{
        var word = document.getElementById("in").value;
        
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
    headers: { 'X-Api-Key': 'VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        if(result.valid==false)
        alert('You have Entered the Wrong Word');
        else{
            ans=result.definition;
            document.getElementById('hid').style.visibility ="visible";
    textarea.style.visibility ="visible";
    textarea.value = ans;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
        }
        
    },
    error: function ajaxError(jqXHR) {
        state=false;
        console.error('Error: ', jqXHR.responseText);
    }
});
    
}   

    
});