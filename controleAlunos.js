let alunosSala = 17

for (let aluno = 0; aluno <= alunosSala; aluno++) {

    if (aluno == 0) {
        console.log( "zero " + aluno);        
    } 
    
    if (aluno % 2 == 0) {
        console.log( "par " + aluno);        
    } else {
        console.log("impar " + aluno);
    }
}