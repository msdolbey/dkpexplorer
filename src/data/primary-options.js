const options = [
  { value: 'adopt', label: 'adopt a Konvoy 1 cluster' },  
  { value: 'check', label: 'check, one of [cluster]' },
  { value: 'completion', label: 'generate the autocompletion script for the specified shell' },
  { value: 'create', label: 'create one of [bootstrap (resources), cluster]' },
  { value: 'delete', label: 'delete one of [bootstrap (resources), cluster, nodepool]' },
  { value: 'describe', label: 'describe one of [cluster]' },
  { value: 'get', label: 'get one of [kubeconfig, nodepools]' },
  { value: 'help', label: 'help about any command' },
  { value: 'move', label: 'move controllers and objects from one cluster to the other' },
  { value: 'prepare-to-adopt', label: 'prepare to adopt a Konvoy 1 cluster' },
  { value: 'scale', label: 'scale one of [nodepool]' },
  { value: 'update', label: 'update one of [bootstrap (resources)]' },
  { value: 'version', label: 'version for dkp' }
];

export const primaryOptions = options;
// export const primaryOptions = options.sort((x, y) => {
//   if (x.value < y.value) {
//     return -1;
//   }
//   if (x.value > y.value) {
//     return 1;
//   }
//   return 0;
// });
