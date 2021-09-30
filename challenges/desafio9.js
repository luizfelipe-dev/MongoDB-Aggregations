/* ### Desafio 9

#### A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

- Guarde essa informação, você precisará dela mais tarde.

- Não considere documentos com valores vazios (`""`) e em que o campo não existe!

- Para este desafio utilize o operador [`$toInt`](https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/index.html) para converter de string para valor inteiro.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }
```
 */

db.trips.aggregate([
  {
    $match: {
      birthYear:
      {
        $ne: "",
        $exists: true,
      },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
    },
  },
]);
