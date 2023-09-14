# Your Hackathon's Web Database
Kintone Developer Program
developer.kintone.io

## Overview

* What is Kintone?
* How to Use Kintone?
* Hackathon Use Cases
* Benefits of Hacking with Kintone
Kintone is a cloud platform that creates Web Databases ridiculously quickly & easily

## Traditional Databases

Needs high level understanding of databases
Servers need to be constantly running & maintained to be accessed

## Kintone Database

Databases are created with intuitive drag-and-drop GUI
No servers need to be set up by the user

## Kintone Use Cases

NASA’s Goddard Space Flight Center currently uses Kintone for:
* Inventory Management
* Invoicing
* Resource Planning
* Purchasing

## Nothing to install when using Kintone

* Submit a form
* Access Kintone via emailed link

## Access Kintone database data via

* Web Browsers
* REST API

## Access Kintone DBs via the Browser

Use the GUI to:
* Create Databases
* View/Add/Edit Records
* Update Database schema
https:// YOUR_SUBDOMAIN .kintone.com/...

## Access Kintone DBs via REST API

```shell
$ curl
-X GET
'<https://{YOUR_SUBDOMAIN}.kintone.com/k/v1/records.json?app>={ DB1 }'
-H 'X-Cybozu-API-Token: { API_TOKEN }’
...
{
" country " : " India ",
" year " : " 2018 ",
" population " : " 1353000000 "
}
...
```

## How do You Use Kintone in Hackathons?

Developers often use Kintone to store incoming data, or for managing data that will be displayed on the hackathon app’s UI

## Hackathon Use Case 1

Hibotan - A moving flowerpot that uses Kintone as the backend to store sensor data.
I’m searching for a sunny place!

## Hackathon Use Case 2

A Point of Sale (POS) system using Flutter for the mobile interface & Kintone as the backend for storing inventory data.
* Updates inventory data
* Responds latest inventory data
* Mobile POS system

## Hackathon Use Case 3

An auto TV channel changer using Kintone to store & identify Twitter trends.
1. Streaming API
2. Raspberry Pi
3. Record data to Kintone
4. Retrieve trending channels
5. Custom Remote Controls

## Win the Kintone API Prize

We will be giving out a special swag bundle for each member of the winning team!
