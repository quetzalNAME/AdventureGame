class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
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
    create() {
        let alphabet_dict = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};
        let parking_lane = alphabet_dict[Math.floor(Math.random() * 26) + 1].toUpperCase();

        this.add.text(50,50, `You arrive at the Miami Zoo on December 24th!\n\nYou are parked at lane ${parking_lane}.`).setFontSize(50);

        this.add.text(50,250, "Click anywhere to begin.").setFontSize(20);
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
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
    scene: [Logos, Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

