class triangulo{
    constructor(basetria,alturatria){
        this.basetria=basetria;
        this.alturatria=alturatria;
    }
    areatria()
    {
        return (this.alturatria*this.basetria)/2;
    }
}
class cuadrado{
    constructor(lado){
        this.lado=lado;
    }
    areacua(){
        return this.lado**2;
    }
}
class Rectangulo{
    constructor(brec,arec){
        this.brec=brec;
        this.arec=arec;
    }
    area()
    {
        return this.brec*this.arec;
    }
}

const btntria= document.getElementById("creartria");
btntria.addEventListener('click',()=>
{
    let basetria= parseInt(document.getElementById("basetria").value);
    let alturatria=parseInt(document.getElementById("alturatria").value);
    let triangulo1= new triangulo(basetria,alturatria);
    let divtria=document.getElementById("restria");
    divtria.innerHTML="<p>Base: "+triangulo1.basetria+" Altura: "+triangulo1.alturatria+"</p>";
    divtria.innerHTML+="<p>Area: "+triangulo1.areatria()+"</p>"; 
});

const btncua= document.getElementById("crearcua");
btncua.addEventListener('click',()=>{
    let lado=parseInt(document.getElementById("lado").value);
    let cuadrado1= new cuadrado(lado);
    let divcua= document.getElementById("rescua");
    divcua.innerHTML="<p>Lado: "+cuadrado1.lado+"</p>";
    divcua.innerHTML+="<p>Area: "+cuadrado1.areacua()+"</p>";
});

const btnrec=document.getElementById("crear");
btnrec.addEventListener('click',()=>{
    let brec=parseInt(document.getElementById("brec").value);
    let arec=parseInt(document.getElementById("arec").value);
    let recta1= new Rectangulo(brec,arec);
    let divrec= document.getElementById("resultado");
    divrec.innerHTML="<p>Base: "+recta1.brec+" Altura: "+recta1.arec+"</p>";
    divrec.innerHTML+="<p>Area: "+recta1.area()+"</p>";
});
