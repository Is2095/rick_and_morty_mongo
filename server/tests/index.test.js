
const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const [user] = require('../src/utils/users')

describe("Test de RUTAS", () => {
    const uno = {"id": 1, "name": "Rick"}
    const dos = {"id": 2, "name": "Sanchez"}
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200 al hacer GET", async () => {
            // const response = await agent.get('/rickandmorty/character/1');
            // expect(response.statusCode).toEqual(200); lo siguiente es igual pero mejor reducida 
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it("Reponde un objeto con las propiedades: id, name, species, gender e image", async () => {
            const arr = ["gender","species","name","id","image"]
            const response = await agent.get('/rickandmorty/character/1')
            arr.map(el=>expect(response.body).toHaveProperty(el))
        });
        it("Si hay un error responde con status: 500", async () => {
            // const response = await agent.get('/rickandmorty/character/idDesconocido')
            // expect(response.statusCode).toEqual(500)
            await agent.get('/rickandmorty/character/idDesconocido').expect(500)
        });
    });
    describe("GET /rickandmorty/login", () => {
        it("Valida el logueado si se ingresa el username y password correcto", async () => {
            const response = await agent.get(`/rickandmorty/login/?email=${user.EMAIL}&password=${user.PASSWORD}`);
            expect(response.body).toEqual({access: true});
            //expect(response.body.access).toBeTruthy() => ve si lo esperado es true
        });
        it("Si los datos de email y password son incorrecto ACCESS: FALSE", async () => {
            const response = await agent.get(`/rickandmorty/login?email=emailIconrrecto&password=passwordIincorrecto`);
            expect(response.body).toEqual({access: false});
        });
    });
    describe("POST /rickandmorty/fav", () => {
        it("Debe regresar los datos en un array", async () => {
        const response = await agent.post('/rickandmorty/fav/').send({"id": 1, "name": "Rick"});
        //expect(Array.isArray(response.body)).toEqual(true);
        expect(response.body).toBeInstanceOf(Array)
        
    });
    it("Al enviar un elemento debe devolver un array incluyendo dicho elemento", async () => {
        const response = await agent.post('/rickandmorty/fav/').send({"id": 2, "name": "Sanchez"});
        expect(response.body).toContainEqual(uno)
        expect(response.body).toContainEqual(dos)
        //expect(response.body[0]).toEqual({"id": 1, "name": "Rick Sanchez"})
    });
})
describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no encuentea un personaje para borrar, deve devolver todos los personaje", async () => {
        const {body} = await agent.delete("/rickandmorty/fav/3")
        expect(body).toContainEqual(uno)
        expect(body).toContainEqual(dos)
        
    })
    it("Se elimina correctamente el personaje", async () => {
        const {body} = await agent.delete("/rickandmorty/fav/1")
        expect(body).not.toContainEqual(uno)
        })
    })
})