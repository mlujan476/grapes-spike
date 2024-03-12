
export const GrapesConfig2 = () => {

    return {
      container: "#editor",
      fromElement: true,
      width: "auto",
      height: "auto",
      storageManager: false,
      /* plugins: ["gjs-block-basic"],
      pluginsOpts: {
        "gjs-blocks-basic": {}
      }, */
      
      blockManager: {
        



         appendTo: "#blocks",
         blocks: [
          
          {
            id: 'header-with-logo',
            label: "Header w/Logo",
            content: `
            <div style="width: 800px; margin: auto; display: flex; flex-direction: row; padding: 0px"><img src="../../public/echo-logo.png"/></div>
            `,
          },

          {
            id: 'banner-image',
            label: "Banner Image",
            content: `
            <div style="width: 800px; margin: auto; justify-content: center; align-items: center; display: flex; flex-direction: row; padding: 0px"><img src="../../public/banner-genderequity.png"/></div>
            `,
          },

          {
            id: 'heading-h1',
            label: "H1",
            content: `
            <h1 style="width: 800px; margin: auto; padding: 0px; font-family: helvetica, sans-serif;">Important New Gender Initiative</h1>
            `,
          },
          {
            id: 'heading-h2',
            label: "H2",
            content: `
            <h3 style="width: 800px; margin: auto; padding: 0px; font-family: helvetica, sans-serif;">Important New Gender Initiative</h3>
            `,
          },
          {
            id: 'flexbox-h',
            label: "Flex Row Container",
            content: `
            <div style="width: 800px; margin: auto; min-height: 50px; gap: 40px;  align-items: center; display: flex; flex-direction: row; padding: 0px"></div>
            `,
          },

          {
            id: 'flexbox-v',
            label: "Flex V Container",
            content: `
            <div style="width: auto; height: auto; margin: auto; min-height: 50px; gap: 40px;  align-items: center; display: flex; flex-direction: row; padding: 0px">Flexbox Column</div>
            `,
          },

          {
            id: 'bulleted-list',
            label: "Bulleted List",
            content: `
            <div style=" padding: 0px 40px; margin: auto; font-family: helvetica, sans-serif;">
              <h2>List Heading</h2>
              <ul style="width:300px; font-family: helvetica, sans-serif; min-height: 50px; padding: 0px">
              <li>Add_to_List</li>
            </ul>
            </div>
            
            `,
          },

          

          {
            id: 'paragraph',
            label: "Paragraph",
            content: `
            <p style="width: 500px;  font-family: helvetica, sans-serif; min-height: 50px; padding: 0px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel erat vel leo vulputate euismod at at enim. Proin blandit neque id bibendum pretium. Aenean finibus vel neque sit amet ultricies. Nullam sollicitudin interdum volutpat. Nullam faucibus felis lacus, ac pretium lorem facilisis nec.s</p>
            `,
          },





          
        ]

      }, 
      layerManager: {
        appendTo:"#layer-container"
      }, 
      styleManager: {
        appendTo: "#style-view"
      },
      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: ""

          },
          {
            name: "Mobile",
            width: "320px",
            widthMedia: "480px"

          }
        ]
      },
      panels: {
        defaults: [
          {
            id: "basic-actions",
            el: ".panel__basic-action",
            buttons: [
             {
               id: "visibility",
               active: true,
               className: "btn-toggle-borders",
               label: "<i class='bi bi-border'>button1</i>",
               command: "sw-visibility"
             },
             
            ]
          },
          {
            id: "panel-devices",
            el:'.panel__devices',
            buttons: [
              {
                id: "device-desktop",
                label: "<i class='bi bi-laptop'>button2</i>",
                command: "set-device-desktop",
                active: true,
                togglable: false,
              },
              {
                id: "device-mobile",
                label: "<i class='bi bi-phone'>button3</i>",
                command: " set-device-mobile",
                togglable: false,
              }
            ]
           }
        ]
      }
       
    }
}

export interface IBlock {
  label: string
  content: string | object
  media: string
  category: string
  activate: boolean
  select: boolean
  resetId: boolean
  disable: boolean
  onClick: () => void
  attributes: object
}

export interface IBlockManagerConfig {
  appendTo?: HTMLElement | string
  blocks?: BlockProperties[]
  
}