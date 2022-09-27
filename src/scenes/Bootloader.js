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
        this.load.image(['yoshif', 'yoshi']);
        this.load.image("drop", "drop.png");
    }

    create() {
        this.yoshi = this.add.image(100, 100, 'yoshi').setInteractive();
        this.drop = this.add.image(100, 250, 'drop')
        .setDepth(-1)
        .setInteractive()
        .input.dropZone = true;
        //Para poder arrastrar un objeto se emplea la función setDraggable
        this.input.setDraggable(this.yoshi);
        //Programación de eventos principales
        const eventos = Phaser.Input.Events;
        //Evento para inicializar el arrastre
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(0.9);
        });
        //Evento que hace que el objeto se mueva con el puntero
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        //Evento que controla el final del arrastre
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            if ( !dropzone ) {
                obj.x = obj.input.dragStartX;//Arrastre de un game-object sobre una zona "dropeable"
                obj.y = obj.input.dragStartY;
            }
            obj.setScale(1.0);
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