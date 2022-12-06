const express =require('express')
const app = express();
const port = 8080;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')["development"]);

app.use(express.json());
app.use(cors());
// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

app.get('/', (req, res) => res.send('Redirect to the correct path'))

app.get('/test', (req, res) => {
  knex('movies')
    .select('*').from('movies_list').then(data => {
      res.status(200).send(data)
    })
})


app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies_list')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again',
          error:err
      })
    );
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



// app.get('/movies', (req, res) => {
//   knex
//     .select('*')
//     .from('movies')
//     .then(data => res.status(200).json(data))
//     .catch(err => 
//       res.status(404).json({
//         message:
//         "Oops, something went wrong. Please try again"
//       }))
// })



// app.get('/movies', function(req, res) {
//   knex('movies')
//     .select('*')
//     .from('movies_list')
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res.status(404).json({
//         message:
//         "Oops, something went wrong! Please try again"
//       })
//     );
// });

