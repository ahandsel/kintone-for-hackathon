---
theme: /
favicon: ./Kintone/KDP_favicon.png
layout: image
image: ./Kintone/Red_Background_Right.png
download: true
fonts:
  sans: Nunito-ExtraBold
  serif: Nunito Sans
  mono: Fira Code
---

<div class="mb-4 absolute top-10 left-100" style="text-align:right;">
    <div class="text-7xl text-white text-opacity-100" style="font-weight:500;" >
      Kintone <light-icon icon="settings"/>
    </div>
    <div><br></div>
    <div class="text-7xl text-white text-opacity-100" style="font-weight:600;" >
      Your Project's
    </div>
    <div><br></div>
    <div class="text-7xl text-white text-opacity-100" style="font-weight:600;" >
      Web Database <light-icon icon="database"/>
    </div>
    <div><p></p></div>

  </div>

<div class="absolute bottom-5 right-12">
  <div class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center">
    <a
      href="https://kintone.dev/"
      target="_blank"
      alt="Kintone Developer Program"
      class="!hover:text-white">
      Kintone Developer Program  <light-icon icon="book" size="24px"/>
    </a>
  </div>
  <div class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center">
    <a
      href="https://ahandsel.github.io/kintone-for-hackathon/"
      target="_blank"
      alt="GitHub"
      class="!hover:text-white">
      Slide deck  <light-icon icon="brand-github" size="24px"/>
    </a>
  </div>
  <span @click="$slidev.nav.next" class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center">
    Press Space for the next page  <light-icon icon="arrow-narrow-right" size="24px"/>
  </span>
</div>


---
layout: basic
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Hi from Kintone <light-icon icon="mood-smile"/>
  <br><br>
</div>


<table style="table-layout:fixed; text-align: center;user-select:all;">
  <thead>
    <tr>
      <th style="text-align: center;font-size:30px;">Elias Bezanis</th>
      <th style="text-align: center;font-size:30px;">Erica Butts</th>
      <th style="text-align: center;font-size:30px;">Genji Fujimori</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%" style="font-size:25px;">Sales Engineering</td>
      <td width="25%" style="font-size:25px;">Sales Engineering</td>
      <td width="25%" style="font-size:25px;">Developer Advocate</td>
    </tr>
    <tr>
      <td><br><img src="/kintone_for_hackathons/EliasBezanis.png" alt="Pic of EliasBezanis" style="width: 60%;margin-left: auto;margin-right: auto;"></td>
      <td><br><img src="/kintone_for_hackathons/EricaButts.png" alt="Pic of EricaButts" style="width: 60%;margin-left: auto;margin-right: auto;"></td>
      <td><br><img src="/kintone_for_hackathons/GenjiFujimori.png" alt="Pic of GenjiFujimori" style="width: 60%;margin-left: auto;margin-right: auto;"></td>
    </tr>
  </tbody>
</table>

<!--
### Erica Butts
* Sales Engineer at Kintone
* Gradate student of Software Engineering at NJIT
* Based in Brooklyn NY
* Passionate about space and technology.

### Elias Bezanis
* Sales Engineer at Kintone
* Graduated from the University of Colorado, Boulder with a Computer Science degree in 2017.
* Based in Chicago IL
* Passionate about video games, cooking, & space!
* At Kintone, I work on a daily basis with clients and prospects to implement their needs on our platform.

### Genji Fujimori
* Developer Advocate at Kintone
* Graduated from UC Santa Cruz
* Based in Tokyo, JP
* Passionate about hiking & economics!
-->

---
layout: my-two-columns
---

<br><br>

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;user-select:text;" >
  Your Hackathon's Web Database <light-icon icon="sitemap"/>
</div>

::left::

<br>

## Use Kintone to
## **store** incoming data or
## **manage** outgoing data! <light-icon icon="tools"/>

![Kintone exchanging data from a smartphone](/kintone_for_hackathons/Kintone_DataExchange.png)

::right::

<br>

## Kintone allows you to
## build **Web Databases**
## quickly & easily! <light-icon icon="tool"/>

<br>

![Kintone exchanging data from a smartphone](/kintone_for_hackathons/Fast_Database.png)

<!--
### Slide 2
-->

---
layout: image-left
image: ./kintone_for_hackathons/Traditional_Database.png
equal: true
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Traditional Databases <light-icon icon="mood-sad"/>
  <br><br>
</div>


#### Needs **high-level understanding** of databases

<br>

#### **Servers** need to be **constantly running** & maintained to be accessed

<!--
### Slide 3
-->

---
layout: image-right
image: ./kintone_for_hackathons/Build_App_Demo.gif
equal: true
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Kintone Databases <light-icon icon="mood-happy"/>
  <br><br>
</div>

#### Databases are created with intuitive **drag-&-drop** GUI

<br>

#### **No servers need** to be set up by the user

<!--
### Slide 4
-->

---
layout: my-two-columns
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Access Kintone DBs via the Browser <light-icon icon="browser"/>
</div>

::left::

# Use the GUI to:
* ## Create Databases <light-icon icon="database"/>
* ## View / Add / Edit Records <light-icon icon="folders"/>
* ## Update Database schema <light-icon icon="edit"/>
* ## Upload JS Customizations <light-icon icon="code"/>

::right::

![Build a Kintone App from YOUR_SUBDOMAIN.kintone.com](/kintone_for_hackathons/Kintone_From_Browser.png)

<!--
### Slide 5
-->

---
layout: image-center
image: ./kintone_for_hackathons/Kintone_RESTAPI_Flow.png
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Access Kintone DBs via REST API <light-icon icon="server"/>
  <br><br>
</div>

<!--
### Slide 6
-->

---
layout: basic
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Get Started <light-icon icon="bolt"/>
</div>

<br>

<table style="table-layout:fixed; text-align: center;user-select:all;">
  <thead>
    <tr>
      <th style="text-align: center;font-size:20px;">Get a Free Kintone Subdomain</th>
      <th style="text-align: center;font-size:20px;">Get Started Guide</th>
      <th style="text-align: center;font-size:20px;">YouTube Channel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%" style="font-size:20px;"><a href="https://bit.ly/KDP_NEW">bit.ly/KDP_NEW</a></td>
      <td width="25%" style="font-size:20px;"><a href="https://bit.ly/KDP_HACK2">bit.ly/KDP_HACK2</a></td>
      <td width="25%" style="font-size:20px;"><a href="https://www.youtube.com/c/KintoneDeveloperProgram">@KintoneDeveloperProgram</a></td>
    </tr>
    <tr>
      <td><img src="/Kintone/QRCode_New_Icon.png" alt="QR Code for bit.ly/KDP_NEW"></td>
      <td><img src="/kintone_for_hackathons/QRCode_Hack2_Icon.png" alt="QR Code for bit.ly/KDP_HACK2"></td>
      <td><img src="/Kintone/QRCode_Video_Icon.png" alt="QR Code for youtube.com/c/KintoneDeveloperProgram"></td>
    </tr>
  </tbody>
</table>

<!--
### Slide 6
-->

---
layout: image
image: ./Kintone/Red_Background_Right.png
---

<div class="mb-4 absolute top-10 left-40" style="text-align:center;margin-right: 20px;">
  <p><br></p>
  <div class="text-7xl text-white text-opacity-100" style="font-weight:500;" >
    Win the Kintone Prize! <light-icon icon="settings"/>
  </div>
  <div class="text-3xl text-white text-opacity-100" style="font-weight:500;" >
    <br>
    The team that <strong>best</strong> uses Kintone in their project wins!
    <br><br>
    Each member of the winning team will get a prize!
    <br><br>
  </div>
  <div class="left-48">
    <br>
    <img src="/kintone_for_hackathons/Prize.png" alt="Kintone Prize, Bottles, backpacks, PopSockets, & more!" style="width: 50%;display:block;margin-left: 350px;margin-right: auto;">
  </div>
</div>

<!--
### Slide 8
-->

---
layout: basic
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Where to get help? <light-icon icon="help"/>
</div>

<br>

Here are some resources to help you use Kintone as your project's database!

<br>

<table style="table-layout:fixed; text-align: center;user-select:all;">
  <thead>
    <tr>
      <th style="text-align: center;font-size:20px;">Slack's Kintone Channel</th>
      <th style="text-align: center;font-size:20px;">Kintone Developer Forum</th>
      <th style="text-align: center;font-size:20px;">Mentor Office Hour!</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%" style="font-size:20px;"><a href="https://app.slack.com/client/T03TG34FY4Q/C043601TL6L">#kintone-questions</a></td>
      <td width="25%" style="font-size:20px;"><a href="https://forum.kintone.dev/">forum.kintone.dev</a></td>
      <td width="25%" style="font-size:20px;"><a href="https://drive.google.com/file/d/1VTanH7NjSpea9Baay-s2hOYV_tqDsk0M/view?usp=sharing">Info slides</a></td>
    </tr>
    <tr>
      <td><img src="/kintone_for_hackathons/NASA_Hack_2022_Slack_Icon.png" alt="Screenshot of Kintone Questions Slack Channel"></td>
      <td><img src="/Kintone/QRCode_Forum_Icon.png" alt="QR Code for Kintone Developer Forum"></td>
      <td style="text-align: left;font-size:30px;">
      <p>2x Office Hour</p>
        <li>Sat, Oct 1 - 1 PM </li>
        <li>Sun, Oct 2 - 10 AM</li>
        <br><br>
      </td>
    </tr>
  </tbody>
</table>
