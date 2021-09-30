/* ### Desafio 5

Temos outra noite de filme aqui na Trybe e, desta vez, nós perguntamos à equipe quais são suas pessoas preferidas como atores e/ou atrizes. Aqui está o resultado:

* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo `cast` no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

**Dica:** coloque a lista de atores e atrizes favoritos em uma variável e explore operadores como `$size` e [`$setIntersection`](https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "title" : <nome_do_filme> } */