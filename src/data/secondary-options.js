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
      value: 'yes',
      label: 'without further prompts',
      usage: 'konvoy view',
    }
  ],

};
