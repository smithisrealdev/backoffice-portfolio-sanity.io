export default {
    name: 'experaince',
    title: 'Experaince',
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
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'detailJob',
        title: 'Detail',
        type: 'text',
      },
    ],
  }