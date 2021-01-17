require('dotenv').config();
const axios = require('axios');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const baseUrl = process.env.BASE_URL;

const getAllCourses = () => {
    const res = axios.get(baseUrl)
    return res.then(res => res.data)
}


bot.start((ctx) => ctx.reply("Moro"))

bot.command('kurssit', (ctx) => {
    getAllCourses().then(data => ctx.reply(data))
})


bot.launch()