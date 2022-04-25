export default {
    name: 'backEnd',
    title: 'BackEnd',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'number',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  