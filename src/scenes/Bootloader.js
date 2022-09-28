class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','danzatrina']);
        this.load.image("drop2", "drop2.png");
        this.load.image("madera", "madera.png");
    }

    create() {
        this.fondo = this.add.image(1000, 500, 'madera')
        .setDepth(-2)
        .setAlpha(.6);
        this.imgReferencia = this.add.image(1300, 190, 'danzatrina').setScale(.4);
        this.pieza1 = this.add.image(1050, 500, '1').setInteractive().setScale(.7).setName("1");
        this.input.setDraggable(this.pieza1);
        
        //Fila 1
        this.drop = this.add.image(126, 100, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop2 = this.add.image(300, 100, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop3 = this.add.image(474, 100, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop4 = this.add.image(648, 100, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop5 = this.add.image(822, 100, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        //Fila 2
        this.drop6 = this.add.image(126, 250, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop7= this.add.image(300, 250, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop8 = this.add.image(474, 250, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop9 = this.add.image(648, 250, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop10 = this.add.image(822, 250, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;  
        //Fila 3
        this.drop11 = this.add.image(126, 400, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop12= this.add.image(300, 400, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop13 = this.add.image(474, 400, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop14 = this.add.image(648, 400, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop15 = this.add.image(822, 400, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;        
        //Fila 3
        this.drop16 = this.add.image(126, 550, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop17= this.add.image(300, 550, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop18 = this.add.image(474, 550, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop19 = this.add.image(648, 550, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;
        this.drop20 = this.add.image(822, 550, 'drop2').setDepth(-1).setInteractive().setScale(.7).input.dropZone = true;   
        //Arreglo que guarda los nombres de los drops
        let dropNombres = ['1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];      

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
            else{
                console.log("Objeto: ",obj);
                //console.log("Drop:", dropNombres[parseInt(obj.name)-1])
                // if(obj.name ){
                //     obj.input.draggable = false;
                // }
                obj.setScale(.7);
            }   
        });
        //Personalización de eventos de la zona "dropeable"
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
            dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
            dropzone.clearTint();
        });
        //Evento DROP
        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
        });
        

    }

    update(time, delta) {
        
    }
}

export default Bootloader;