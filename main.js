/*
Descricao: Desenvolvimento Web - Elementos Avançados de Formulário
nome_arquivo: main.js
nome_exercicio: Aula 13 - Elementos Avançados de Formulário
nome_aluno: Geovana Ramos Pereira
email_aluno: geovana.pereira8@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/
document.addEventListener("DOMContentLoaded", function() {
    const formPerfil = document.getElementById("formPerfil");
    if (formPerfil) {
        const nome = document.getElementById("nome");
        const estado = document.getElementById("estado");
        const biografia = document.getElementById("biografia");
        const termos = document.getElementById("termos");

        const erroNome = document.getElementById("erroNome");
        const erroGenero = document.getElementById("erroGenero");
        const erroEstado = document.getElementById("erroEstado");
        const erroBiografia = document.getElementById("erroBiografia");
        const erroTermos = document.getElementById("erroTermos");
        const sucessoPerfil = document.getElementById("sucessoPerfil");

        formPerfil.addEventListener("submit", function(evento) {
            evento.preventDefault();

            erroNome.textContent = "";
            erroGenero.textContent = "";
            erroEstado.textContent = "";
            erroBiografia.textContent = "";
            erroTermos.textContent = "";
            sucessoPerfil.textContent = "";

            nome.classList.remove("invalido");
            estado.classList.remove("invalido");
            biografia.classList.remove("invalido");

            let temErro = false;

            if (nome.value.trim() === "") {
                erroNome.textContent = "Informe seu nome completo.";
                nome.classList.add("invalido");
                temErro = true;
            }

            const generoSelecionado = document.querySelector('input[name="genero"]:checked');
            if (!generoSelecionado) {
                erroGenero.textContent = "Selecione uma opção de gênero.";
                temErro = true;
            }

            if (estado.value === "") {
                erroEstado.textContent = "Selecione um estado.";
                estado.classList.add("invalido");
                temErro = true;
            }

            if (biografia.value.trim() === "") {
                erroBiografia.textContent = "Escreva uma breve biografia.";
                biografia.classList.add("invalido");
                temErro = true;
            }

            if (!termos.checked) {
                erroTermos.textContent = "Você precisa aceitar os termos para prosseguir.";
                temErro = true;
            }

            if (!temErro) {
                sucessoPerfil.textContent = "Perfil salvo com sucesso!";
            }
        });

        nome.addEventListener("input", function() {
            erroNome.textContent = "";
            nome.classList.remove("invalido");
            sucessoPerfil.textContent = "";
        });

        estado.addEventListener("change", function() {
            erroEstado.textContent = "";
            estado.classList.remove("invalido");
            sucessoPerfil.textContent = "";
        });

        biografia.addEventListener("input", function() {
            erroBiografia.textContent = "";
            biografia.classList.remove("invalido");
            sucessoPerfil.textContent = "";
        });
    }

    const formAcesso = document.getElementById("formAcesso");
    if (formAcesso) {
        const emailAcesso = document.getElementById("emailAcesso");
        const senhaAcesso = document.getElementById("senhaAcesso");
        const erroEmailAcesso = document.getElementById("erroEmailAcesso");
        const erroSenhaAcesso = document.getElementById("erroSenhaAcesso");
        const sucessoAcesso = document.getElementById("sucessoAcesso");
        const btnVerSenha = document.getElementById("verSenha");

        formAcesso.addEventListener("submit", function(evento) {
            evento.preventDefault();

            erroEmailAcesso.textContent = "";
            erroSenhaAcesso.textContent = "";
            sucessoAcesso.textContent = "";
            emailAcesso.classList.remove("invalido");
            senhaAcesso.classList.remove("invalido");

            let temErro = false;

            if (emailAcesso.value.trim() === "") {
                erroEmailAcesso.textContent = "Digite seu e-mail.";
                emailAcesso.classList.add("invalido");
                temErro = true;
            } else if (!emailAcesso.value.endsWith("@gmail.com")) {
                erroEmailAcesso.textContent = "O e-mail deve terminar com @gmail.com.";
                emailAcesso.classList.add("invalido");
                temErro = true;
            }

            if (senhaAcesso.value === "") {
                erroSenhaAcesso.textContent = "Digite sua senha.";
                senhaAcesso.classList.add("invalido");
                temErro = true;
            } else if (senhaAcesso.value.length < 6) {
                erroSenhaAcesso.textContent = "A senha precisa ter pelo menos 6 caracteres.";
                senhaAcesso.classList.add("invalido");
                temErro = true;
            }

            if (!temErro) {
                sucessoAcesso.textContent = "Login aprovado! Entrando no perfil...";
                setTimeout(function() {
                    window.location.href = "perfil.html";
                }, 800);
            }
        });

        emailAcesso.addEventListener("input", function() {
            erroEmailAcesso.textContent = "";
            emailAcesso.classList.remove("invalido");
            sucessoAcesso.textContent = "";
        });

        senhaAcesso.addEventListener("input", function() {
            erroSenhaAcesso.textContent = "";
            senhaAcesso.classList.remove("invalido");
            sucessoAcesso.textContent = "";
        });

        if (btnVerSenha) {
            btnVerSenha.addEventListener("click", function() {
                if (senhaAcesso.type === "password") {
                    senhaAcesso.type = "text";
                    btnVerSenha.textContent = "Ocultar";
                } else {
                    senhaAcesso.type = "password";
                    btnVerSenha.textContent = "Mostrar";
                }
            });
        }

        const linkEsqueci = document.getElementById("linkEsqueci");
        if (linkEsqueci) {
            linkEsqueci.addEventListener("click", function(evento) {
                evento.preventDefault();
                alert("A recuperação de senha não está disponível.");
            });
        }

        const linkCadastro = document.getElementById("linkCadastro");
        if (linkCadastro) {
            linkCadastro.addEventListener("click", function(evento) {
                evento.preventDefault();
                alert("O cadastro não está disponível.");
            });
        }
    }
});