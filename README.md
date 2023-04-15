![KyrinChan_Badge](https://raw.githubusercontent.com/KyrinChan/KyrinChan_Adapter/v2/.github/images/kyrinchan.png)
<div align=center> <h1>KyrinChan Adapter🌸</h1> </div>

KyrinChan_Adapter is a NewBing chat support interface based on JavaScript, which allows you to use NewBing for artificial intelligence conversations in Yunzai-Bot. It has the following features:

- Support single-person continuous conversation Conversation, support joining other people's conversations in group chat
- Support question and answer screenshot and chat record export
- Support AI personality setting customization
- Support docking vits answer directly to voice
- Call Microsoft's new Bing interface for conversation

## Prerequisites

To use this plugin, you need to meet the following conditions:

- Be able to use NewBing normally on the Bing webpage and set a valid Bing login Cookie
- Have a Yunzai-Bot instance and install the chatgpt-plugin plugin
- Have a vits API address, which can be obtained from [duplicate space](https://huggingface.co/spaces/ikechan8370/vits-uma-genshin-honkai)

## Installation method

Enter Yunzai root directory

Please place chatgpt-plugin in the plugins directory of Yunzai-Bot

It is recommended to use git for installation, for easy subsequent upgrades.

Open the terminal in the Yunzai-Bot root directory and run the following command to install

```bash
git clone --depth=1 https://github.com/KyrinChan/KyrinChan_Adapter.git ./plugins/chatgpt-plugin/
cd plugins/chatgpt-plugin
pnpm i
```

## Usage method

Determine the connection mode according to the toggleMode in the configuration file.

at mode: @bot Send chat content

prefix mode: [#chat+question], this mode can avoid command conflicts.

Use your imagination and create your own robot style!

Text/picture reply mode #chatgpt text/picture/voice mode can control the way the robot replies

Conversation related #chatgpt conversation list #end conversation [@someone] #clear chat queue #remove chat queue head #chatgpt turn on/off question confirmation ...

Setting related #chat switch browser/API/API2/API3/Bing #chatgpt set [Bing]Token ...

Get help #chatgpt help #chatgpt mode help Send #chatgpt help, there are more options to configure

How to update Send #chatgpt update command. If there is a conflict, you can use #chatgpt force update.

## Configuration file

You can refer to config/config.example.json to adjust the configuration of this plugin. Here are some common configuration items:

- toggleMode: Switch at mode or prefix mode
- vitsAPI: Set vits API address
- bingToken: Set Bing login Cookie
- personality: Set AI personality setting

## Contributors

Thanks to the following contributors for their support and help to this project:

- KyrinChan: Project creator and main developer
- ikechan8370: vits API provider and assistant
- NewBing: Chat interface provider

## License

This project is licensed under the MIT license, please see [LICENSE](LICENSE) file for details.