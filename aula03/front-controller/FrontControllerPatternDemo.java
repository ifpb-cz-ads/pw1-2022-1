
/**
 * Escreva uma descrição da classe FrontControllerPatternDemo aqui.
 * 
 * @author (seu nome) 
 * @version (um número da versão ou uma data)
 */
public class FrontControllerPatternDemo
{
    public static void main(String[] args) {
   
      FrontController frontController = new FrontController();
      frontController.dispatchRequest("HOME");
      frontController.dispatchRequest("STUDENT");
   }
}
