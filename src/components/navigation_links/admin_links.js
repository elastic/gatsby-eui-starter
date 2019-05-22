export const AdminLinks = [
  {
    label: "Admin",
    iconType: "managementApp",
    flyoutMenu: {
      title: "Tools and settings",
      listItems: [
        {
          label: "Dev tools",
          href: "/#/layout/nav-drawer",
          iconType: "devToolsApp",
          extraAction: {
            color: "subdued",
            iconType: "starEmpty",
            iconSize: "s",
            "aria-label": "Add to favorites",
          },
        },
        {
          label: "Stack Monitoring",
          href: "/#/layout/nav-drawer",
          iconType: "monitoringApp",
          extraAction: {
            color: "subdued",
            iconType: "starEmpty",
            iconSize: "s",
            "aria-label": "Add to favorites",
          },
        },
        {
          label: "Stack Management",
          href: "/#/layout/nav-drawer",
          iconType: "managementApp",
          extraAction: {
            color: "subdued",
            iconType: "starEmpty",
            iconSize: "s",
            "aria-label": "Add to favorites",
          },
        },
      ],
    },
  },
]
