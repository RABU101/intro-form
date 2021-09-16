$('form').submit(function(event){    
    event.preventDefault()                      //detiene el envio para tomar los valores, cambia el contexto
    //console.log(this)                         //muestra el objeto (this) <- form
    var userResponses = $(this).serialize()     //la f() serialize extrae la cadena con los name y sus valores
    console.log(userResponses)
    
})
$('button').click(function(event){
    event.preventDefault()
    console.log(this)
})