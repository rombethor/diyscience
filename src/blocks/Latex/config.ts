import type { Block } from 'payload'

export const Latex: Block = {
  slug: 'latex',
  interfaceName: 'LatexBlock',
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
      label: 'Display as a block',
    },
  ],
}