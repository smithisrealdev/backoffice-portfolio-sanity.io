export default {
    name: 'componentPage',
    title: 'Component Page',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'number',
      },
      {
        name: 'url',
        title: 'Url',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'detail',
        title: 'Detail',
        type: 'text',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      {
        name: 'tool',
        title: 'Tool',
        type: 'array',
        of: [{type: 'reference', to: {type: 'toolList'}}],
      },
    ],
  }