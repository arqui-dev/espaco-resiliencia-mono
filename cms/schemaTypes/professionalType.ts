import {defineField, defineType} from 'sanity'

export const professionalType = defineType({
  name: 'professionalList',
  title: 'Profissional',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
        name: 'specialty',
        title: 'Especialidade',
        type: 'string',
      }),
    defineField({
        name: 'register',
        title: 'Registro',
        type: 'string',
      }),
    defineField({
        name: 'description',
        title: 'Descrição',
        type: 'text',
      }),
    defineField({
        name: 'photo',
        title: 'Foto',
        type: 'image',
      })
  ],
})