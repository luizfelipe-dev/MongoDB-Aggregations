/* ### Desafio 10

#### Encontre a duração média de viagens por tipo de usuário. 

- Exiba o valor em horas com apenas duas casas decimais 
- Exiba a média de viagens ordenada de forma crescente. 

Para arredondar a média use o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "tipo" : <tipo>, "duracaoMedia" : <duracaoMedia> }
// ...
``` */

db.trips.aggregate([
  {
    $group:
    {
      _id: "$usertype",
      duracaoMedia:
      { $avg:
          {
            $subtract: ["$stopTime", "$startTime"],
          },
      },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: { $round: [{ $divide: ["$duracaoMedia", 3600000] }, 2] },
    },
  },
  {
    $sort: {
      duracaoMedia: 1,
    },
  },
]);
