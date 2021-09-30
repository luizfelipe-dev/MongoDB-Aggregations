/* ### Desafio 13

#### Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

- Arredonde o resultado para cima.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "duracaoMediaEmMinutos" : <duracao_media_em_minutos> }
``` */

db.trips.aggregate([
  {
    $match: {
      startTime: {
        $lt: ISODate("2016-03-11"),
        $gte: ISODate("2016-03-10"),
      },
    },
  },
  {
    $group: {
      _id: 0,
      duracaoMediaEmMinutos: {
        $avg:
        {
          $divide: [{ $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 1000] }, 60],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      duracaoMediaEmMinutos: {
        $ceil: "$duracaoMediaEmMinutos",
      },
    },
  },
]);
