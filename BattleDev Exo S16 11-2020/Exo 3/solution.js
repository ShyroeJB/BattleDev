// Ne supprimez pas ces lignes
// Chargement de l'input de test
let input
function initInput(valeur) {
    input = valeur
}

// Ne supprimez pas ces lignes
// Support de LocalPrint et LocalPrintArray utilisées dans les
// réponses des exercices de la saison 11
function LocalPrint(chaine) {
    console.error(chaine)
}
function LocalPrintArray(chaine) {
    console.error(chaine)
}

// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse() {
    // Implémentez votre code ci-dessous
    const nbAgent = input[0]
    const level = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let agent = [0]

    for (let i = 1; i <= 10; i++) {
        temp_agent = []
        for (let j = 1; j < input.length; j++) {
            const split = input[j].split(' ')
            const agentA = +split[0]
            const agentB = +split[1]
            if (agent.includes(agentB)) {
                level[i]++
                temp_agent.push(agentA)
            }
        }
        agent = temp_agent
    }
    let msg = ''
    level.forEach((el) => (msg += `${el} `))
    console.log(msg.trim())
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse
exports.initInput = initInput
