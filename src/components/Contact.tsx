import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'support@javalearn.ru',
      action: 'Написать письмо',
      color: 'text-primary',
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      description: '@javalearn_support',
      action: 'Открыть Telegram',
      color: 'text-secondary',
    },
    {
      icon: 'Github',
      title: 'GitHub',
      description: 'github.com/javalearn',
      action: 'Открыть GitHub',
      color: 'text-foreground',
    },
    {
      icon: 'Twitter',
      title: 'Twitter',
      description: '@javalearn_dev',
      action: 'Открыть Twitter',
      color: 'text-primary',
    },
  ];

  const faq = [
    {
      question: 'Сколько времени занимает обучение?',
      answer: 'В среднем от 3 до 6 месяцев в зависимости от выбранного курса и темпа обучения.',
    },
    {
      question: 'Нужен ли опыт программирования?',
      answer: 'Нет, наши курсы подходят для начинающих. Мы начинаем с самых основ.',
    },
    {
      question: 'Получу ли я сертификат?',
      answer: 'Да, после успешного завершения курса вы получите сертификат о прохождении.',
    },
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тема</label>
                  <Input placeholder="О чем вы хотите написать?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Ваше сообщение..." 
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name={method.icon} size={24} className={method.color} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground break-all">{method.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Частые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <Icon name="HelpCircle" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      {item.question}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Время работы поддержки</h3>
                    <p className="text-sm text-muted-foreground">
                      Понедельник - Пятница: 9:00 - 18:00 (МСК)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Суббота - Воскресенье: 10:00 - 16:00 (МСК)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
