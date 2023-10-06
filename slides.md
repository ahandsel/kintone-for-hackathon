---
theme: /
favicon: ./kintone-graphics/KDP_favicon.png
layout: image
image: ./kintone-graphics/kintone-background-v2.svg
title: Start Hacking with Kintone Web Database
exportFilename: slides-kintone-for-hackathon
export:
  format: pdf
  timeout: 30000
  withToc: true
presenter: true
download: true
highlighter: prism
lineNumbers: false
monaco: dev
remoteAssets: true
selectable: true
record: true
routerMode: history
aspectRatio: 16/9
canvasWidth: 980
themeConfig:
  primary: '#008080'
  dark: '#038378'
  darker: '#076E65'
  darkest: '#065A53'
  light: '#10B5A7'
  lighter: '#0CCABA'
  lightest: '#06E5D2'
fonts:
  sans: M PLUS Rounded 1c
hideInToc: true
---

<div class="mb-4 absolute top-15 left-45" style="text-align: right">
  <div class="text-7xl text-white text-opacity-100" style="font-weight: 600">
    Kintone Web Database
  </div>
  <div><br /></div>
  <div class="text-6xl text-white text-opacity-100" style="font-weight: 600">
    Your Project's Backend <solar-database-bold />
  </div>
  <div><br /><br /></div>
  <div
    class="text-2xl text-white text-opacity-100"
    style="font-weight: 600; line-height: 2"
  >
    <a href="https://github.com/ahandsel">Genji Fujimori</a>, Developer Advocate
  </div>
</div>

<div
  class="absolute bottom-15 right-12"
  style="
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  "
>
  <div
    class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center"
    align="center"
    style="flex: 1; padding-right: 20px"
  >
    <a
      href="https://ahandsel.github.io/kintone-for-hackathon/"
      target="_blank"
      alt="kintone-for-hackathon Slide Deck"
    >
      Slides <ri:slideshow-line />
    </a>
  </div>
  <div>
    <a
      href="https://ahandsel.github.io/kintone-for-hackathon/"
      target="_blank"
      alt="kintone-for-hackathon Slide Deck"
    >
      <img
        src="/kintone-graphics/qrcode_slidedeck.png"
        alt="QR Code for kintone-for-hackathon Slide Deck"
        style="
          height: 125px;
          display: flex;
          margin-left: auto;
          margin-right: auto;
        "
      />
    </a>
  </div>
</div>
<div class="absolute bottom-7 right-12">
  <div
    @click="$slidev.nav.next"
    class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center"
  >
    Press Space for the next page <heroicons-solid-arrow-narrow-right />
  </div>
</div>

<!--
Hi everyone! Let's go over why you WANT to use Kintone as a web database for YOUR hackathon project!
-->

---
layout: image-right-bar
image: ./kintone-graphics/Animal_6_flip.png
hideInToc: true
---

# Table of Contents <mdi-table-of-contents />

<toc />


---
layout: my-two-columns
title: Hi from Kintone <mdi-hand-wave-outline/>
---

<div class="text-5xl text-primary dark:text-light top-1" style="font-weight:500;" >
  Hi from Kintone <mdi-hand-wave-outline/>
  <br><br>
</div>

::left::

<div align="center">

## Erica Butts
### Sales Engineering

<br>

<img src="/kintone-graphics/EricaButts.png" alt="Pic of Erica Butts" style="width: 60%;margin-left: auto;margin-right: auto;">

</div>

::right::

<div align="center">

## Genji Fujimori
### Developer Advocate

<br>

<img src="/kintone-graphics/genji-clear.png" alt="Pic of Genji Fujimori" style="width: 60%;margin-left: auto;margin-right: auto;">

</div>

<!--
### Erica Butts
* Sales Engineer at Kintone
* Graduate student of Software Engineering at NJIT
* Based in Brooklyn, NY
* Passionate about space and technology.

### Genji Fujimori
* Developer Advocate at Kintone
* Graduated from UC Santa Cruz
* Based in Tokyo, JP
* Passionate about hiking & economics!
-->

---
layout: simple
---

# Why Use Kintone in My Project? <fluent-emoji-high-contrast-thinking-face />

<br>
<spam class="text-2xl text-primary text-opacity-100" style="font-weight:600;line-height: 3">Free</spam> - Kintone is completely free for developers. No credit card required!
<br>

<spam class="text-2xl text-primary text-opacity-100" style="font-weight:600;line-height: 3">Easy</spam> - Easiest way to setup a web database for your project! No server to setup!
<br>

<spam class="text-2xl text-primary text-opacity-100" style="font-weight:600;line-height: 3">Quick</spam> - Build a web app quickly with just HTML & JS!
<br>

<spam class="text-2xl text-primary text-opacity-100" style="font-weight:600;line-height: 3">Resources</spam> - Ask Kintone staff for help! Lots of videos & articles to refer to!
<br>


---
layout: my-two-columns
---

# Store Your Data in Kintone Web Database <solar-database-bold />

<br>

::left::

## Create & Configure Databases Easily

* No need to set up a server
* Simple GUI to setup the database

<br>

![Kintone exchanging data from a smartphone](/kintone-graphics/Fast_Database.png)

::right::


## Simple to exchange data with Kintone

* Lots of API endpoints to interact with your data
* Type safety built-in

<br>

![Kintone exchanging data from a smartphone](/kintone-graphics/Kintone_DataExchange.png)

<!--
### Slide 2
-->

---
layout: my-two-columns
---

# Traditional vs. Kintone Databases <icons8-idea />

<br>

::left::

## Traditional Databases <bx-sad />

Requires a high-level understanding of databases

Servers need to be constantly running & maintained to be accessed

<br>
<div  ></div>
<img src="/kintone-graphics/Traditional_Database.png" alt="Traditional_Database.png" style="width: 330px;margin-left: auto;margin-right: auto;" >

::right::

## Kintone Databases <bx-happy />

Databases are created with intuitive drag-&-drop GUI

No servers set up required

<br>

<img src="/kintone-graphics/Build_App_Demo.gif" alt="Build_App_Demo.gif" style="width: 330px;margin-left: auto;margin-right: auto;">

<!--
### Slide 4
-->

---
layout: image-right
image: ./kintone-graphics/Example_SpaceInvaders.gif
equal: true
title: Example - Space Invaders <mdi-space-invaders />
---

# Space Invaders <mdi-space-invaders />

Created by [@will_yama](https://twitter.com/will_yama) & [@ahandsel](https://github.com/ahandsel/) - [Article](https://dev.to/will_yama/having-fun-with-phaser-io-games-web-databases-4f08)

Run a [Space Invaders game](https://phaser.io/examples/v2/games/invaders) on a Kintone App!

Game specifications (number of aliens, aliens' health, etc.) are specified as Kintone records.

High scores can also be stored in Kintone.


---
layout: image-right
image: ./kintone-graphics/Example_Samurai.gif
equal: true
title: Example - IoT Samurai Swords <tabler-slice />
---

# IoT Samurai Swords <tabler-slice />
Created by [@RyBB](https://github.com/RyBB) - [Article](https://dev.to/will_yama/kintone-at-maker-faire-tokyo-2020-215k)

Users are challenged to slice their enemies as quickly as possible with a samurai sword!

* Sensor records the sword action speed
* Kintone hosts the game, scoreboard, & IoT data
* Doll's magnetic head falls off when the user wins


---
layout: image-right-bar
image: ./kintone-graphics/Example_flowerpot-bar.gif
title: Example - Hibotan / Flowerpot Project <mdi-robot-outline />
---

# Hibotan / Flowerpot Project <mdi-robot-outline />
Created by [Nobuyuki Furukawa](https://protopedia.net/prototyper/nobuyukifurukawa) - [ヒボたん](https://peraichi.com/landing_pages/view/hibotan)

* A moving flowerpot that uses **Kintone as the backend** to store sensor data.
* Sensors are attached to a [mbed microcontroller](https://os.mbed.com/handbook/mbed-Microcontrollers) & periodically send data to Kintone via Node.js.
* Node.js checks Kintone’s sensor values over time and controls the motors of the flowerpot.
* The flowerpot moves to a sunnier place.

<!--
* Goal: Make attendees feel like super fast anime samurais
* Sword: magnet sensors to detect in & out motion speed
* doll with electric magnet to have its head fall off
* 2 M5Stick microcontrollers were used for sword & doll
* The score ranking displayed information stored in the Kintone App, where scores of participants were automatically recorded via REST API after they finished playing the game.
-->

---
layout: image-right
equal: true
image: ./kintone-graphics/Kintone_New.png
title: Get your Kintone <mdi-server />
---

# Get your free Kintone Web Database <mdi-server />

## Go to [Kintone.dev/new](https://Kintone.dev/new)!

<br>

Fill out the Developer License Registration form for your free Kintone Subdomain!

* ✅ Use Chrome or Firefox ( _NOT Safari_ )
* ⚡ Accept Cookies First
* 🚧 Only use lowercase, numbers, and hyphens (-) for subdomain names
* Ex: weekend-hacker4life


---
layout: image-left-bar
image: ./kintone-graphics/Animal_3.png
---

<div class="text-5xl text-primary dark:text-light top-1" style="font-weight:500;user-select:all;" >
  Where to get help?
</div>

<br>

Here are some resources to help you use Kintone as your project's database!

| <mdi-bookshelf />              | [kintone.dev](https://kintone.dev/)                                          | Read API Docs & Tutorials |
| ------------------------------ | ---------------------------------------------------------------------------- | ------------------------- |
| <mdi-lifebuoy />               | [forum.kintone.dev](https://forum.kintone.dev/)                              | Post Questions            |
| <mdi-youtube />                | [@KintoneDeveloperProgram](https://www.youtube.com/@KintoneDeveloperProgram) | Watch Tutorials           |
| <mdi-human-greeting-variant /> | Ask Kintone mentors                                                          | Office Hours & Discord    |


---
layout: image-left-bar
image: ./kintone-graphics/Animal_10.png
title: Kintone Prize <mdi-trophy-variant />
---

<div class="text-5xl text-primary dark:text-lightest top-1" style="font-weight:500;user-select:text;" >
  Kintone Prize <mdi-trophy-variant />
</div>

<br>

## Win the Best Use of Kintone Prize!

Every member of the winning team will get $100 gift cards and swag! <mdi-cash />

<br>

#### All teams that used Kintone will get swag!

We want to thank all those who used Kintone in their projects!

<br>

# <material-symbols-water-bottle /> <mdi-tennis-ball /> <mdi-pen /> <mingcute-hat-2-fill /> <mdi-tag /> <mdi-usb /> <mdi-battery-charging-high />

<!--
Last slide
-->

---
layout: my-two-columns
title: Kintone Prize Judging <mdi-court-hammer/>
---

<div class="text-5xl text-primary dark:text-light top-1" style="font-weight:500;" >
  Kintone Prize Judging <mdi-court-hammer/>
  <br><br>
</div>

::left::

<div align="center">

## Judge - Genji Fujimori

<br>

<img src="/kintone-graphics/genji-clear.png" alt="Pic of Genji Fujimori" style="width: 60%;margin-left: auto;margin-right: auto;">

</div>

::right::

## Judging Criteria

1. How well Kintone was used in the project?

    * _What Kintone features were used?_

2. How technically challenging the Kintone implementation was?

    * _What Kintone APIs were used?_


---
layout: image
image: ./background/fatty-corgi-Zn5chZcnFRA-unsplash.png
---

<div class="mb-4" style="text-align: center;">
  <div class="text-7xl text-primary text-opacity-100" style="font-weight: 600; align-items: center; text-align: center;">
    Any Questions <mdi-help-circle-outline />
  </div>
</div>

<div
  class="absolute bottom-40 left-15"
  style="
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  "
>
  <div
    class="p-1 rounded flex justify-center items-center text-primary"
    align="center"
    style="flex: 1; padding-right: 20px; align-items: left;"
  >
    <a
      href="https://ahandsel.github.io/kintone-for-hackathon/"
      target="_blank"
      alt="kintone-for-hackathon Slide Deck"
    >
      Slides <ri:slideshow-line />
    </a>
  </div>
</div>
<div
  class="absolute bottom-5 left-5"
  style="
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  "
>
  <div
    class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center"
    align="center"
    style="flex: 1; padding-right: 20px; align-items: left;"
  >
  </div>
  <div>
    <a
      href="https://ahandsel.github.io/kintone-for-hackathon/"
      target="_blank"
      alt="kintone-for-hackathon Slide Deck"
    >
      <img
        src="/kintone-graphics/qrcode_slidedeck.png"
        alt="QR Code for kintone-for-hackathon Slide Deck"
        style="
          height: 125px;
          display: flex;
          margin-left: auto;
          margin-right: auto;
        "
      />
    </a>
  </div>
</div>
