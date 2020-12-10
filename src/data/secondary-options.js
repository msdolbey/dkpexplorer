export const secondaryOptions = {

  apply: [
    {
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy apply',
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
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy check',
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
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy init',
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
      value: 'view-service-account',
      label: 'and create a kubeconfig for the cluster for certain namespaces',
      usage: 'konvoy view serviceaccount-kubeconfig <serviceaccount-namespace>',
      nb: 'replace <serviceaccount-namespace> with the namespace of your serviceaccount',
    },
    {
      value: 'view-service-account-verbose',
      label: 'and create a kubeconfig for the cluster for certain namespaces and enable debug level logging',
      usage: 'konvoy view serviceaccount-kubeconfig <serviceaccount-namespace> --verbose',
      nb: 'replace <serviceaccount-namespace> with the namespace of your serviceaccount',
    },
  ],
};
