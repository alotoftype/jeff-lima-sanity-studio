import S from "@sanity/desk-tool/structure-builder"


export default () => 
    S.list()
      .title("Base")
      .items(
        [
          S.listItem()
            .title('Settings')
            .child(
              S.document()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
          S.divider(),
          S.listItem()
            .title('Contact Information')
            .child(
              S.document()
               .schemaType('contact')
               .documentId('contact')
            ),
          ...S.documentTypeListItems().filter(item => !['siteSettings', 'contact'].includes(item.getId()))
        ]
        
      )