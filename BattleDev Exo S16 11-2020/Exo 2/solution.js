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
    let nbSuspicious = 0
    for (let i = 1; i <= input[0]; i++) {
        const hoursTotal = input[i]
        const hoursSplit = hoursTotal.split(':')
        const hours = hoursSplit[0]
        const minute = hoursSplit[1]
        if ((hours >= 20 || hours <= 7) && (minute >= 0 || minute <= 59)) {
            nbSuspicious++
        }
    }
    if (nbSuspicious >= Number(input[0]) / 2) {
        console.log('SUSPICIOUS')
    } else {
        console.log('OK')
    }
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse
exports.initInput = initInput
