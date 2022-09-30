---
theme: /
layout: image
favicon: ./Kintone/KDP_favicon.png
image: ./Kintone/Red_Background_Right.png
download: true
fonts:
  # basically the text
  sans: 'Nunito-ExtraBold'
  # use with `font-serif` css class from windicss
  serif: 'Nunito Sans'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
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
      Web Database
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

<!--
### Slide 1
-->

---
layout: my-two-columns
---

<br><br>

<div class="text-4xl text-primary dark:text-primary top-1" style="font-weight:500;user-select:text;" >
  Your Hackathon's Web Database <i class="light-icon-sitemap"></i>
</div>

::left::

<br>

## Use Kintone to
## **store** incoming data or
## **manage** outgoing data! <i class="light-icon-tools"></i>

![Kintone exchanging data from a smartphone](/kintone_for_hackathons/Kintone_DataExchange.png)

::right::

<br>

## Kintone allows you to
## build **Web Databases**
## quickly & easily! <i class="light-icon-tool"></i>

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
  Traditional Databases <i class="light-icon-mood-sad"></i>
  <br><br>
</div>


#### Needs **high level understanding** of databases

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
  Kintone Databases <i class="light-icon-mood-happy"></i>
  <br><br>
</div>

#### Databases are created with intuitive **drag-&-drop** GUI

<br>

#### **No servers need** to be set up by the user


<!--
### Slide 4
-->

---
layout: image-right
image: ./kintone_for_hackathons/Kintone_From_Browser.png
equal: true
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Access Kintone DBs via the Browser <i class="light-icon-browser"></i>
  <br><br>
</div>

#### Use the GUI to:
* #### Create Databases
* #### View/Add/Edit Records
* #### Update Database schema

<!--
### Slide 5
-->

---
layout: image-center
image: ./kintone_for_hackathons/Kintone_RESTAPI_Flow.png
---

<div class="text-5xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Access Kintone DBs via REST API <i class="light-icon-server"></i>
  <br><br>
</div>

<!--
### Slide 6
-->

---

<div class="text-3xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Get Started <i class="light-icon-bolt"></i>
</div>

<br>

<table style="table-layout:fixed; text-align: center;user-select:all;">
  <thead>
    <tr>
      <th style="text-align: center;">Get Your Free Kintone Subdomain</th>
      <th style="text-align: center;">Get Started Guide</th>
      <th style="text-align: center;">YouTube Channel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%"><a href="https://bit.ly/KDP_NEW">bit.ly/KDP_NEW</a></td>
      <td width="25%"><a href="https://bit.ly/KDP_HACK2">bit.ly/KDP_HACK2</a></td>
      <td width="25%"><a href="https://www.youtube.com/c/KintoneDeveloperProgram">@KintoneDeveloperProgram</a></td>
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

<div class="text-3xl text-primary dark:text-primary top-1" style="font-weight:500;" >
  Where to get help? <i class="light-icon-help"></i>
</div>

Here are some resources to help you use Kintone as your project's database!

<table style="table-layout:fixed; text-align: center;user-select:all;">
  <thead>
    <tr>
      <th style="text-align: center;">Slack's Kintone Channel</th>
      <th style="text-align: center;">Kintone Developer Forum</th>
      <th style="text-align: center;">Mentor Office Hour!</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%"><a href="https://app.slack.com/client/T03TG34FY4Q/C043601TL6L">#kintone-questions</a></td>
      <td width="25%"><a href="https://forum.kintone.dev/">forum.kintone.dev</a></td>
      <td width="25%"><a href="https://drive.google.com/file/d/1VTanH7NjSpea9Baay-s2hOYV_tqDsk0M/view?usp=sharing">Info slides</a></td>
    </tr>
    <tr>
      <td><img src="/kintone_for_hackathons/NASA_Hack_2022_Slack_Icon.png" alt="QR Code for blog.kintone.io"></td>
      <td><img src="/Kintone/QRCode_Forum_Icon.png" alt="QR Code for tech.cybozu.io"></td>
      <td style="text-align: left;">
        <li>Sat - 1 PM Office Hour</li>
        <li>Sun - 10 AM Office Hour</li>
      </td>
    </tr>
  </tbody>
</table>
