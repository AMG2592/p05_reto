class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader')
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','danzatrina','reiniciar','rompecabezas','cursor','ganaste']);
        this.load.image("drop2", "drop2.png");
        this.load.image("fondo", "fondo.png");
        this.load.audio('Llorona', ['./Llorona.mp3']);
        this.load.audio('acierto', ['./pop.mp3']);
    }

    create() {
        //Contador 
        let contador = 0;
        let aciertos = 20;
        this.fondo = this.add.image(1000, 470, 'fondo').setDepth(-2).setAlpha(.55);
        //Imagen de referencia para puzzle
        this.imgReferencia = this.add.image(1190, 190, 'danzatrina').setScale(.37);
        //Imagen reiniciar
        this.reiniciar = this.add.image(470,840,'reiniciar').setScale(.3).setInteractive();
        //Imagen Rompecabezas
        this.titulo = this.add.image(470,80,'rompecabezas').setScale(.6);
        //Imagen GANASTE
        this.titulo2 = this.add.image(1000, 470,'ganaste').setDepth(2).setAlpha(0);
        //MÚSICA DE FONDO
        //this.music = this.sound.add('Llorona', {loop: true, volume: .2});
        //this.music.play();
        //MÚSICA ACIERTO
        this.acierto = this.sound.add('acierto', {loop:false,volume: 0.5});
        //Piezas de rompecabezas
        this.pieza1 = this.add.image(1530, 280, '1').setInteractive().setScale(.7).setName("1");
        this.input.setDraggable(this.pieza1);
        this.pieza2 = this.add.image(1050, 840, '2').setInteractive().setScale(.7).setName("2");
        this.input.setDraggable(this.pieza2);
        this.pieza3 = this.add.image(1905, 200, '3').setInteractive().setScale(.7).setName("3");
        this.input.setDraggable(this.pieza3);
        this.pieza4 = this.add.image(1050, 670, '4').setInteractive().setScale(.7).setName("4");
        this.input.setDraggable(this.pieza4);
        this.pieza5 = this.add.image(1650, 840,'5').setInteractive().setScale(.7).setName("5");
        this.input.setDraggable(this.pieza5);
        this.pieza6 = this.add.image(1450, 500, '6').setInteractive().setScale(.7).setName("6");
        this.input.setDraggable(this.pieza6);
        this.pieza7 = this.add.image(1650, 670, '7').setInteractive().setScale(.7).setName("7");
        this.input.setDraggable(this.pieza7);
        this.pieza8 = this.add.image(1530, 105, '8').setInteractive().setScale(.7).setName("8");
        this.input.setDraggable(this.pieza8);
        this.pieza9 = this.add.image(1720, 280, '9').setInteractive().setScale(.7).setName("9");
        this.input.setDraggable(this.pieza9);
        this.pieza10 = this.add.image(1250, 840, '10').setInteractive().setScale(.7).setName("10");
        this.input.setDraggable(this.pieza10);
        this.pieza11 = this.add.image(1050, 500, '11').setInteractive().setScale(.7).setName("11");
        this.input.setDraggable(this.pieza11);
        this.pieza12 = this.add.image(1720, 105, '12').setInteractive().setScale(.7).setName("12");
        this.input.setDraggable(this.pieza12);
        this.pieza13 = this.add.image(1650, 500, '13').setInteractive().setScale(.7).setName("13");
        this.input.setDraggable(this.pieza13);
        this.pieza14 = this.add.image(1250, 500, '14').setInteractive().setScale(.7).setName("14");
        this.input.setDraggable(this.pieza14);
        this.pieza15 = this.add.image(1850, 840, '15').setInteractive().setScale(.7).setName("15");
        this.input.setDraggable(this.pieza15);
        this.pieza16 = this.add.image(1850, 670, '16').setInteractive().setScale(.7).setName("16");
        this.input.setDraggable(this.pieza16);
        this.pieza17 = this.add.image(1850, 500, '17').setInteractive().setScale(.7).setName("17");
        this.input.setDraggable(this.pieza17);
        this.pieza18 = this.add.image(1250, 670, '18').setInteractive().setScale(.7).setName("18");
        this.input.setDraggable(this.pieza18);
        this.pieza19 = this.add.image(1450, 670, '19').setInteractive().setScale(.7).setName("19");
        this.input.setDraggable(this.pieza19);
        this.pieza20 = this.add.image(1450, 840, '20').setInteractive().setScale(.7).setName("20");
        this.input.setDraggable(this.pieza20);
        //Fila 1
        this.drop = this.add.image(126, 200, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("1").input.dropZone = true;
        this.drop2 = this.add.image(300, 200, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("2").input.dropZone = true;
        this.drop3 = this.add.image(474, 200, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("3").input.dropZone = true;
        this.drop4 = this.add.image(648, 200, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("4").input.dropZone = true;
        this.drop5 = this.add.image(822, 200, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("5").input.dropZone = true;
        //Fila 2
        this.drop6 = this.add.image(126, 350, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("6").input.dropZone = true;
        this.drop7= this.add.image(300, 350, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("7").input.dropZone = true;
        this.drop8 = this.add.image(474, 350, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("8").input.dropZone = true;
        this.drop9 = this.add.image(648, 350, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("9").input.dropZone = true;
        this.drop10 = this.add.image(822, 350, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("10").input.dropZone = true;  
        //Fila 3
        this.drop11 = this.add.image(126, 500, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("11").input.dropZone = true;
        this.drop12= this.add.image(300, 500, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("12").input.dropZone = true;
        this.drop13 = this.add.image(474, 500, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("13").input.dropZone = true;
        this.drop14 = this.add.image(648, 500, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("14").input.dropZone = true;
        this.drop15 = this.add.image(822, 500, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("15").input.dropZone = true;        
        //Fila 3
        this.drop16 = this.add.image(126, 650, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("16").input.dropZone = true;
        this.drop17= this.add.image(300, 650, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("17").input.dropZone = true;
        this.drop18 = this.add.image(474, 650, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("18").input.dropZone = true;
        this.drop19 = this.add.image(648, 650, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("19").input.dropZone = true;
        this.drop20 = this.add.image(822, 650, 'drop2').setDepth(-1).setInteractive().setScale(.7).setName("20").input.dropZone = true;        

        //Programación de eventos principales
        const eventos = Phaser.Input.Events;
        //Evento para inicializar el arrastre
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(0.5);
        });
        //Evento que hace que el objeto se mueva con el puntero
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        //Evento que controla el final del arrastre
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            if ( !dropzone ) { //Cuando no sea dropeable
                obj.x = obj.input.dragStartX;//Arrastre de un game-object sobre una zona "dropeable"
                obj.y = obj.input.dragStartY;
            }
            obj.setScale(.7);
        });
        //Personalización de eventos de la zona "dropeable"
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {           
            dropzone.setTint(0x3339FF);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
            dropzone.clearTint();
        });
        //Evento DROP
        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
            console.log("Objeto: ",obj.name);
            console.log("Dropzone: ",dropzone.name);
            //Se verifica que el lugar sea el correspondiente a la pieza
            if(dropzone.name == obj.name){
                obj.input.draggable = false;
                dropzone.input.dropZone = false;
                dropzone.setDepth(-1);
                this.acierto.play();
                contador =  contador+1;
                console.log(contador);
                if(contador == aciertos){
                    console.log(contador);
                    this.titulo2.setAlpha(1);
                }
            }
        });

        //EVENTOS PARA REINICIO
        this.reiniciar.on(eventos.POINTER_OVER, function() {
            this.setScale(.4);
            //this.setTint("0xF13526");
        });
        this.reiniciar.on(eventos.POINTER_OUT, function() {
            this.setScale(.3);
            //this.clearTint();
        });
        this.reiniciar.on(eventos.POINTER_DOWN, function() {
            this.scene.restart();
        }, this);

    }

    update(time, delta) {
        
    }
}

export default Bootloader;