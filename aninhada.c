#include <stdio.h> 

int main(){


    int idade,renda,dependentes;


    printf("Digite a sua idade! \n");
    scanf("%d",&idade);

    printf("Digite a sua renda! \n");
    scanf("%d",&renda);

    printf("Digite o numero de dependentes! \n");
    scanf("%d",&dependentes);
    

    if (idade >= 18 && idade < 65) {
      if (renda < 2000){
        if (dependentes > 3){
            printf("Inclusao ao beneficio aceita!");
        } else{
            printf("Recusado por dependentes!");
        }

      } else{
        printf("Recusado por renda!");
      }
    } else{
        printf("Recusado por idade!");
    }

    return 0;
}

