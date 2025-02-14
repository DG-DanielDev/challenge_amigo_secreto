# challenge_amigo_secreto

## Sobre

Desafio proposto pela Alura em conjunto com a Oracle durante o Oracle Next Education (ONE) para aprimorar e avaliar a lógica de programação desenvolvida durante o estudo de JavaScript.
O desafio permite escolher 1 amigo secreto dentre os amigos já adicionados na lista.

## Instalação

### Clonando o Repositório

1. Abra o terminal (Git Bash, PowerShell, etc.).
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o comando:
    ```bash
    git clone https://github.com/DG-DanielDev/challenge_amigo_secreto.git
    ```
4. Entre no diretório do projeto:
    ```bash
    cd challenge_amigo_secreto
    ```

### Baixando o ZIP

1. Acesse o repositório no GitHub.
2. Clique no botão "Code" e selecione "Download ZIP".
3. Extraia o conteúdo do ZIP em um diretório de sua escolha.

### Utilizando no Navegador

1. Abra o arquivo [index.html](/index.html) diretamente no seu navegador.

### Utilizando no VSCode com Live Server

1. Abra o VSCode.
2. Instale a extensão "Live Server" se ainda não tiver.
3. Abra o diretório do projeto no VSCode.
4. Clique com o botão direito no arquivo [index.html](/index.html) e selecione "Open with Live Server".

## Como Utilizar?

1. Preencha o campo "Digite um nome" com o nome de pelo menos 1 amigo.
2. Clique no botão "Adicionar" para adicionar o nome do amigo na lista.
3. Repita o processo até que o número de amigos seja satisfatório.
4. Depois de já ter pelo menos 1 amigo na lista, clique no botão "Sortear amigo" para que o amigo secreto seja escolhido.

## Possíveis Erros:

- A lógica do site não permite a adição de números sem letras ou símbolos, impedindo que adicione valores como 1 ou 90000, mas permite adicionar 90 mil, por exemplo.
- A lógica do site não permite que você adicione à lista um valor nulo, ou seja, inexistente. Você precisa adicionar nomes válidos para que seja adicionado à lista.

## Alterações Referentes ao Projeto Original:

- A funcionalidade de desabilitar o botão "Adicionar" foi criada por mim e, por esse motivo, a função, assim como suas respectivas alterações (css, js, html), estão apenas comentadas;
- A funcionalidade de 'hover' também foi criada por mim, mas decidi deixá-la no código por não alterar a lógica diretamente;
- Pensando em possíveis exceções que podem ser lançadas, a função adicionarAmigo() valida mais uma vez se a função validarEntrada() validou a entrada corretamente;
- A função sortearAmigos, além de sortear um dos amigos na lista, também o remove para evitar que ele seja sorteado novamente.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.