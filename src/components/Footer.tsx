import Icon from '@/components/ui/icon';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'О нас', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Партнеры', href: '#' },
    ],
    resources: [
      { label: 'Документация', href: '#' },
      { label: 'Примеры кода', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Обновления', href: '#' },
    ],
    support: [
      { label: 'Помощь', href: '#' },
      { label: 'Форум', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    legal: [
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Условия использования', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'Github', href: '#', label: 'GitHub' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Youtube', href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Coffee" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">JavaLearn</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Интерактивная платформа для изучения Java с нуля до профессионального уровня. 
              Практические задачи, встроенный редактор кода и поддержка сообщества.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Ресурсы</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Поддержка</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Правовая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JavaLearn. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Heart" size={16} className="text-red-500" />
              <span>Сделано с любовью к Java</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
