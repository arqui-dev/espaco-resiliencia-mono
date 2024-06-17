import {defineField, defineType} from 'sanity'

export const unitType = defineType({
  name: 'unitList',
  title: 'Unidade',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
        name: 'adress',
        title: 'Endereço',
        type: 'string',
      }),
    defineField({
        name: 'gmaps',
        title: 'Google Maps',
        type: 'url',
      }),
    defineField({
        name: 'phone',
        title: 'Telefone',
        type: 'string',
      }),
    defineField({
        name: 'whatsapp',
        title: 'URL do Whatsapp',
        type: 'url',
      }),
    defineField({
        name: 'photo',
        title: 'Foto da Unidade',
        type: 'image',
      })
  ],
})