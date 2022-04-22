export default {
    name: 'toolList',
    title: 'ToolList',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  