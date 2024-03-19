<p align="center">
  <img src="./assets/images/icon.png" alt="SimulateResearch" width="300" height="300" />
</p>
<h1 align="center">
  SimulateResearch
</h1>

<div align="center">
  <img src="https://img.shields.io/depfu/dependencies/github/gustavoerivero/SimulateResearch" alt="dependencies" />
  <img src="https://img.shields.io/node/v/react-native" alt="node version" />
  <img src="https://img.shields.io/github/repo-size/gustavoerivero/SimulateResearch" alt="project size" />
  <img src="https://img.shields.io/github/package-json/v/gustavoerivero/SimulateResearch" alt="project version" />
  <img src="https://img.shields.io/github/license/gustavoerivero/SimulateResearch" alt="project license" />
  <img src="https://img.shields.io/github/contributors/gustavoerivero/SimulateResearch" alt="project collabs" />
  <img src="https://img.shields.io/github/last-commit/gustavoerivero/SimulateResearch" alt="project last commit" />
  <img src="https://img.shields.io/github/languages/count/gustavoerivero/SimulateResearch" alt="project languages" />
  <img src="https://img.shields.io/github/languages/top/gustavoerivero/SimulateResearch" alt="project major language percent" />
</div>

<div align="center">
  <table>
      <tr>
          <!-- Do not translate this table -->
          <td><a href="./README.md"> Inglés </a></td>
          <td><a href="./README-ES.md"> Español </a></td>
      </tr>
  </table>
</div>

**Simulate Research** es una aplicación para dispositivos Android desarrollada en *React Native* mediante el framework *Expo*. Esta aplicación fue desarrollada con el propósito de cumplir el proyecto sobre *Simulaciones* para la asignatura *Investigación de Operaciones III* de la Universidad Centroccidental "Lisandro Alvarado" en Venezuela.

SimulateResearch es una aplicación que permite hacer simulaciones siguiendo la Teoría de Colas según el área de Investigación de Operaciones, siendo más específicos, con modelos M/M/1/k.

## Estructura

SimulateResearch consta de dos pantallas principales; Home y Calculator.

### Home

La pantalla inicial de la aplicación. En ella se puede observar un encabezado con la información de los desarrolladores del proyecto, seguido de un componente que permite visualizar la documentación asociada a dicho proyecto.

### Calculator

Esta pantalla corresponde al formulario dado para realizar la simulación en dicha aplicación. Este formulario posee tres (3) campos de texto, los cuales solo admiten valores numéricos mayores a cero (0) y menores o iguales a nueve mil novecientos noventa y nueve (9999). Cada campo corresponde a lo siguiente:
* **Tasa de llegada de clientes:** Es el número promedio de clientes que llegan al sistema por unidad de tiempo. Generalmente expresado como "λ" (lambda).
* **Tasa de servicio:** Es el número promedio de clientes que el servidor puede atender por unidad de tiempo. Suele expresarse como "µ" (my).
* **Tamaño de cola:** Es el número máximo de clientes que pueden estar en el sistema al mismo tiempo. Se expresa como "k".

Asimismo, para los campos de textos de la Tasa de llegada de clientes y la Tasa de servicio, se dispone de botones con un ícono de dados. Estos botones permiten asignar valores aleatorios a dicho campo. Por otra parte, el campo de texto para el Tamaño de cola posee un botón con ícono del símbolo de infinito. Este botón permite asignar el valor máximo (9999) a la variable del tamaño de cola.
