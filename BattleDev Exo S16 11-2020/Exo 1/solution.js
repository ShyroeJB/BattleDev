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
    const nb = input[0]
    let nbAccount = 0
    for (let i = 1; i <= nb; i++) {
        const string = input[i]
        const exam = string.substring(string.length - 5, string.length)
        if (!isNaN(exam)) {
            nbAccount++
        }
    }
    console.log(nbAccount)
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse
exports.initInput = initInput
