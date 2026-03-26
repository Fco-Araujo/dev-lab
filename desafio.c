#include <stdio.h>

int main (){

    char nome[10];
    int idade;
    int habilitacao;

    printf("****Bem vindo ao programa de transito****\n\n");

    printf("Digite seu nome: ");
    scanf( "%s",nome);

    printf("Digite sua idade: ");
    scanf( "%d", &idade);


    printf("Possui habilitação (1-Sim / 0-Não):");
    scanf("%d",&habilitacao);

    if(idade >= 18){
        if (habilitacao == 1)
        {
             printf("Voçê tem idade e habilitação, pode dirigir");
        }else{
              printf("Voçê tem não habilitação, não pode dirigir");
        }
        
    }else{
        printf("Você nao pode dirigir devido a idade");
    }

    return 0;
}