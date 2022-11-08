1 - Os rounds e salts são a quantidade de iterações que serão realizadas.
    entre 10 e 12
    eu utilizei 12 vezes, pois, acima desses valores o sistema começa a ficar lento

2 - O cadastro deve ser modificado antes, pois ele é verificado antes do login
    não será necessário modificar porque o endpoint usará o token que foi gerado anteriormente.
