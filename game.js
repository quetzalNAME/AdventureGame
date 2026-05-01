let alphabet_dict = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'e', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'g', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'f', 22: 'v', 23: 'w', 24: 'b', 25: 'y', 26: 'z'};
// some are remapped
let parking_lane = alphabet_dict[Math.floor(Math.random() * 26) + 1].toUpperCase();

class Front extends AdventureScene {
    constructor() {
        super("front", "Zoo Entrance.");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('bg', 'zoofront.jpg');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.bg = this.add.image((1920 / 4) + 135, 1080 / 2, 'bg');
        this.bg.setScale(0.5);

        this.add.image(this.w *0.3 - 75, this.w * 0.3 + 50, 'arrow').setAngle(-90 - 45).setAlpha(0.5);
        this.add.image(this.w *0.3 + 175, this.w * 0.3 + 50, 'arrow').setAngle(-90 + 45).setAlpha(0.5);

        this.add.text(this.w * 0.05, this.w * 0.275 + 75, '\n🦩').setFontSize("150px")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('\n🦩🦩🦩🦩🦩🦩🦩🦩');
            })

        let left = this.add.text(this.w * 0.3 - 100, this.w * 0.325, "Left")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go forward and LEFT, towards the Otters?");
            })
            .on('pointerdown', () => {
                this.gotoScene('otters');
            })
            
        let right = this.add.text(this.w * 0.3 + 100, this.w * 0.325, "Right")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go forward and RIGHT, towards the Tigers?");
            })
            .on('pointerdown', () => {
                this.gotoScene('tigers');
            })
    }
}

class Otters extends AdventureScene {
    constructor() {
        super("otters", "Otter Exhibit.");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('otters', 'otters.jpg');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.bg = this.add.image((1920 / 4) + 215, 1080 / 2, 'otters');
        this.bg.setScale(1.25);

        this.add.image(this.w *0.6 + 100, this.w * 0.5, 'arrow').setScale(2.5);
            
        let forward = this.add.text(this.w * 0.5 + 175, this.w * 0.5 - 20, "Onward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Keep walking towards the Crocodiles.");
            })
            .on('pointerdown', () => {
                this.gotoScene('crocs');
            })
    }
}

class Crocs extends AdventureScene {
    constructor() {
        super("crocs", "Crocodile Exhibit.");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('crocs', 'crocs.jpg');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.bg = this.add.image((1920 / 4) + 150, 1080 / 2, 'crocs');
        this.bg.setScale(1);
            
        this.add.image(this.w *0.1 - 20, this.w * 0.5, 'arrow').setScale(2.5).setAngle(180);
            
        let Backward = this.add.text(this.w * 0.1 - 100, this.w * 0.5 - 20, "Backward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Walk back to the Otters?");
            })
            .on('pointerdown', () => {
                this.gotoScene('otters');
            })
        
        this.add.image(this.w *0.6 + 100, this.w * 0.5, 'arrow').setScale(2.5);
            
        let forward = this.add.text(this.w * 0.5 + 175, this.w * 0.5 - 20, "Onward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Keep walking towards the Crocodiles.");
            })
            .on('pointerdown', () => {
                this.gotoScene('otters');
            })
    }
}

class Tigers extends AdventureScene {
    constructor() {
        super("tigers", "Tiger Habitat.");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('tigers', 'tigers.jpg');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.bg = this.add.image((1920 / 4) + 130, 1080 / 2, 'tigers');
        this.bg.setScale(1.6);
            
        this.add.image(this.w *0.6 + 100, this.w * 0.5, 'arrow').setScale(2.5);
            
        let forward = this.add.text(this.w * 0.5 + 175, this.w * 0.5 - 20, "Onward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Keep walking towards the Gibbons.");
            })
            .on('pointerdown', () => {
                this.gotoScene('gibbons');
            })
    }
}

class Gibbons extends AdventureScene {
    constructor() {
        super("gibbons", "Gibbon Habitat.");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('gibbons', 'gibbons.jpg');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.bg = this.add.image((1920 / 4) - 10, 1080 / 2, 'gibbons');
        this.bg.setScale(1.5);
            
        this.add.image(this.w *0.1 - 20, this.w * 0.5, 'arrow').setScale(2.5).setAngle(180);
            
        let Backward = this.add.text(this.w * 0.1 - 100, this.w * 0.5 - 20, "Backward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Walk back to the Tigers?");
            })
            .on('pointerdown', () => {
                this.gotoScene('tigers');
            })
        
        this.add.image(this.w *0.6 + 100, this.w * 0.5, 'arrow').setScale(2.5);
            
        let forward = this.add.text(this.w * 0.5 + 175, this.w * 0.5 - 20, "Onward!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Keep walking towards the Gibbons.");
            })
            .on('pointerdown', () => {
                this.gotoScene('tigers');
            })
    }
}

class Logos extends Phaser.Scene {
    constructor() {
        super('logos');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('logo', 'badOmenlogo.png');
    }
    create() {
        let logoScale = 0.6;
        let chosenScreenX = 1920;
        let chosenScreenY = 1080;
        let logoOffset = 20;

        this.bg = this.add.rectangle(0, 0, chosenScreenX * 2, chosenScreenY * 2, 0xffffff, 1);

        this.logo = this.add.image(-(chosenScreenX/2 - ('logo'.length)), chosenScreenY/2 - ('logo'.length + 20), 'logo');
        this.logo.setScale(logoScale);

        this.tweens.add({
            targets: this.logo,
            x: chosenScreenX/2 - ('logo'.length) - logoOffset,
            y: chosenScreenY/2 - ('logo'.length + 20),
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.tagline = this.add.text(
            -9000,
            770 - 75,
            "Bad Tagline, Good Games",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "75px", color: "#000000"}
        );

        this.tweens.add({
            targets: this.tagline,
            x: 775 - logoOffset,
            alpha: 0,
            duration: 0,
        });

        this.tweens.add({
            targets: this.tagline,
            x: 775 - logoOffset,
            y: 770,
            alpha: 1,
            delay: 1500,
            duration: 350,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.logo,
            alpha: 0,
            delay: 3000,
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.tagline,
            alpha: 0,
            delay: 3000,
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.swap = this.input.keyboard.addKey('SPACE')
    }

    update(time) {
        if (time/1000 > 5.5 || Phaser.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start('intro');
        }
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('zoolot', 'zoo_lot.jpg');
    }
    create() {
        this.bg = this.add.image(1920 / 2, 1080 / 2, 'zoolot');
        this.bg.setScale(1);

        this.preamble = this.add.text(
            300,
            100 - 1000,
`You arrive at the Miami Zoo on
December 24th, Christmas Eve.

You are parked in section '${parking_lane}'.`,
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "100px", color: "#fff", stroke: "#000", strokeThickness: 7, align: 'center',
                shadow: {
                    offsetX: 0,
                    offsetY: 0,
                    color: '#000',
                    blur: 30,
                    stroke: true,
                    fill: true
                },
            }
        );

        this.begin = this.add.text(
            900 + 1100,
            900,
            "Click anywhere to begin.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "90px", color: "#fff", stroke: "#000", strokeThickness: 5,
                shadow: {
                    offsetX: 0,
                    offsetY: 0,
                    color: '#000',
                    blur: 20,
                    stroke: true,
                    fill: true
                },
            }
        );

        this.tweens.add({
            targets: this.preamble,
            y: 100,
            duration: 1000,
            ease: 'Quart.easeInOut'
        });

        this.tweens.add({
            targets: this.begin,
            x: 900,
            delay: 1000,
            duration: 2500,
            ease: 'Quart.easeInOut'
        });
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('front'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Logos, Intro, Front, Otters, Crocs, Tigers, Gibbons, Outro],
    title: "Adventure Game",
});

