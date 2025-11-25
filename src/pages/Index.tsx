import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Комплексные решения по электроснабжению объектов любого масштаба, обеспечение безопасности и соответствия современным технологиям.'
    },
    {
      icon: 'Box',
      title: 'Заливка бетона',
      description: 'Обеспечение долговечности и надежных фундаментных и конструктивных сооружений.'
    },
    {
      icon: 'Layers',
      title: 'Армирование и монтаж металлоконструкций',
      description: 'Профессиональное армирование железобетонных конструкций и металлических элементов для разных типов зданий и сооружений.'
    },
    {
      icon: 'CircleDot',
      title: 'Бурение отверстий в бетоне и камне',
      description: 'Точные и без пыли работы с использованием современного оборудования для выполнения отверстий любой сложности.'
    },
    {
      icon: 'TreePine',
      title: 'Бурение отверстий в дереве',
      description: 'Надежные и чистые технологии для проведения отверстий любой глубины и диаметра в деревянных конструкциях.'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Инженерный контроль',
      description: 'Профессиональный анализ проектных решений и строительных работ для обеспечения их соответствия высоким стандартам.'
    }
  ];

  const advantages = [
    {
      icon: 'Package',
      title: 'Комплексный спектр услуг',
      description: 'От электрики до бетонирования, все в одном месте'
    },
    {
      icon: 'Wind',
      title: 'Без пыли и минимальные Disruption',
      description: 'Работа по современным технологиям с сокращением пыли и шума'
    },
    {
      icon: 'Award',
      title: 'Премиальное качество и надежность',
      description: 'Соответствие высоким стандартам и использование только проверенных материалов'
    },
    {
      icon: 'User',
      title: 'Индивидуальный подход',
      description: 'Учитываем все особенности проекта и пожелания клиента'
    },
    {
      icon: 'TrendingUp',
      title: 'Эффективность и современность',
      description: 'Выполнение работ в срок без ущерба для качества'
    },
    {
      icon: 'Users',
      title: 'Опыт и профессионализм',
      description: 'Команда мастеров с богатым опытом'
    },
    {
      icon: 'Cpu',
      title: 'Высокотехнологические решения',
      description: 'Используем современные технологии и оборудование для максимально точных и качественных работ'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-secondary" size={32} />
              <span className="font-serif font-bold text-foreground text-4xl">НовоСтрой Сочи</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-secondary ${activeSection === 'home' ? 'text-secondary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-secondary ${activeSection === 'about' ? 'text-secondary' : 'text-muted-foreground'}`}
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors hover:text-secondary ${activeSection === 'services' ? 'text-secondary' : 'text-muted-foreground'}`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-secondary ${activeSection === 'contacts' ? 'text-secondary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                НовоСтрой Сочи
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Комплексный подход к строительству и инженерным работам
              </p>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-foreground font-medium"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться с нами
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/ee88f3cd-eca3-4e37-a619-90629cb57abb.jpg" 
                alt="НовоСтрой Сочи" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              О компании
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Комплексный подход к строительству и инженерным работам: электрика, бетонные заливки, армирование, 
              бурение в бетоне и дереве — без пыли, с точностью и современными технологиями.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name={advantage.icon} className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр строительных и инженерных услуг высочайшего качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-card p-8 rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:shadow-xl">
                <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={service.icon} className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Контакты
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для консультации по вашему проекту
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Краснодарский край, г. Сочи</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <a href="tel:+79950655235" className="text-muted-foreground hover:text-secondary transition-colors">
                      +7 (995) 065-52-35
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@grandsochistroy.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@grandsochistroy.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="FileText" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ИНН</h3>
                    <p className="text-muted-foreground">1234567890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="MessageCircle" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a href="https://wa.me/79950655235" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                      +7 (995) 065-52-35
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="text-center">
                    <Icon name="Building2" className="text-secondary mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                      НовоСтрой Сочи
                    </h3>
                    <p className="text-muted-foreground">
                      Ваш надежный партнер в строительстве и инженерных работах
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-foreground font-medium"
                    onClick={() => window.open('https://wa.me/79950655235', '_blank')}
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-secondary" size={24} />
              <span className="font-serif font-bold text-foreground">НовоСтрой Сочи</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;