<header>

<div align="center">
<div style="font-size:60px;margin-bottom:-25px;">💎</div>
<h1 align="center">CrystalPay-SDK</h1>

<a href="https://github.com/deadshumz/crystalpay-sdk">
	<img src="https://img.shields.io/github/languages/top/deadshumz/crystalpay-sdk?style=flat-square&logo=github" alt="GitHub top language" />
</a>

</div>

</header>

## Introduction

The CrystalPay-SDK is a TypeScript SDK for the CrystalPay payment system. It provides a convenient way to integrate CrystalPay's payment functionality into your TypeScript projects.


### Features

- Convenient integration of CrystalPay's payment functionality into TypeScript projects.
- TypeScript SDK for the CrystalPay payment system.
- Provides a convenient way to integrate CrystalPay's payment functionality into your projects.

### Example

```ts
import CrystalPay from 'crystalpay-sdk'

const CrystalPay = new CrystalPay(process.env.LOGIN, process.env.SECRET);

console.log(CrystalPay.Me.getInfo())
```

## Getting started

### Telegram token

To use the [CrystalPay API](https://docs.crystalpay.io/),
you first have to get a login and secret
by [chatting with CrystalPay Bot](https://t.me/CrystalPAY_bot).

### Installation

```shellscript
$ npm install crystalpay-sdk
```

### `CrystalPay` class

[`CrystalPay`] instance represents interface for interacting with api.

