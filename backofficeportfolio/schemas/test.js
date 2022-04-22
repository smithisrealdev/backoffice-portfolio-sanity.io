export default {
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialMedia',
      title: 'SocialMedia',
      type: 'array',
      of: [{type: 'reference', to: {type: 'socialMedia'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'about.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {about} = selection
      return Object.assign({}, selection, {
        subtitle: about && `by ${about}`,
      })
    },
  },
}
