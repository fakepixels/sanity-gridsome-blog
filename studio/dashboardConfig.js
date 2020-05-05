export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1dc239882a57ff6946b17',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-e6igub7u',
                  apiId: '06034692-799c-41be-97fe-3748c6ba51ce'
                },
                {
                  buildHookId: '5eb1dc23a26c788f7d0909d4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-g6p43wtw',
                  apiId: '07dcd511-dc92-417d-b630-f7e91d62ff1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fakepixels/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-g6p43wtw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
