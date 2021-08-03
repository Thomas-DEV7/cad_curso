window.onload = function() {
  const cadastrar = document.querySelector("#cadastrar");
  const cadastrar = document.querySelector("#nome");
  const nome = document.querySelector("#curso");

  cadastrar.addEventListener("#click", function() {
  let formdata = new  FormData();
  formdata.append('nome', `${nome.value}`);
  formdata.append('curso', `${curso.value}`);

  fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
  {
    body: "formdata",
    method: "post",
    mode: "cors",
    cache: "default"

  }).then(()=>{
    alert("Registrado com sucesso")
    limpar();
  });
  });
}
function limpar(){
  nome.value = "";
  curso.value = "";
}