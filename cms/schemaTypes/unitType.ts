import {defineField, defineType} from 'sanity'

export const unitType = defineType({
  name: 'unitList',
  title: 'Unidade',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'endereco',
        type: 'string',
      }),
    defineField({
        name: 'gmaps',
        type: 'url',
      }),
    defineField({
        name: 'telefone',
        type: 'string',
      }),
    defineField({
        name: 'whatsapp',
        type: 'url',
      })
  ],
})