import { get } from "mongoose";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'eng',
    messages: {
        eng: {
            lang: 'english',
            product: 'Product',
            features: 'Features',
            marketplace: 'Marketplace',
            company: 'Company',
            title_h1: 'Data to enrich your online business',
            description_h1: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
            learn: 'Learn more',
            get_started: 'Get started',
            title_app: 'Everything you need to deploy your app',
            description_app: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',

        },
        ru: {
            lang: 'русский',
            product: 'Продукт',
            features: 'Функции',
            marketplace: 'Маркетплейс',
            company: 'Компания',
            title_h1: 'Данные для расширения вашего онлайн-бизнеса',
            description_h1: 'Я живу в большом городе и никогда не покидаю его. Я хочу, чтобы ты знал, что такое купидон и коммодор. Я хочу, чтобы ты скрывался от всех, кто скрывается от меня.',
            learn: 'Узнать больше',
            get_started: 'Начать',
            title_app: 'Все что нужно для развития вашего приложения',
            description_app: 'Что такое подлинное порицание , когда в чувственном мире нет места насилию , что влечет за собой большие иллюзии, когда скорбь и бегство от сладострастия сводятся к нулю.',
        }
    }
}))