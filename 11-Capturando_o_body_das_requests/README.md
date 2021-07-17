## Capturando o body das Requests

Como capturar o body das requests.

As mensagens do body são enviadas em pequenos fragmentos e vão chegando aos poucos, por isso precisamos criar um event listener para ficar "ouvindo" toda vez que essas mensagens vão chegando. Assim que esses fragmentos são reunidos, nós realizamos um Json parsed nessas informações para retornar um objeto. 