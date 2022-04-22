export default {
  name: 'socialMedia',
  title: 'SocialMedia',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
