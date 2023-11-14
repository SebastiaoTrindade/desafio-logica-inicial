let nomeHeroi;
let quantidadeExperienciaXp;

nomeHeroi = prompt("Informe o nome do Heroi: ");
quantidadeExperienciaXp = parseInt(prompt("Informe a quantidade de experiencia do seu heroi: "));

let nivelDoHeroi

switch (true) {
    case quantidadeExperienciaXp < 1000:
        nivelDoHeroi = "Ferro";
        break;

    case quantidadeExperienciaXp >= 1001 && quantidadeExperienciaXp <= 2000:
        nivelDoHeroi = "Bronze";
        break;

    case quantidadeExperienciaXp >= 2001 && quantidadeExperienciaXp <= 5000:
        nivelDoHeroi = "Prata";
        break;

    case quantidadeExperienciaXp >= 5001 && quantidadeExperienciaXp <= 7000:
        nivelDoHeroi = "Ouro";
        break;

    case quantidadeExperienciaXp >= 7001 && quantidadeExperienciaXp <= 8000:
        nivelDoHeroi = "Platina";
        break;

    case quantidadeExperienciaXp >= 8001 && quantidadeExperienciaXp <= 9000:
        nivelDoHeroi = "Ascendente";
        break;

    case quantidadeExperienciaXp >= 9001 && quantidadeExperienciaXp <= 10000:
        nivelDoHeroi = "Imortal";
        break;

    case quantidadeExperienciaXp >= 10001:
        nivelDoHeroi = "Radiante";
        break;

    default:
        console.log("Nível inexistente");
        break;
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelDoHeroi + ".");





