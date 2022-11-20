const { sequelize } = require('../models')
const models = require('../models')

const MovieController = {}

MovieController.getMovies = async (req, res) => {
    try{
        const resp = await models.Movie.findAll()
        res.send(resp)
    }catch(error){
        res.send(error)
    }
}

// Top 10 rated movies
MovieController.getTopRatedMovies = async(req, res) => {
    try{
        const resp = await models.Movie.findAll({
            order: [['rating', 'DESC']]
        })
        res.send(resp)
    }catch(error){
        res.send(error)
    }
    
}

// Search by ID
MovieController.getMovie = (req, res) => {
    try {
        const id = req.params.id;
        models.Movie.findByPk(id)
            .then(resp => res.send(resp))
    } catch (error) {
        res.send(error)
    }
}

// Search by title
MovieController.getMovieByTitle = async(req, res) => {
    try {
        const title = req.params.title;
        models.Movie.findAll({
            where: {
                title: title
            }
        })
        .then(resp => {res.send(resp)})
    } catch (error) {
        
    }
}

// Search by genre
MovieController.getMovieByGenre = async (req, res) => {
    try {
        const genre = req.params.genre;
        const resp = await models.Movie.findAll({
            where: {
                genre: genre
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
    }

}

// router.post('/newMovie', async (req, res) => {
//     try {
//         const data = req.body
//         const resp = await models.Movie.create({
//             title: data.title,
//             poster: data.poster,
//             release_date: data.release_date,
//             overview: data.overview,
//             genre: data.genre
//         })
//         res.send(`Registro creado con exito!`)

//     } catch (error) {
//         res.send(`Fallo al crear pelicula ${error}`)
//     }
// })

// router.put('/updateMovie', async (req, res) => {
//     try {
//         const data = req.body;
//         const resp = await models.Movie.update(
//             {
//                 title: data.title,
//                 poster: data.poster,
//                 release_date: data.release_date,
//                 overview: data.overview,
//                 genre: data.genre
//             },
//             {
//                 where: { movie_id: data.movie_id }
//             })
//         res.send(`Registro actualizado con exito!`)
//     } catch (error) {
//         res.send(error)
//     }

// })

// router.deconste('/deconsteMovie/:movie_id', async(req, res) => {
//     try {
//         const movie_id = req.params.movie_id
//         const resp = await models.Movie.destroy({
//             where : {movie_id : movie_id}
//         })
//         if(resp == 1){
//             res.send('El registro de la pelicula ha sido eliminado')
//         }else {
//             res.send('No se ha podido eliminar')
//         }
//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = MovieController