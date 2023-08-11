
const {User }= require('../DB_connection')

const login = async (req, res) => {
    const {email, password} = req.query
    try {
        if(!email || !password) return res.status(400).json({error: 'Faltan datos'})
        //const findOneLogin = await User.findOne({where: {email}});
        //if(!findOneLogin) return res.status(404).json({error: 'Usuario no encontrado'});
        password !== null // esto se puso para habilitar la entrada libre
        //findOneLogin.password === password
        ? res.status(200).json({access: true}) 
            : res.status(403).json({error: 'Contraseña incorrecta'});
        
    } catch (error) {
        res.status(500).json(error.message);
    }
    
}

module.exports = login;