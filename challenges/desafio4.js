/* ### Desafio 4

Nossa coleção de filmes tem muitos documentos diferentes, alguns com títulos "mais complexos" do que outros. Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes da coleção e processar isso na aplicação, mas o `Aggregation Framework` nos permite fazer isso diretamente no lado do banco de dados.

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

Por exemplo, `"Cinderela"` e `"3-25"` devem entrar nessa contagem, mas `"Cast Away"` não.

**Dica:** utilize os operadores `$split`, `$size` e `$sort` para te auxiliar.
[Documentação do $split](https://docs.mongodb.com/manual/reference/operator/aggregation/split/)

Sua query deve retornar `8068` documentos. */

db.movies.aggregate([
  {
    $project: {
      _id: 0,
      title_split: {
        $split: ["$title", " "],
      },
    },
  },

  {
    $match: {
      title_split: {
        $size: 1,
      },
    },
  },

  {
    $sort: {
      title_split: 1,
    },
  },
]);
