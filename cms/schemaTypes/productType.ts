import {defineField, defineType} from 'sanity'

export const productType = defineType({
    name: 'productList',
    title: 'Produto',
    type: 'document',
    fields: [
        defineField({
        name: 'name',
        title: 'Nome',
        type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Pagina',
            type: 'url',
        }),
        defineField({
            name: 'photo',
            title: 'Capa',
            type: 'image',
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{type: 'professionalList'}],
        }),
    ],
    })