// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Editor")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings,Widgets,Themes")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Company Info")
                .child(
                  S.document()
                    .schemaType("siteInfo")
                    .documentId("siteInfo")
                    .title("Edit")
                ),
              S.listItem()
                .title("Widgets")
                .child(
                  S.document()
                    .schemaType("widgets")
                    .documentId("widgets")
                    .title("Edit")
                ),
              S.listItem()
                .title("Header & Footer")
                .child(
                  S.document()
                    .schemaType("headerFooter")
                    .documentId("headerFooter")
                    .title("Edit")
                ),
              S.listItem()
                .title("Theme")
                .child(
                  S.document()
                    .schemaType("themes")
                    .documentId("themes")
                    .title("Edit")
                ),
            ])
        ),
      S.divider(),
      // Site Pages go here
      S.listItem()
        .title("Site Pages")
        .child(
          S.list()
            .title("Pages")

            .items([
              S.listItem()
                .title("Landing Page")
                .child(
                  S.document()
                    .schemaType("index")
                    .documentId("index")
                    .title("Edit")
                ),
              S.listItem()
                .title("Contact Page")
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                    .title("Edit")
                ),
              // Inner list of Pages.  This is /services
            ])
        ),
    ]);
