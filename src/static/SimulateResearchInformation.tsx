const SimulateResearchInformation = {
  appTitle: "SimulateResearch",
  modelUsed: "M/M/1/k",
  lambda: {
    title: "Tasa de llegada de clientes",
    description: `Es el número promedio de clientes que llegan al sistema por unidad de tiempo. Generalmente expresado como "λ" (lambda).`
  },
  mu: {
    title: "Tasa de servicio",
    description: `Es el número promedio de clientes que el servidor puede atender por unidad de tiempo. Suele expresarse como "µ" (my).`
  },
  queueSize: {
    title: "Tamaño de cola",
    description: `Es el número máximo de clientes que pueden estar en el sistema al mismo tiempo. Se expresa como "k".`
  },
  considerations: {
    infiniteStable: {
      title: `Si λ = µ`,
      description: `La cola será estable y el tamaño de la cola tenderá a infinito.`
    },
    unstable: {
      title: `Si λ > µ`,
      description: `La cola será inestable y el tamaño de la cola tenderá a infinito.`
    },
    stableFinite: {
      title: `Si λ < µ`,
      description: `La cola será estable y el tamaño de la cola tendrá un valor finito.`
    }
  },
  systemConsiderations: {
    first: {
      title: `Tasas`,
      description: `Tanto la tasa de llegadas como la tasa de servicio ya se interpretan dentro del sistema bajo la unidad de tiempo de horas.`
    },
    second: {
      title: `Método de transformada inversa`,
      description: `Se hace uso de este método para determinar el tiempo que tendrá un "cliente" siendo atendido en el sistema haciendo uso de la tasa de servicio.`
    }
  }
};

export default SimulateResearchInformation;