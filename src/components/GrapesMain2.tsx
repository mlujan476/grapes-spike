import { grapesjs } from 'grapesjs';
//import 'grapesjs/dist/css/grapes.min.css';
import { useEffect, useState } from 'react';
import { GrapesConfig2 } from '../config/GrapesConfig2';
import styled from 'styled-components'
import "../App.css"
import Logo from "../assets/ProjectECHO_CutOutLogo-01.png"




const SContainer = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 300px auto 300px;
    grid-template-rows:  40px  auto  100px;
    grid-template-areas:
    "sidebar header aux"
    "sidebar canvas panel"
    "sidebar footer footer";
`
const SCanvas = styled.div`
    grid-area: canvas;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;

`
const SSidebar = styled.div`    
    height: auto;
    width: 300px;
    height: 100%;
    grid-area: sidebar;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    align-items: center;
    
`
const SLogo = styled.img`
    width: 150px;
    height: auto;
    
`
const SButton = styled.button`
    border: 1px solid #007a86;
    width: 100%;
    height: 30px;
    background-color: transparent;
    color: #007a86;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
    border-radius: 4px;
    margin-top: 40px;

    &:hover{
        background-color: #a8f8ff2c;
    }

    &:active{
        background-color: #00c9db2c;
    }
`
const SBlocks = styled.div`

    width: 100%;
    height: auto;
    margin: 40px;
`
const SHeader = styled.div`
  
    height: 100%;
    width: 100%;
    background-color: #ffdbdb;
    padding:0;
    margin: 0;
    display: flex;
    flex-direction: row;
`
const SFooter = styled.div`

    height: 100%;
    width: 100%;
    background-color: #d3aad3;
    grid-area: footer;

`
const SPanelRight = styled.div`
    
    height: 100%;
    width: 100%;
    background-color: #aad3b9;
    grid-area: panel;
`
const SAuxMenu = styled.div`

    height: 100%;
    width: 100%;
    background-color: #d4d4ff;
    grid-area: aux;
`


const GrapesMain2 = () => {

    useEffect(() => {

        const initGrapes = () => {
            loadGrapes()

        }

        return initGrapes
    }, [])
    

    const loadGrapes = async () => {
        const editor = grapesjs.init(GrapesConfig2())
        loadComponents(editor)
    
    }

    

    const loadComponents = (editor: any) => {
        editor.BlockManager.add('my-block-id-5', {
            // ...
            content: {
                tagName: 'div',
                draggable: true,
                label: 'Heading betch',
                attributes: { 'id': 'my-block-yo' },
                components: [
                    {
                        title: 'Head b',
                        tagName: 'span',
                        content: '<b>Some static content</b>',
                        label: 'yo'
                    }
                ]
            }
        })
        
         /* editor.Panels.addPanel({
            id: 'panel-top',
            el: '.panel__top',
        });
        editor.Panels.addPanel({
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
                {
                    id: 'visibility',
                    active: true, // active by default
                    className: 'btn-toggle-borders',
                    label: '<u>B</u>',
                    command: 'sw-visibility', // Built-in command
                }, {
                    id: 'export',
                    className: 'btn-open-export',
                    label: 'Exp',
                    command: 'export-template',
                    context: 'export-template', // For grouping context of buttons from the same panel
                }, {
                    id: 'show-json',
                    className: 'btn-show-json',
                    label: 'JSON',
                    context: 'show-json',
                    command(editor: any) {
                        editor.Modal.setTitle('Components JSON')
                            .setContent(`<textarea style="width:100%; height: 250px;">
                      ${JSON.stringify(editor.getComponents())}
                    </textarea>`)
                            .open();
                    },
                }
            ],
        }); */
        /*editor.Commands.add('set-device-desktop', {
            run: (editor: any) => editor.setDevice('Desktop')
        });
        editor.Commands.add('set-device-mobile', {
            run: (editor: any) => editor.setDevice('Mobile')
        });
        editor.Commands.add('set-device-tablet', {
            run: (editor: any) => editor.setDevice('Tablet')
        });
        editor.Commands.add('show-traits', {
            getTraitsEl(editor: any) {
                const row = editor.getContainer().closest('.editor-row');
                console.log("row: ", row)
                return row.querySelector('.traits-container');
            },
            run(editor: any, sender: any) {
                this.getTraitsEl(editor).style.display = '';
            },
            stop(editor: any, sender: any) {
                this.getTraitsEl(editor).style.display = 'none';
            },
        }); */
        
    }

    const addNewPage = () => {
        console.log('Add new page')
    }

    




    return (
        <SContainer>
            <SHeader className="panel__devices"></SHeader>

            <SSidebar>
              <SLogo src={Logo}/>
              <SButton onClick={addNewPage}>Add New Page</SButton>
              <SBlocks id="blocks"></SBlocks>
            </SSidebar>

            <SCanvas id="editor">
                
            </SCanvas>
            <SAuxMenu>aux</SAuxMenu>

            <SPanelRight>SPanelRight</SPanelRight>

            <SFooter>Footer</SFooter>
            
        </SContainer>
    )
}

export default GrapesMain2