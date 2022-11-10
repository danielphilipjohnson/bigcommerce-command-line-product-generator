<div align="center">
  <h1 align="center">Bigcommerce command line product generator</h1>
  <p>Generate Fake Bigcommerce products to json files.</p>  
</div>
<br>

[![GitHub Actions](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fatrox%2Fsync-dotenv%2Fbadge)](https://actions-badge.atrox.dev/daniel-philip-johnson/generate-dummy-bigcommerce-products-sdk/goto)

## Description

This tool gives an interactive command line tool, that allows you to generate fake Bigcommerce products and writes them to json files.

## Installation

Stable version:

```bash
$ npm install -g bigcommerce-command-line-product-generator
```

## Usage

### Tool output

```bash
Usage: generate-products <command> [options]

Options:
      --version     Show version number                                   [boolean]
  -f, --file        File to save too                                      [required]
  -a, --amount      Amount of products to write to json file [number]     [default: 10]
  -files, --files   Amount of product files to make in json [number]      [default: 10]
  -h, --help        Show help                                             [boolean]

Examples:
  generate-products -f foo.json --amount 16 --files 6     generate bigcommerce products to json

```

### Simple Example

```bash
$ generate-products -f foo.json --amount 16 --files 1
The file was saved!

$ generate-products -f foo.json --amount 16
Only creates one file by default

$ generate-products -f foo.json
Only creates one file by default and generates 10 products by default

```
