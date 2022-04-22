export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'resume',
      title: 'Resume Link',
      type: 'file',
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
