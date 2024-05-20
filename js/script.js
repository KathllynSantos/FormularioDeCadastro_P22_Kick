function validarForm() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
  
    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
  
    return true;
  }
  