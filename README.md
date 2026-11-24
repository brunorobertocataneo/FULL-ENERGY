# Full Energy

Site de apresentação da Full Energy, uma marca de bebidas energéticas. O projeto reúne a história da marca, um catálogo de sabores e uma página para montar uma solicitação de pedido.

## Funcionalidades

- Carrossel de produtos com navegação por setas e transições entre os sabores.
- Catálogo com imagens, descrições e especificações dos produtos.
- Formulário de pedido com dados de contato, quantidades por sabor e observações.
- Seção de contato e layout adaptado para telas menores.

O projeto está na etapa de **front-end**. O formulário de pedido e o campo de pesquisa ainda não estão integrados a um serviço. O formulário permite preencher os dados na página, mas o envio de pedidos não está implementado.

## Tecnologias

- **HTML** para a estrutura das páginas.
- **CSS** para o layout, a responsividade e as animações.
- **JavaScript** para o carrossel e o indicador de carregamento na navegação.

## Como executar localmente

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/brunorobertocataneo/FULL-ENERGY.git
cd FULL-ENERGY
```

Abra o arquivo [INDEX.HTML](INDEX.HTML) no navegador. O projeto não exige instalação de dependências.

Se preferir usar um servidor local, execute o comando abaixo na pasta do projeto com o Python 3 instalado:

```bash
python -m http.server 8000
```

Em sistemas que usam o comando `python3`, execute `python3 -m http.server 8000`. Acesse [localhost:8000/INDEX.HTML](http://localhost:8000/INDEX.HTML) para abrir a página inicial ou [localhost:8000/pedido.html](http://localhost:8000/pedido.html) para ir direto ao formulário. Use `INDEX.HTML` em maiúsculas, como está no repositório.

## Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| [INDEX.HTML](INDEX.HTML) | Página inicial com carrossel, história da marca, catálogo e contato |
| [pedido.html](pedido.html) | Página com o formulário de pedido |
| [css/main.css](css/main.css) | Estilos compartilhados entre as páginas |
| [js/script.js](js/script.js) | Navegação do carrossel |
| [js/loading.js](js/loading.js) | Indicador de carregamento na navegação |
| [assets/img/](assets/img/) | Logo, imagens dos produtos e fundos |

## Autor

[Bruno Roberto Cataneo](https://github.com/brunorobertocataneo)
