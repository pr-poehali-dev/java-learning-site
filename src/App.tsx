import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [code, setCode] = useState('public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}');
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput('Hello, World!\n\nКод успешно выполнен! ✓');
  };

  const courses = [
    {
      title: 'Java Основы',
      description: 'Изучите базовый синтаксис, переменные, операторы и управление потоком',
      icon: 'BookOpen',
      level: 'Начальный',
      duration: '4 недели'
    },
    {
      title: 'ООП в Java',
      description: 'Классы, объекты, наследование, полиморфизм и инкапсуляция',
      icon: 'Box',
      level: 'Средний',
      duration: '6 недель'
    },
    {
      title: 'Java Collections',
      description: 'List, Set, Map и работа с коллекциями данных',
      icon: 'Database',
      level: 'Средний',
      duration: '3 недели'
    },
    {
      title: 'Spring Framework',
      description: 'Создание веб-приложений с помощью Spring Boot',
      icon: 'Rocket',
      level: 'Продвинутый',
      duration: '8 недель'
    }
  ];

  const lessons = [
    { title: 'Переменные и типы данных', completed: true },
    { title: 'Условные операторы', completed: true },
    { title: 'Циклы и итерации', completed: false },
    { title: 'Методы и функции', completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Coffee" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">JavaLearn</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['Главная', 'Курсы', 'Уроки', 'Практика', 'Сообщество', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Освойте Java<br />
                <span className="text-primary">с Нуля до Профи</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Интерактивная платформа для изучения Java с практическими заданиями, 
                встроенным редактором кода и поддержкой сообщества
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Смотреть курсы
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Code" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Практика в браузере</CardTitle>
                  <CardDescription>
                    Пишите и тестируйте код прямо в браузере без установки программ
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Trophy" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Геймификация</CardTitle>
                  <CardDescription>
                    Зарабатывайте баллы, получайте награды и отслеживайте прогресс
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Сообщество</CardTitle>
                  <CardDescription>
                    Общайтесь с другими студентами, делитесь кодом и задавайте вопросы
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Популярные курсы</h3>
                  <p className="text-muted-foreground">Выберите направление для изучения</p>
                </div>
                <Button variant="outline" onClick={() => setActiveSection('курсы')}>
                  Все курсы
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                  <Card 
                    key={index} 
                    className="hover:border-primary transition-all cursor-pointer group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <Icon name={course.icon} size={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.level}</span>
                        <span>{course.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'курсы' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Все курсы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:border-primary transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={course.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{course.level}</span>
                      <span className="text-muted-foreground">{course.duration}</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      Начать курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'уроки' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Мои уроки</h2>
            <Card>
              <CardHeader>
                <CardTitle>Java Основы - Прогресс</CardTitle>
                <CardDescription>2 из 4 уроков завершено</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {lessons.map((lesson, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        lesson.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        {lesson.completed ? (
                          <Icon name="Check" size={16} />
                        ) : (
                          <span className="text-sm">{index + 1}</span>
                        )}
                      </div>
                      <span className={lesson.completed ? 'text-muted-foreground line-through' : ''}>
                        {lesson.title}
                      </span>
                    </div>
                    <Button variant={lesson.completed ? 'outline' : 'default'} size="sm">
                      {lesson.completed ? 'Повторить' : 'Начать'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'практика' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Практика кода</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Редактор кода</CardTitle>
                  <CardDescription>Напишите свой Java код и запустите его</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-96 bg-muted border border-border rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    spellCheck={false}
                  />
                  <Button 
                    onClick={runCode}
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    Запустить код
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Вывод программы</CardTitle>
                  <CardDescription>Результаты выполнения вашего кода</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-96 bg-muted border border-border rounded-lg p-4 font-mono text-sm overflow-auto">
                    {output || 'Нажмите "Запустить код" для выполнения программы...'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'сообщество' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Сообщество</h2>
            <Tabs defaultValue="discussions" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="discussions">Обсуждения</TabsTrigger>
                <TabsTrigger value="help">Помощь</TabsTrigger>
              </TabsList>
              <TabsContent value="discussions" className="space-y-4 mt-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="cursor-pointer hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Как оптимизировать работу с коллекциями?</CardTitle>
                          <CardDescription>автор: JavaMaster • 2 часа назад</CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="MessageSquare" size={16} />
                          <span className="text-sm">12</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="help" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Задайте вопрос</CardTitle>
                    <CardDescription>Сообщество поможет вам разобраться</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      type="text"
                      placeholder="Заголовок вопроса"
                      className="w-full bg-muted border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      placeholder="Опишите вашу проблему..."
                      className="w-full h-32 bg-muted border border-border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Опубликовать вопрос
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'контакты' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">support@javalearn.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-muted-foreground">@javalearn_support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Github" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">github.com/javalearn</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 JavaLearn. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
