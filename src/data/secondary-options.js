export const secondaryOptions = {

  apply: [
    {
      value: 'yes',
      label: 'Update kubeconfig and activate',
      usage: 'konvoy apply kubeconfig [flags]',
      nb: 'Updates kubeconfig and activate the current context with the installed cluster.'
          + '\n\n --force-overwrite flag overwrites the existing user/context/cluster entries in local kubeconfig'
    }
  ],

  completion: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy completion',
    }
  ],

  check: [
    {
      value: 'addons',
      label: 'Run checks on the addons',
      usage: 'konvoy check addons',
    },
    {
      value: 'kubernetes',
      label: 'Run checks on the cluster components',
      usage: 'konvoy check kubernetes',
    },
    {
      value: 'nodes',
      label: 'Run checks on the nodes',
      usage: 'konvoy check nodes',
    },
    {
      value: 'preflight',
      label: 'Run checks to validate machines are ready for installation',
      usage: 'konvoy check preflight',
    }
  ],

  diagnose: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy diagnose -y',
    }
  ],

  deploy: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy deploy -y',
    }
  ],

  generate: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy generate',
    }
  ],

  init: [
    {
      value: 'default',
      label: 'with default values',
      usage: 'konvoy init',
    },
    {
      value: 'addons-repositories',
      label: 'with specific addon repositories',
      usage: 'konvoy init --addons-repositories repo1,repo2',
      nb: 'Provide a comma separated list of addons repositories with uri@version (default [https://github.com/mesosphere/kubeaddons-kommander@stable-1.18-1.2.0,https://github.com/mesosphere/kubeaddons-dispatch@stable-1.18-1.3.0,https://github.com/mesosphere/kubernetes-base-addons@stable-1.18-3.0.0])'
    },
    {
      value: 'cluster-name',
      label: 'with a cluster name',
      usage: 'konvoy init --cluster-name <clustername>',
      nb: 'Provide a name that will be used to prefix the cluster and all the created resources. The default value if not provided is "konvoy".'
    },
    {
      value: 'provisioner',
      label: 'with a non-default provisioner type',
      usage: 'konvoy init --provisioner <aws|azure|gcp|docker|none>',
      nb: 'The default value if not provided is "aws".'
    },
    {
      value: 'verbose',
      label: 'with logs',
      usage: 'konvoy init --verbose',
      nb: 'Enables debug level logging'
    }
  ],

  provision: [
    {
      value: 'default',
      label: 'with default values',
      usage: 'konvoy provision',
    },
    {
      value: 'yes',
      label: 'without further prompting',
      usage: 'konvoy provision --yes'
    },
    {
      value: 'force-push',
      label: 'and force push the cluster state',
      usage: 'konvoy provision --force-push'
    },
    {
      value: 'force-reduce-control-plane',
      label: 'and allow a reduction of number of control plane nodes',
      usage: 'konvoy provision --force-reduce-control-plane'
    },
    {
      value: 'plan-only',
      label: 'and show planned changes but not actually provision',
      usage: 'konvoy provision --plan-only'
    },
    {
      value: 'skip-provisioning-retry',
      label: 'and skip retrying the provisioning stage in case of errors',
      usage: 'konvoy provision --skip-provisioning-retry'
    },
    {
      value: 'skip-state-upload',
      label: 'and skip uploading the state to the Kubernetes cluster',
      usage: 'konvoy provision --skip-state-upload'
    },
    {
      value: 'addons-repositories',
      label: 'with specific addon repositories',
      usage: 'konvoy provision --addons-repositories repo1,repo2',
      nb: 'Provide a comma separated list of addons repositories with uri@version (default [https://github.com/mesosphere/kubeaddons-kommander@stable-1.18-1.2.0,https://github.com/mesosphere/kubeaddons-dispatch@stable-1.18-1.3.0,https://github.com/mesosphere/kubernetes-base-addons@stable-1.18-3.0.0])'
    },
    {
      value: 'cluster-name',
      label: 'with a cluster name',
      usage: 'konvoy provision --cluster-name <clustername>',
      nb: 'Provide a name that will be used to prefix the cluster and all the created resources. The default value if not provided is "konvoy".'
    },
    {
      value: 'provisioner',
      label: 'with a non-default provisioner type',
      usage: 'konvoy provision --provisioner <aws|azure|gcp|docker|none>',
      nb: 'The default value if not provided is "aws".'
    },
    {
      value: 'verbose',
      label: 'with logs',
      usage: 'konvoy provision --verbose',
      nb: "Enables debug level logging"
    }
  ],

  pull: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy pull',
    }
  ],

  push: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy push',
    }
  ],

  reset: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy reset',
    }
  ],

  up: [
    {
      value: 'default',
      label: 'with default values',
      usage: 'konvoy up',
      nb: 'Runs provision and deploy (kubernetes, container-networking, and addons) to create or update a Kubernetes cluster reflecting the provided configuration and inventory files.'
    },
    {
      value: 'yes',
      label: 'without further prompting',
      usage: 'konvoy up --yes'
    },
    {
      value: 'addons-repositories',
      label: 'with specific addon repositories',
      usage: 'konvoy up --addons-repositories repo1,repo2',
      nb: 'Provide a comma separated list of addons repositories with uri@version (default [https://github.com/mesosphere/kubeaddons-kommander@stable-1.18-1.2.0,https://github.com/mesosphere/kubeaddons-dispatch@stable-1.18-1.3.0,https://github.com/mesosphere/kubernetes-base-addons@stable-1.18-3.0.0])'
    },
    {
      value: 'cluster-name',
      label: 'with a cluster name',
      usage: 'konvoy up --cluster-name <clustername>',
      nb: 'Provide a name that will be used to prefix the cluster and all the created resources. The default value if not provided is "konvoy".'
    },
    {
      value: 'provisioner',
      label: 'with a non-default provisioner type',
      usage: 'konvoy up --provisioner <aws|azure|gcp|docker|none>',
      nb: 'The default value if not provided is "aws".'
    },
    {
      value: 'verbose',
      label: 'with logs',
      usage: 'konvoy up --verbose',
      nb: "Enables debug level logging"
    },
    {
      value: 'force-push',
      label: 'and force push the cluster state',
      usage: 'konvoy up --force-push'
    },
    {
      value: 'force-reduce-control-plane',
      label: 'and allow a reduction of number of control plane nodes',
      usage: 'konvoy up --force-reduce-control-plane'
    },
    {
      value: 'upgrade',
      label: 'and run an upgrade on all nodes requiring an upgrade',
      usage: 'konvoy up --upgrade'
    },
    {
      value: 'force-upgrade',
      label: 'and run an upgrade on all control-plane and worker nodes if needed, ignoring upgrade safety checks',
      usage: 'konvoy up --force-upgrade'
    },
    {
      value: 'max-parallel-nodes',
      label: 'and set the number of nodes to upgrade in parallel',
      usage: 'konvoy up --max-parallel-nodes <numnodes>',
      nb: 'This can be an integer or a percentage of a nodePool. Set to 1 to run serially (requires --upgrade or --force-upgrade flag) (default "15%").'
    },
    {
      value: 'target-node-pools',
      label: 'and provide target node pools',
      usage: 'konvoy up --target-node-pools <targetnode1,targetnode2>',
      nb: 'Provide a comma-separated list of target node pools.'
    },
    {
      value: 'skip-provisioning-retry',
      label: 'and skip retrying the provisioning stage in case of errors',
      usage: 'konvoy up --skip-provisioning-retry'
    },
    {
      value: 'skip-state-upload',
      label: 'and skip uploading the state to the Kubernetes cluster',
      usage: 'konvoy up --skip-state-upload'
    },
    {
      value: 'skip-credentials-display',
      label: 'and skip displaying the admin credentials after the install',
      usage: 'konvoy up --skip-credentials-display'
    },
    {
      value: 'with-checks',
      label: 'and execute checks after each deployment step',
      usage: 'konvoy up --with-checks'
    },
    {
      value: 'without-addons',
      label: 'and skip installing the addons',
      usage: 'konvoy up --without-addons'
    },
    {
      value: 'without-auto-provisioning',
      label: 'and skip installing the auto provisioner',
      usage: 'konvoy up --without-auto-provisioning'
    },
  ],

  preflight: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy check preflight',
    }
  ],

};
