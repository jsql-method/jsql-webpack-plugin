# jsql-webpack-plugin

Oprogramowanie opracowane przez firmę JSQL Sp. z o.o. w ramach prowadzonego projektu:

Opracowanie nowej metody procesu tworzenia oprogramowania poprzez optymalizację architektury warstwowej typu klient-serwer
Spółka JSQL sp. z.o.o. bierze udział w programie realizując projekt pt.:

“Opracowanie nowej metody procesu tworzenia oprogramowania poprzez optymalizację architektury warstwowej typu klient-serwer”

współfinansowanym przez Unię Europejską ze środków Regionalnego Programu Operacyjnego Województwa Zachodnipomorskiego 2014-2020

Oś priorytetowa 1 Gospodarka, Innowacje, Nowoczesne Technologie.
Działanie: 1.1. Projekty badawczo-rozwojowe przedsiębiorstw
Typ projektu 2

Projekty badawczo-rozwojowe przedsiębiorstw wraz z przygotowaniem do wdrożenia w działalności gospodarczej
Wartość Projektu: 1 380 501,67 PLN
Wkład Funduszy Europejskich: 1 090 679,25 PLN

Zakres i cel Projektu:
Przedmiotem Projektu jest opracowanie nowej metody procesu tworzenia oprogamowania poprzez optymalizację architektury warstwowej typu klient-serwer, dzięki której uzyskane zostaną znaczące ułatwienia oraz optymalizacje na wszystkich płaszczyznach tworzenia oraz utrzymywania oprogramownia, m.in. zmniejszony koszt zasobów ludzkich, zmniejszony koszt utrzymywania projektu, zmniejszona ilość kodu źródłoweog projektu, możliwości przesunięcia zasobów na inne projekty.

Proces badawczy składa się z 4 etapów/Zadań badawczych:
1. Opracowanie modelu teoretycznego nowej metody tworzenia oprogramowania JSQL
2. Eksperymenty badawcze – badania nad nową metodą tworzenia oprogramowania JSQL
3. Budowa i demonstracja prototypu nowej metody tworzenia oprogramowania JSQL

=====================


A simple webpack plugin to change sql queries to hash. Required version of webpack 4 or higher.

### Usage

```
npm install jsql-webpack --save-dev
```
Then in webpack.config.js

```
var jsqlWebpackPlugin = require('jsql-webpack');
```
and webpack.config.js plugin section with options

```
plugins: [
  new jsqlWebpackPlugin(
      {
          apiKey: '',
          src: '',
          dist: '',
          watcher: ''
      }
  )
]
```
