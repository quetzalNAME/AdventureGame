A simple adventure game by Quetzal based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**:
    - Zoo Entrance, Otters, Crocs, Tigers, Gibbons
- **2+ scenes *not* based on `AdventureScene`**:
    - Parking Lot (intro), Gift Shop (outro), Logos
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - As suggested by a peer in peer review, I have changed the flashing showMessage text to linger for longer to give the player a chance to read, given how that is important for my game.
    - I also went ahead and cut the transition time in half, this was a huge enhancement, and the effect on timings for items doesn't really matter for my game.

Experience requirements:
- **4+ locations in the game world**:
    - Zoo Entrance, Otters, Crocs, Tigers, Gibbons, Giraffes
- **2+ interactive objects in most scenes**:
    - Animals in all the adventure scenes, arrows to pick your path
- **Many objects have `pointerover` messages**:
    - All animals, eg. flamingo, otter
- **Many objects have `pointerdown` effects**:
    - All animals, eg. Festus (gibbon), croc
- **Some objects are themselves animated**:
    - All animals (on click), Santa

Asset sources:
- Crocodile + Tiger: Hand drawn by me with my own two hands, then masking the shapes was done in Inkscape. [Croc Refrence](https://lirp.cdn-website.com/de903b7f/dms3rep/multi/opt/Croc+Exhibit+1-640w.jpg)
- Otter: Digitally painted by me in Krita. [Otter](https://fergusonmuseum.org/wp-content/uploads/2020/03/River-Otter-tKoerner-USFWS.jpg)
- Bad Omen Logo: Made by me in Inkscape.
- Santa: The image of a Santa decoration from Zoo Miami was taken by me, the edited version was also made by me years ago with Android built-in image editing tools.
- Festus PNG (Gibbon): [Zoo Miami](https://www.zoomiami.org/media-news/posts/celebrating-an-iconic-primate)
- Backgrounds: I don't think the game is as meaningful without real pictures of the Zoo and it's animals. If I were in Miami, I could have taken them myself, but instead they were found in these locations: [parking](https://floridaphoenix.com/wp-content/uploads/2023/11/Miami-Wilds-proposed-site-credit-Bat-Conservation-International.jpg), [front](https://happyfamilyblog.com/wp-content/uploads/2016/08/IMG_9149.jpg), [otters](https://pbs.twimg.com/media/Dn3XrcbXoAUNBJb.jpg), [crocs](https://www.zoochat.com/community/media/florida-mission-everglades-american-crocodile-exhibit.457965/), [tigers](https://www.flickr.com/photos/9549670@N05/52569553421), [gibbons](https://www.youtube.com/watch?v=cOR7v_3HsQ0), [giraffes](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fps2mhhv1DHM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=126eb4eb03a0bfa821e0436b81013f9abe9340222682d79dce5328c0e936ff40), [gift shop](https://www.zoomiami.org/zoo-gift-shop)
- Audio: [Siamang](https://www.youtube.com/watch?v=sM1jEhsY0ww), [Croc/Giraffe Chomp](https://commons.wikimedia.org/wiki/File:Dragon_bite.ogg), [Santa Droning](https://commons.wikimedia.org/wiki/File:En-Santa_Claus.ogg)
- Flamingo: `🦩` unicode emoji
- Lettuce: `🥬` unicode emoji


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
