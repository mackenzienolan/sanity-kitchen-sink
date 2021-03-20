export default {
  widgets: [
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
                  buildHookId: '6056796efc8a06f2e344c2eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pvgk1z88',
                  apiId: '1165e68e-e4cc-469c-a1b3-98fd51925e9a'
                },
                {
                  buildHookId: '6056796ed60627e0c838a0b5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2pjxadq7',
                  apiId: 'b672da7e-7d6f-4350-b9df-00d50c3bf1d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mackenzienolan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2pjxadq7.netlify.app', category: 'apps'}
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
