import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'courses', label: 'Курсы', icon: 'BookOpen' },
    { id: 'lessons', label: 'Уроки', icon: 'GraduationCap' },
    { id: 'practice', label: 'Практика', icon: 'Code' },
    { id: 'community', label: 'Сообщество', icon: 'Users' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Coffee" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">JavaLearn</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </Button>
            ))}
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
