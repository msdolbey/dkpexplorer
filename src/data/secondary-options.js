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

  create: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy create',
    }
  ],

  cordon: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy cordon',
    }
  ],

  config: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy config',
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

  diff: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy diff',
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

  destroy: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy destroy -y',
    }
  ],

  drain: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy drain -y',
    }
  ],

  get: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy get',
    }
  ],

  generate: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy generate',
    }
  ],

  image: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy image',
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
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy provision',
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

  scale: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy scale',
    }
  ],
  uncordon: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy uncordon',
    }
  ],
  up: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy up -y'
    },
  ],

  view: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy view',
    }
  ],

  preflight: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy check preflight',
    }
  ],

};
