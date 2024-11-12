# Cobrinha
 ### 4. Perguntas para Reflexão

1. O que é orientação a objetos e como ela é aplicada em TypeScript?
R: Orientação a Objetos (OO) é um paradigma de programação que organiza o código em torno de objetos, que encapsulam dados e comportamentos relacionados. Em TypeScript, OO é aplicada usando classes, métodos, propriedades e herança, permitindo estruturar o código de maneira modular e reutilizável. No projeto, criamos classes (Snake, Food, Game) que representam diferentes aspectos do jogo.

2. Como você define uma classe em TypeScript?
R: Em TypeScript, uma classe é definida usando a palavra-chave class, seguida pelo nome da classe e seu corpo, que contém propriedades e métodos. Por exemplo:
class Snake {
    // propriedades e métodos da classe
}

3. Qual a função do método `constructor` em uma classe?
R: O constructor é um método especial que é executado automaticamente quando uma instância da classe é criada. Ele serve para inicializar propriedades e configurar o estado inicial do objeto. No projeto, usamos o constructor para definir a posição inicial da cobra, a direção e para gerar a primeira posição da comida.

4. Como funcionam as instâncias de objetos em TypeScript?
R: As instâncias são criadas usando o operador new junto com o nome da classe. Cada instância possui seus próprios valores de propriedade e métodos. Por exemplo:
const snake = new Snake();
Isso cria uma nova instância de Snake, com propriedades como body e direction configuradas para aquele objeto específico.

5. Como você poderia modificar o jogo para adicionar dificuldade crescente?
R: Poderíamos diminuir o intervalo de atualização do jogo, aumentando a velocidade da cobra conforme o jogador avança. Outra opção é adicionar obstáculos aleatórios que aumentam à medida que o jogo progride, ou até aumentar o tamanho da cobra mais rapidamente após cada comida consumida.

6. O que é o encapsulamento e como ele foi usado nas classes do jogo?
R: Encapsulamento é uma prática de OO que oculta a implementação interna de uma classe, expondo apenas o necessário para o uso externo. No jogo, as propriedades e métodos são encapsulados dentro das classes Snake, Food, e Game, e interagimos com essas classes apenas através de métodos públicos, como move() ou draw(), em vez de acessar diretamente os detalhes internos.

7. Como funciona o método `move()` da classe **Snake**?
R: O método move() atualiza a posição da cobra, criando uma nova "cabeça" com base na direção atual e adicionando-a no início do array body. Depois, o último segmento da cobra é removido, para simular o movimento em uma direção sem crescimento. Assim, o método move a cobra na direção escolhida.

8. Como você faria para implementar colisões com as bordas do canvas?
R: Implementação de Colisões: No método update() da classe Game, eu verificaria se a cabeça da cobra (snake.body[0]) ultrapassou as bordas do canvas. Se x ou y da cabeça da cobra forem menores que zero ou maiores que o tamanho do canvas (por exemplo, 400), o jogo pararia ou reiniciaria a cobra.

9. Quais são as vantagens de utilizar tipagem estática em projetos como este?
R: Vantagens da Tipagem Estática: A tipagem estática permite detecção de erros antes do tempo de execução, melhorando a confiabilidade do código. Em TypeScript, ela fornece autocompletar, validações e documentação implícita, facilitando a manutenção e o entendimento do código. Em projetos como este, ajuda a evitar erros comuns ao manipular coordenadas e objetos.

10. Como você modularizaria este código utilizando **módulos** em TypeScript?
R: Modularização com Módulos: Em TypeScript, é possível dividir o código em arquivos separados para cada classe (por exemplo, Snake.ts, Food.ts, Game.ts) e exportar as classes com export. No arquivo principal, importaríamos as classes com import, criando uma estrutura mais organizada e facilitando a manutenção.
