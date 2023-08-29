let verde="rgb( 0,255,0)";
let verdeApagando="rgba(0,255,0.4)";
let amarelo=rgb(255,255,0);
let amareloapagando=rgb(255,0,0,04);
let vermelho=rgb(255,0,0);
let vermelhoapagando=rgb(255.0,0,04);
let tempo=0;

function setup () {
createcanvas (600,600);
}

function draw(){
 background(255);
 caixasemaforo();
 switch (true){
   case tempo<60:
  faseaberto();
  tempo++;
break;
case tempo<120:
  faseatencao ();
 tempo++;
 break;
 case tempo <200:
     fasefechado();
     tempo++;
     break;default:tempo=0;
     

function fasefechado( ){
criarsemaforo (verdeapagado,325,280);
criarsemaforo (amareloapagado,325,230);
criarsemaforo (vermelho,325,180);
{
  function faseaberto( ){
criarsemaforo (verdeapagado,325,280);
criarsemaforo (amareloapagado,325,230);
criarsemaforo (vermelho,325,180);
{ 
function faseAtençâo( ){
criarsemaforo (verdeapagado,325,280);
criarsemaforo (amareloapagado,325,230);
criarsemaforo (vermelho,325,180);
  
 fill(0) ;
stroke(220,220.2200);
strokeweight(1);
rect(300,150,50,150);
{
function caixasemaforo(cor,x,y) {
fill(cor);
ellipse(x,y,30,30);
}
  
  
  
  
