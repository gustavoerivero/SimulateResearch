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
          <td><a href="./README.md"> English </a></td>
          <td><a href="./README-ES.md"> Spanish </a></td>
      </tr>
  </table>
</div>

**Simulate Research** is an application for Android devices developed in *React Native* using the *Expo* framework. This application was developed with the purpose of fulfilling the project on *Simulations* for the subject *Operations Research III* of the Universidad Centroccidental "Lisandro Alvarado" in Venezuela.

SimulateResearch is an application that allows to make simulations following the Queuing Theory according to the Operations Research area, being more specific, with M/M/1/k models.

## System

SimulateResearch consists of two main screens and a results screen.

### Home

The initial screen of the application. Here there is a header with the project developers' information, followed by a component that allows you to view the documentation associated with the project.

### Calculator

This screen corresponds to the form given to perform the simulation in this application. This form has three (3) text fields, which only allow numeric values greater than zero (0) and less than or equal to nine thousand nine hundred ninety-nine (9999). Each field corresponds to the following:

* **Customer Arrival Rate (Tasa de llegada de clientes):** The average number of customers arriving to the system per unit of time. Generally expressed as "λ" (lambda).
* **Service rate (Tasa de servicio):** The average number of customers that the server can serve per unit of time. Usually expressed as "µ" (my).
* **Queue size (Tamaño de cola):** It is the maximum number of clients that can be in the system at the same time. It is expressed as "k".

Also, for the Customer Arrival Rate and Service Rate text fields, there are buttons with a dice icon. These buttons allow random values to be assigned to the field. Furthermore, the text field for Queue Size has a button with an infinity symbol icon. This button allows you to assign the maximum value (9999) to the queue size variable.

Below the text fields for the variables with which the simulation is run, three buttons are displayed:

* **Clear (Limpiar):** Allows to clear the text fields of the variables. It is deactivated when the simulation is running.
* **Calculate (Calcular):** Starts or resumes the simulation. It is deactivated when the simulation is running.
* **Stop (Detener):** Stops the simulation. It is activated when the simulation is running.

The simulation results are shown below:

* **Current time:** Value representing the iteration the simulation is in. Value expressed in the time unit of minutes.
* **Queue size:** Value that represents the number of "customers" waiting to be "served".
* **Customers served:** Value that indicates the number of "customers" that have already been "served" by the system.
* **Average waiting time:** Corresponds to the result of dividing the waiting time by the number of customers served. The waiting time is an auxiliary variable used inside the system, it corresponds to the accumulated "time" value when the system is "attending" each "client".

After these values, the **Finish (Finalizar)** button follows, which is only enabled when a simulation has been started.

### Results

This page shows the results obtained by the simulation. For this purpose, it has two graphs and a table.

* **Chart of customers in queue (Clientes en cola):** This chart shows the number of customers who remained in queue before being served by the system.
* **Chart of customers served (Clientes atendidos):** This chart shows the number of customers who have been served.
* **Data table by iteration (Tabla de datos por iteración):** This table illustrates in each of its rows the time (Tiempo) (in minutes), the number of customers who were in queue before being served (Clientes en cola), the number of customers served for the time elapsed (Clientes atendidos), the average waiting time per customer (Media de espera) and the total number of customers (Total clientes), which represents the sum between customers in queue and customers served.
