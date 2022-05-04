
/**
 * Escreva uma descrição da classe Dispatcher aqui.
 * 
 * @author (seu nome) 
 * @version (um número da versão ou uma data)
 */
public class Dispatcher
{
   private StudentView studentView;
   private HomeView homeView;
   
   public Dispatcher(){
      studentView = new StudentView();
      homeView = new HomeView();
   }

   public void dispatch(String request){
      if(request.equalsIgnoreCase("STUDENT")){
         studentView.show();
      }
      else{
         homeView.show();
      }	
   }
}
