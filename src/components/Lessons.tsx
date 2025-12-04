import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Lessons = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const modules = [
    {
      id: 1,
      title: 'Введение в Java',
      lessons: [
        { id: 1, title: 'Что такое Java и JVM', duration: '15 мин', type: 'Теория' },
        { id: 2, title: 'Установка JDK и IDE', duration: '20 мин', type: 'Практика' },
        { id: 3, title: 'Первая программа Hello World', duration: '10 мин', type: 'Практика' },
        { id: 4, title: 'Структура Java программы', duration: '15 мин', type: 'Теория' },
      ],
    },
    {
      id: 2,
      title: 'Переменные и типы данных',
      lessons: [
        { id: 5, title: 'Примитивные типы данных', duration: '20 мин', type: 'Теория' },
        { id: 6, title: 'Переменные и константы', duration: '15 мин', type: 'Практика' },
        { id: 7, title: 'Преобразование типов', duration: '18 мин', type: 'Практика' },
        { id: 8, title: 'Строки в Java', duration: '25 мин', type: 'Теория' },
      ],
    },
    {
      id: 3,
      title: 'Операторы и условия',
      lessons: [
        { id: 9, title: 'Арифметические операторы', duration: '12 мин', type: 'Теория' },
        { id: 10, title: 'Логические операторы', duration: '15 мин', type: 'Теория' },
        { id: 11, title: 'Условный оператор if-else', duration: '20 мин', type: 'Практика' },
        { id: 12, title: 'Оператор switch', duration: '18 мин', type: 'Практика' },
      ],
    },
    {
      id: 4,
      title: 'Циклы',
      lessons: [
        { id: 13, title: 'Цикл for', duration: '20 мин', type: 'Практика' },
        { id: 14, title: 'Цикл while и do-while', duration: '18 мин', type: 'Практика' },
        { id: 15, title: 'Break и continue', duration: '12 мин', type: 'Теория' },
        { id: 16, title: 'Вложенные циклы', duration: '22 мин', type: 'Практика' },
      ],
    },
  ];

  const getLessonTypeColor = (type: string) => {
    return type === 'Теория' 
      ? 'bg-secondary/10 text-secondary border-secondary/20' 
      : 'bg-primary/10 text-primary border-primary/20';
  };

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Уроки</h2>
          <p className="text-xl text-muted-foreground">
            Пошаговое изучение Java с теорией и практикой
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between bg-card p-4 rounded-lg border border-border">
          <div>
            <p className="text-sm text-muted-foreground">Ваш прогресс</p>
            <p className="text-2xl font-bold">
              {completedLessons.length} / {modules.reduce((acc, m) => acc + m.lessons.length, 0)} уроков
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Завершено</p>
            <p className="text-2xl font-bold text-primary">
              {Math.round((completedLessons.length / modules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100)}%
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-scale-in">
          {modules.map((module) => (
            <AccordionItem key={module.id} value={`module-${module.id}`} className="border border-border rounded-lg overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Модуль {module.id}: {module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.lessons.length} уроков</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2 pt-2">
                  {module.lessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-background"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            completedLessons.includes(lesson.id)
                              ? 'bg-primary border-primary'
                              : 'border-muted-foreground'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) && (
                            <Icon name="Check" size={14} className="text-primary-foreground" />
                          )}
                        </button>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{lesson.title}</h4>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={getLessonTypeColor(lesson.type)}>
                              {lesson.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="PlayCircle" size={16} />
                        Начать
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Lessons;
