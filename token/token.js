import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

//criando um token
const token = jwt.sign(
    {
        apelido: "bia",
        curso: "segurança com node"
    }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);