# Beatpad

Bateria virtual de 8 pads, tocada com o mouse ou com o teclado. Projeto de aula da Fase 2 (JavaScript puro).

## Deploy

https://beatpad-renanferreira-dev.vercel.app

## Como rodar

Abra o `index.html` no navegador. Não precisa instalar nada.

## Etapas

Cada etapa é um commit. Para ver a lista:

```bash
git log --oneline
```

| Etapa | O que ensina |
|---|---|
| `00-ponto-de-partida` | O projeto vazio: README, .gitignore, LICENSE e index.html |
| `01-pads-em-html-e-css` | A página do design em HTML e CSS, ainda sem JavaScript |
| `02-conectando-o-script` | O script.js ligado à página com defer e os pads selecionados com querySelectorAll |
| `03-evento-de-clique` | addEventListener em cada pad com forEach, e o data-sound dizendo qual pad foi clicado |
| `04-tocando-sons` | A pasta sounds/ e o new Audio() tocando o som de cada pad no clique |
| `05-som-do-comeco` | currentTime = 0 para o som recomeçar a cada toque |

## O que aprendi

_(preencher ao fim do projeto)_

## Créditos

Código sob licença MIT.

Sons da pasta `sounds/`: sintetizados em código para este projeto (ondas senoidais e ruído), sem samples de terceiros. Livres para uso, como o resto do projeto.
