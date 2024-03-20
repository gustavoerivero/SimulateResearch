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

## Sistema

SimulateResearch consta de dos pantallas principales y una de resultados.

### Home

La pantalla inicial de la aplicación. En ella se puede observar un encabezado con la información de los desarrolladores del proyecto, seguido de un componente que permite visualizar la documentación asociada a dicho proyecto.

### Calculator

Esta pantalla corresponde al formulario dado para realizar la simulación en dicha aplicación. Este formulario posee tres (3) campos de texto, los cuales solo admiten valores numéricos mayores a cero (0) y menores o iguales a nueve mil novecientos noventa y nueve (9999). Cada campo corresponde a lo siguiente:

* **Tasa de llegada de clientes:** Es el número promedio de clientes que llegan al sistema por unidad de tiempo. Generalmente expresado como "λ" (lambda).
* **Tasa de servicio:** Es el número promedio de clientes que el servidor puede atender por unidad de tiempo. Suele expresarse como "µ" (my).
* **Tamaño de cola:** Es el número máximo de clientes que pueden estar en el sistema al mismo tiempo. Se expresa como "k".

Asimismo, para los campos de textos de la Tasa de llegada de clientes y la Tasa de servicio, se dispone de botones con un ícono de dados. Estos botones permiten asignar valores aleatorios a dicho campo. Por otra parte, el campo de texto para el Tamaño de cola posee un botón con ícono del símbolo de infinito. Este botón permite asignar el valor máximo (9999) a la variable del tamaño de cola.

Posterior a los campos de texto para las variables con las que se ejecuta la simulación, se muestran tres botones:

* **Limpiar:** Permite vaciar los campos de texto de las variables. Se desactiva cuando la simulación se está ejecutando.
* **Calcular:** Inicia o reanuda la simulación. Se desactiva cuando la simulación se está ejecutando.
* **Detener:** Detiene la simulación. Se activa cuando la simulación se está ejecutando.

Seguidamente, se muestra los resultados de la simulación:

* **Tiempo actual:** Valor que representa la iteración en la que se encuentra la simulación. Valor expresado en la unidad de tiempo de minutos.
* **Tamaño de la cola:** Valor que representa la cantidad de "clientes" que se encuentran a espera de ser "atendidos".
* **Clientes atendidos:** Valor que indica la cantidad de "clientes" que ya fueron "atendidos" por el sistema.
* **Tiempo promedio de espera:** Corresponde al resultado de la división realizada entre el tiempo de espera entre la cantidad de clientes atendidos. El tiempo de espera es una variable auxiliar utilizada en el interior del sistema, corresponde al valor de "tiempo" acumulado cuando el sistema está "atendiendo" a cada "cliente".

Luego de estos valores, sigue el botón de **Finalizar**, el cual solo se habilita cuando una simulación se ha iniciado.

### Resultados

Esta página muestra los resultados obtenidos por la simulación. Para ello, dispone de dos gráficos y de una tabla.

* **Gráfico de clientes en cola:** Este gráfico muestra la cantidad de clientes que permanecieron haciendo cola antes de ser atendidos por el sistema.
* **Gráfico de clientes atendidos:** Este gráfico muestra la cantidad de clientes que han sido atendidos
* **Tabla de datos por iteración:** Esta tabla ilustra en cara una de sus filas el tiempo (en minutos) la cantidad de clientes que estaban en cola antes de ser atendidos, la cantidad de clientes atendidos para el tiempo transcurrido, el tiempo media de espera por cliente y la cantidad total de clientes, lo que representa la suma entre los clientes en cola y los clientes atendidos.

## Autores 💻

*  @gustavoerivero  - [gustavoerivero](https://github.com/gustavoerivero)
*  @Warloy - [Warloy](https://github.com/Warloy)


---
⌨️ hecho con ❤️ por [Flamethyst] 
