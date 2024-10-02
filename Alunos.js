const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.8 },
    { nome: 'Pedro', nota: 6.0 },
    { nome: 'Ana', nota: 8.0 },
    { nome: 'Lucas', nota: 4.9 }
];

const filtrarAlunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);