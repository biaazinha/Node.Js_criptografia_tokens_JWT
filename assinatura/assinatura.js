import { generateKeyPairSync, createSign, createVerify } from 'crypto';

//declarar e utilizar o par de chaves
const { privateKey, publicKey }= generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
})

let dados = "Essa string vai ser assinada";

//Assinatura
const assinador = createSign('rsa-sha256');
assinador.update(dados);
const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura: ${assinatura}`)

//intermediario que vai dar false
//dados += 'Arquivo alterado'

//Envio desse documento ---------documento, assinatura e chave publica
const verificador = createVerify('rsa-sha256');
verificador.update(dados);
const verificado = verificador.verify(publicKey, assinatura, 'hex');

console.log(verificado); //true