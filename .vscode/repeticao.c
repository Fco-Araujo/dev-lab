#include <stdio.h>

int main(){

    int numero;

    do
    {
       printf("Digite um numero impar para sair do programa: ");
       scanf("%d",&numero);

        if (numero % 2 == 0)
        {
            printf("Seu numero é par\n");
        } else {
            printf("Seu numero é impar\n");
        }
        

    } while (numero == 0);

    printf("Você finalmente saiu do programa!");
    

    
    return 0;
    
}