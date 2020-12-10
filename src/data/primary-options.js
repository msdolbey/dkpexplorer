const options = [
  { value: 'init', label: 'create a provision and deploy configuration' },  
  { value: 'provision', label: 'provision the nodes according to the provided Terraform variables file' },
  { value: 'create', label: 'create a new node pool in the cluster configuration' },
  { value: 'preflight', label: 'validate machines are ready for installation' },
  { value: 'up', label: 'create or update a Kubernetes cluster' },
  { value: 'check', label: 'check on the health of the cluster' },
  { value: 'get', label: 'get cluster related information' },
  { value: 'config', label: 'manage installation related configuration' },
  { value: 'apply', label: 'update konvoy cluster configuration in kubeconfig file' },  
  { value: 'deploy', label: 'deploy a fully functioning Kubernetes cluster and addons' },
  { value: 'diagnose', label: 'creates a diagnostics bundle of the cluster' },
  { value: 'scale', label: 'changes the node pool\'s number of machines in the cluster configuration' },
  { value: 'drain', label: 'drain pods from machines managed by konvoy' },
  { value: 'cordon', label: 'mark nodes as unschedulable' },
  { value: 'uncordon', label: 'Marks nodes in the node pool as schedulable' },  
  { value: 'destroy', label: 'destroy cluster resources' }, 
  { value: 'view', label: 'view various artifacts' },  
  { value: 'generate', label: 'generates artifacts' },
  { value: 'pull', label: 'pull cluster state' },
  { value: 'push', label: 'push cluster state' },
  { value: 'reset', label: 'reset any modifications to the nodes made by the installer, and cleanup file artifacts' },  
  { value: 'diff', label: 'print the difference between two resources' },  
  { value: 'completion', label: 'check the output of the shell completion code for the specified shell (bash or zsh)' },  
  { value: 'image', label: 'run Konvoy CLI images related actions' },  
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
