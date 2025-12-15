import type { Block } from 'payload';

export const Latex: Block = {
  slug: 'Latex',
  interfaceName: 'Latex',
  fields: [
    {
      name: 'latex',
      type: 'textarea',
      required: true,
    },
    {
      name: 'displayMode',
      type: 'checkbox',
      defaultValue: false,
    }
  ]
};