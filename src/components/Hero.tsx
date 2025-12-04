import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              🚀 Начни изучать Java сегодня
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Освой Java с нуля до профессионала
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Интерактивная платформа для изучения Java с практическими заданиями, 
            встроенным редактором кода и поддержкой сообщества
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gap-2 text-lg px-8"
              onClick={() => setActiveSection('courses')}
            >
              <Icon name="PlayCircle" size={20} />
              Начать обучение
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-lg px-8"
              onClick={() => setActiveSection('practice')}
            >
              <Icon name="Code" size={20} />
              Попробовать редактор
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">50+ уроков</h3>
              <p className="text-muted-foreground text-sm">От основ до продвинутых концепций</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Code" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Интерактивная практика</h3>
              <p className="text-muted-foreground text-sm">Пиши и тестируй код в браузере</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Активное сообщество</h3>
              <p className="text-muted-foreground text-sm">Помощь и поддержка 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
