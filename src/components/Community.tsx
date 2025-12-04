import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Community = () => {
  const stats = [
    { label: 'Активных студентов', value: '12,450', icon: 'Users', color: 'text-primary' },
    { label: 'Уроков доступно', value: '340', icon: 'BookOpen', color: 'text-secondary' },
    { label: 'Решенных задач', value: '45,200', icon: 'CheckCircle', color: 'text-green-500' },
    { label: 'Преподавателей', value: '28', icon: 'GraduationCap', color: 'text-yellow-500' },
  ];

  const recentActivity = [
    {
      user: 'Алексей Морозов',
      avatar: 'АМ',
      action: 'решил задачу',
      item: 'Реверс массива',
      time: '5 минут назад',
      points: '+50',
    },
    {
      user: 'Мария Котова',
      avatar: 'МК',
      action: 'завершила курс',
      item: 'Основы Java',
      time: '1 час назад',
      points: '+500',
    },
    {
      user: 'Дмитрий Петров',
      avatar: 'ДП',
      action: 'получил сертификат',
      item: 'ООП в Java',
      time: '2 часа назад',
      points: '+1000',
    },
    {
      user: 'Елена Смирнова',
      avatar: 'ЕС',
      action: 'помогла с задачей',
      item: 'Многопоточность',
      time: '3 часа назад',
      points: '+100',
    },
    {
      user: 'Игорь Волков',
      avatar: 'ИВ',
      action: 'начал курс',
      item: 'Spring Framework',
      time: '5 часов назад',
      points: '+10',
    },
  ];

  const topContributors = [
    { name: 'Анна Иванова', avatar: 'АИ', points: 15420, rank: 1 },
    { name: 'Сергей Козлов', avatar: 'СК', points: 14830, rank: 2 },
    { name: 'Ольга Новикова', avatar: 'ОН', points: 13950, rank: 3 },
    { name: 'Павел Соколов', avatar: 'ПС', points: 12760, rank: 4 },
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Сообщество</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к тысячам разработчиков, которые изучают Java вместе
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-scale-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <Icon name={stat.icon} size={40} className={`mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={24} className="text-primary" />
                  Недавняя активность
                </CardTitle>
                <CardDescription>Что происходит в сообществе прямо сейчас</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card"
                  >
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {activity.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold">{activity.user}</span>{' '}
                        <span className="text-muted-foreground">{activity.action}</span>{' '}
                        <span className="text-primary font-medium">"{activity.item}"</span>
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {activity.time}
                        </span>
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {activity.points}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-yellow-500" />
                  Топ участников
                </CardTitle>
                <CardDescription>Лучшие студенты этого месяца</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor) => (
                  <div 
                    key={contributor.rank}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      contributor.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                      contributor.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                      contributor.rank === 3 ? 'bg-orange-500/20 text-orange-500' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {contributor.rank}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.points.toLocaleString()} баллов</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6 text-center space-y-4">
                <Icon name="Users" size={48} className="mx-auto text-primary" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Присоединяйтесь к Discord</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Общайтесь с другими студентами, задавайте вопросы и получайте помощь
                  </p>
                </div>
                <Button className="w-full gap-2">
                  <Icon name="MessageCircle" size={18} />
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
