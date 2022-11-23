/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: '.'},
  // ],

  // But you can create a sidebar manually

  tutorialSidebar: [
    // 'intro',

    // 'About',
    {
      type: 'category',
      label: 'Grove',
      items: [
        'Grove/Grove',
        'Grove/Grove_System',
        'Grove/Grove_A'
      ],
    
    },

    {
      type: 'category',
      label: 'Platform',
      items: 
      [
        {
          type: 'category',
          label: 'reTerminal',
          items: 
          [
            'Platform/reTerminal/reTerminal',
            'Platform/reTerminal/reTerminal-FAQ',
            {
              type: 'category',
              label: 'Home_Assistant',
              items: 
              [
                
                'Platform/reTerminal/Home_Assistant/reTerminal_Home_Assistant',

              ],
            },

          ],
        },
        {
          type: 'category',
          label: 'SeeedStudio XIAO',
          items: 
          [
            {
              type: 'category',
              label: 'SeeedStudio XIAO ESP32C3',
              items: 
              [

                'Platform/SeeedStudio XIAO/SeeedStudio XIAO ESP32C3/XIAO_ESP32C3_Getting_Started'

              ],
            },
            {
              type: 'category',
              label: 'SeeedStudio XIAO nRF52840',
              items: 
              [

                'Platform/SeeedStudio XIAO/SeeedStudio XIAO nRF52840/XIAOEI'

              ],
            }
          ],
        
        },
  
      ],
    
    },

    'About',
    'License',
    
  ],

};

module.exports = sidebars;
