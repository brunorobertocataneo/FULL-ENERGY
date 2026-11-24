# Full Energy

Site de apresentação da Full Energy, uma marca de bebidas energéticas. O projeto reúne a história da marca, um catálogo de sabores e uma página para montar uma solicitação de pedido.

## Funcionalidades

- Carrossel de produtos com navegação por setas e transições entre os sabores.
- Catálogo com imagens, descrições e especificações dos produtos.
- Formulário com seleção de sabor pelo catálogo, revisão das quantidades e compartilhamento pelo WhatsApp.
- Seção de contato e layout adaptado para telas menores.

O site é estático. O formulário prepara a mensagem no navegador e abre o WhatsApp para que o cliente escolha o contato da Full Energy e confirme o envio.

## Tecnologias

- **HTML** para a estrutura das páginas.
- **CSS** para o layout, a responsividade e as animações.
- **JavaScript** para o carrossel e a preparação da mensagem de pedido.

## Como executar localmente

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/brunorobertocataneo/FULL-ENERGY.git
cd FULL-ENERGY
```

Abra o arquivo [index.html](index.html) no navegador. O projeto não exige instalação de dependências.

Se preferir usar um servidor local, execute o comando abaixo na pasta do projeto com o Python 3 instalado:

```bash
python -m http.server 8000
```

Em sistemas que usam o comando `python3`, execute `python3 -m http.server 8000`. Acesse [localhost:8000/index.html](http://localhost:8000/index.html) para abrir a página inicial ou [localhost:8000/pedido.html](http://localhost:8000/pedido.html) para ir direto ao formulário.

## Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| [index.html](index.html) | Página inicial com carrossel, história da marca, catálogo e contato |
| [pedido.html](pedido.html) | Página com o formulário de pedido |
| [css/main.css](css/main.css) | Estilos compartilhados entre as páginas |
| [js/script.js](js/script.js) | Navegação do carrossel |
| [js/order.js](js/order.js) | Seleção do sabor, resumo e compartilhamento pelo WhatsApp |
| [assets/img/](assets/img/) | Logo, imagens dos produtos e fundos |

## Autor

[Bruno Roberto Cataneo](https://github.com/brunorobertocataneo)
