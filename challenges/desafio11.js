/* ### Desafio 11

#### Determine qual o dia da semana com maior número de viagens iniciadas.

**Dica:** Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "diaDaSemana" : <dia_da_semana>, "total" : <total_de_viagens> } */

db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: "$startTime" },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      diaDaSemana: "$_id",
      total: "$total",
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
]);
