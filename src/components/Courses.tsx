import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Основы Java',
      description: 'Изучите синтаксис, переменные, операторы и базовые концепции программирования',
      level: 'Начальный',
      lessons: 15,
      duration: '4 недели',
      progress: 0,
      icon: 'BookMarked',
    },
    {
      id: 2,
      title: 'ООП в Java',
      description: 'Объектно-ориентированное программирование: классы, наследование, полиморфизм',
      level: 'Средний',
      lessons: 20,
      duration: '6 недель',
      progress: 0,
      icon: 'Box',
    },
    {
      id: 3,
      title: 'Коллекции и структуры данных',
      description: 'ArrayList, HashMap, LinkedList и другие важные структуры данных',
      level: 'Средний',
      lessons: 12,
      duration: '3 недели',
      progress: 0,
      icon: 'Database',
    },
    {
      id: 4,
      title: 'Многопоточность',
      description: 'Работа с потоками, синхронизация и параллельное программирование',
      level: 'Продвинутый',
      lessons: 18,
      duration: '5 недель',
      progress: 0,
      icon: 'Layers',
    },
    {
      id: 5,
      title: 'Spring Framework',
      description: 'Разработка веб-приложений с Spring Boot, REST API и базы данных',
      level: 'Продвинутый',
      lessons: 25,
      duration: '8 недель',
      progress: 0,
      icon: 'Leaf',
    },
    {
      id: 6,
      title: 'Алгоритмы и задачи',
      description: 'Решение практических задач и подготовка к собеседованиям',
      level: 'Средний',
      lessons: 30,
      duration: '6 недель',
      progress: 0,
      icon: 'Zap',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Средний': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Продвинутый': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Курсы Java</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Структурированная программа обучения от базовых концепций до профессиональной разработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {courses.map((course) => (
            <Card key={course.id} className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={course.icon} size={24} className="text-primary" />
                  </div>
                  <Badge className={getLevelColor(course.level)} variant="outline">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BookOpen" size={16} />
                    <span>{course.lessons} уроков</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <Icon name="PlayCircle" size={18} />
                  Начать курс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
